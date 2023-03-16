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
import Maside      from '../../Maside'
import Mfooter    from '../../Mfooter'
import { useUserAuth } from "../../../context/UsuarioContext";
import RepartidoEmpresaId from '../../../function/perfielempresa/RepartidoEmpresaId'



const MySwal = withReactContent(Swal)

const RepartidoresEmpresa = () => {
  	
const { user } = useUserAuth();
 let id_usuario =user.uid
  
  //1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [empre,setEmpresas ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])
//2. referencia a la bd
//3. mostrar todos los documentos
    async function actualizarEstadoProductos(){
   const listado=await RepartidoEmpresaId(id_usuario);
  setfiltereCountries(listado)
    setEmpresas(listado)
   }//fin del actualizarEstadoProductos

//4 - Funcion para eliminar un doc
  const deletecategoria = async (id) => {
   const categoriaDoc = doc(db, "repartidor", id)
   await deleteDoc(categoriaDoc)
   actualizarEstadoProductos()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar este Repartidor?',
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
	name:"Dni ",
	selector:(row)=>row.dni_repartidor,
	sortable:true
	
  },
  
  {
	name:"Nombre ",
	selector:(row)=>row.nombre_repartidor,
	sortable:true
	
  },
  
   {
	name:"Apellido ",
	selector:(row)=>row.apelldio_repartidor,
	sortable:true
	
  },
  
  {
	name:"Correo ",
	selector:(row)=>row.correo_repartidor,
	sortable:true
	
  },
  
  {
	name:"Telefono ",
	selector:(row)=>row.telefono_repartidor,
	sortable:true
	
  },
  
  
  {
	name:"Foto Repartidor",
	selector:(row)=><img src={row.url_imagen} width="100" height="100"/>
  },
  
  {
	name:"Modificar",
	cell:(row)=><Link to={`/Moduloadministrador/PerfilEmpresa/EditarRepartidorEmpresa/${row.id}`} className="btn btn-light">Editar</Link>
  },
 
   {
	name:"Eliminar",
	cell:(row)=><button onClick={ () => { confirmDelete(row.id) } } className="btn btn-danger">Eliminar</button>
  }
  
  ]
//6 - usamos useEffect
  useEffect( () => {
   actualizarEstadoProductos()
    // eslint-disable-next-line
  }, [] )

  useEffect( () => {
    const result=empre.filter((country)=>{
	  return country.nombre_repartidor.toLowerCase().match(search.toLowerCase())
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
				<h1>Modulo Repartidores Empresa</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				<li className="breadcrumb-item">
				  <Link to="/Moduloadministrador">Inicio</Link>
				</li>
				  <li className="breadcrumb-item active">Listado  Repartidores Empresa</li>
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
							actions={<Link to="/Moduloadministrador/PerfilEmpresa/RegistrarRepartidorEmpresa" className='btn btn-secondary mt-2 mb-2'>Nuevo Registro</Link>    }
							highlightOnHover
							subHeader
							subHeaderComponent={<input 
												type="text" 
												placeholder="Buscar Repartidor ..." 
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

export default RepartidoresEmpresa




