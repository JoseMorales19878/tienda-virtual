import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {collection,
        getDocs,
		getDoc,
		updateDoc,
		doc} from 'firebase/firestore'
import {db} from '../../../firebaseConfig/conexion_firebase'
import DataTable from 'react-data-table-component'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader          from '../../Mheader'
import Maside           from '../../Maside'
import Mfooter          from '../../Mfooter'

const MySwal = withReactContent(Swal)

const RepartiodrIndividual = () => {

///1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [empre,setEmpresas ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])
  let asi="asignado"
//2. referencia a la bd
  const  empresaCollection=collection(db,"repartidor")
//3. mostrar todos los documentos
  const getEmpresas=async ()   => {
  const data=await getDocs(empresaCollection)
   //console.log(data.docs)
   setEmpresas(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria
//4 - Funcion para eliminar un doc
  const deleteempresa = async (id) => {
   const empresaDoc = doc(db, "repartidor", id)
   const data={Asignacion:asi}
   await updateDoc(empresaDoc,data)
    getEmpresas()
  }	 
    //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Escojer este Repartidor?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteempresa(id)               
        Swal.fire(
          'Exito!',
          'Reparitdor Asignado Con Exito.'
        )
      }
    })    
  }
 
  const columns= [

  
  
  
  {
	name:"Dni repartidor ",
	selector:(row)=>row.dni_repartidor,
	sortable:true
	
  },
  
  {
	name:"Nombre",
	selector:(row)=>row.nombre_repartidor
  },
  
  {
	name:"Apelldio",
	selector:(row)=>row.apelldio_repartidor
  },

  
 
  {
	name:"Correo",
	selector:(row)=>row.correo_repartidor
  },
  
  {
	name:"Telefono",
	selector:(row)=>row.telefono_repartidor
  },
  
   {
	name:"Asignado Empresa",
	selector:(row)=>row.Asignacion
  },
 
  {
	name:"Foto",
	selector:(row)=><img src={row.url_imagen_r} width="50" height="50"/>
  },
 
  {
	name:"Ver Perfil",
	cell:(row)=><Link to={`/Modulo_administrador/PerfilEmpresa/VerRepartidor/${row.id}`} className="btn btn-light">Ver Datos</Link>
  },
   {
	name:"Solicitar",
	cell:(row)=><button onClick={ () => { confirmDelete(row.id) } } className="btn btn-danger">Solicitar</button>
  },
   {
	name:"Referencia",
	cell:(row)=><Link to={`/Modulo_administrador/PerfilEmpresa/VerReferencia/${row.id}`} className="btn btn-danger">Ver Referencia</Link>
  }
  
  ]
  //6 - usamos useEffect
  useEffect( () => {
    getEmpresas()
    // eslint-disable-next-line
  }, [] )
  
    useEffect( () => {
    const result=empre.filter((country)=>{
	  return country.nombre_empresa.toLowerCase().match(search.toLowerCase())
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
				<h1>Modulo Repartidor Individual</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				   <li className="breadcrumb-item">
				     <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active"> Listado  Repartidores Individuales</li>
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
									placeholder="Buscar nombre Repartidor ..." 
									className="w25 form-control" 
									value={search}
									onChange={(e)=>setSearch(e.target.value)}/>
									}
				/>
		          
		  
		</div>
			<Mfooter/>
	  </div>
	</div>
  )
  </>
  )
}

export default RepartiodrIndividual



