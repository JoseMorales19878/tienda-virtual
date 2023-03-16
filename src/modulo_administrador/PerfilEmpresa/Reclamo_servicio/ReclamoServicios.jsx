import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {collection,
        getDocs,
		getDoc,
		deleteDoc,
		doc} from 'firebase/firestore'
import {db} from '../../../firebaseConfig/conexion_firebase'
import DataTable from 'react-data-table-component'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader    from '../../Mheader'
import Maside     from '../../Maside'
import Mfooter    from '../../Mfooter'

import { useUserAuth } from "../../../context/UsuarioContext";

import RepartidorIdUsuario from '../../../function/perfielempresa/RepartidorIdUsuario'
const MySwal = withReactContent(Swal)

const ReclamoServicios = () => {
  	
const { user } = useUserAuth();
 let id_usuario =user.uid
  
  //1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [categorias,setCategorias ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])
//2. referencia a la bd
  const  categoriaCollection=collection(db,"reclamo_servicio")
//3. mostrar todos los documentos
  const getCategorias=async ()   => {
  const data=await getDocs(categoriaCollection)
   //console.log(data.docs)
   setCategorias(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria
//4 - Funcion para eliminar un doc
  const deletecategoria = async (id) => {
   const categoriaDoc = doc(db, "reclamo_servicio", id)
   await deleteDoc(categoriaDoc)
    getCategorias()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar este Reclamo?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deletecategoria(id)               
        Swal.fire(
          'Eliminado!',
          'Registro Eliminado.',
          'Con Exito'
        )
      }
    })    
  }
  const columns= [
  
  {
	name:"Servicio ",
	selector:(row)=>row.nombre_servicio,
	sortable:true
	
  },
  
  {
	name:"Foto Servicio",
	selector:(row)=><img src={row.imagen_servicio} width="100" height="100"/>
  },
  
  {
	name:"Cliente",
	selector:(row)=>row.nombre_cliente
  },
  
   {
	name:"Foto Cliente",
	selector:(row)=><img src={row.imagen_cliente} width="100" height="100"/>
  },

  {
	name:"Reclamo",
	selector:(row)=>row.observacion
  },

 
   {
	name:"Eliminar",
	cell:(row)=><button onClick={ () => { confirmDelete(row.id) } } className="btn btn-danger">Eliminar</button>
  }
  
  ]
//6 - usamos useEffect
  useEffect( () => {
    getCategorias()
    // eslint-disable-next-line
  }, [] )

  useEffect( () => {
    const result=categorias.filter((country)=>{
	  return country.nombre_servicio.toLowerCase().match(search.toLowerCase())
	})
	setfiltereCountries(result)
    // eslint-disable-next-line
  }, [search] ) 

	
	 return (
	<>
	 <div className="hold-transition sidebar-mini layout-fixed">
  <div className="wrapper">
  <Mheader />
  <Maside />
  <div className="content-wrapper">
	  <section className="content-header">
		  <div className="container-fluid">
			<div className="row mb-2">
			  <div className="col-sm-6">
				<h1>Modulo Reclamo Servicios</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">				 
				    <Link to="/Moduloadministrador">Inicio</Link>
				   </li>
				  <li className="breadcrumb-item active"> Listado Reclamo Servicios</li>
				</ol>
			  </div>
			</div>
		  </div>
		</section>
	
						   <DataTable 
							columns={columns} 
							data={filtereCountries} 
							fixedHeader 
							pagination
							fixedHeaderScrollHeight="450px"
							selecttablesRow
							selecttablesRowHighlight
							highlightOnHover
							subHeader
							subHeaderComponent={<input 
												type="text" 
												placeholder="Buscar Reclamo Servicios ..." 
												className="w25 form-control" 
												value={search}
												onChange={(e)=>setSearch(e.target.value)}/>
												}
				          />
					
		</div>
		<Mfooter/>
	  </div>
	</div>
	</>	   
  )
  
}

export default ReclamoServicios




