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
import Mfooter    from '../../Mfooter'
import Maside           from '../../Maside'
import { useUserAuth } from "../../../context/UsuarioContext";
import RepartidorIdUsuario from '../../../function/perfielempresa/RepartidorIdUsuario'
const MySwal = withReactContent(Swal)

const MisRespartidores = () => {
  	
const { user } = useUserAuth();
 let id_usuario =user.uid
//.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [empre,setEmpresas ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])

//. mostrar todos los documentos
  
  async function actualizarEstadoProductos(){
   const listado=await RepartidorIdUsuario(id_usuario);
  setfiltereCountries(listado)
    setEmpresas(listado)
   }//fin del actualizarEstadoProductos

// - Funcion para eliminar un doc
  const deleteempresa = async (id) => {
   const empresaDoc = doc(db, "repartidor", id)
   await deleteDoc(empresaDoc)
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
        deleteempresa(id)               
        Swal.fire(
          'Eliminado!',
          'Registro Eliminado Con Exito.'
        )
      }
    })    
  }
  const columns= [
  
  {
	name:"Dni",
	selector:(row)=>row.dni_repartidor,
	sortable:true
	
  },
   
   {
	name:"Nombres",
	selector:(row)=>row.nombre_repartidor,
	sortable:true
	
  },
 
   
   {
	name:"Apellidos",
	selector:(row)=>row.apelldio_repartidor
  },
  
  {
	name:"Genero",
	selector:(row)=>row.sexo
  },
  
  {
	name:"fecha Nacimiento",
	selector:(row)=>row.fecha_nacimiento
  },
  
  {
	name:"Dirección",
	selector:(row)=>row.direccion_repartidor
  },
  
  {
	name:"Telefono",
	selector:(row)=>row.telefono_repartidor
  },
  
  {
	name:"Correo Electronico",
	selector:(row)=>row.correo_repartidor
  },
  
  {
	name:"Foto",
	selector:(row)=><img src={row.url_imagen_r} width="100" height="100"/>
  },
  
  {
	name:"Modificar",
	cell:(row)=><Link to={`/Modulo_administrador/PerfilEmpresa/repartidores/EditarMiRepartidor/${row.id}`} className="btn btn-light">Editar</Link>
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
				<h1>Modulo Repartidores</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				<li className="breadcrumb-item">
				  <Link to="/Moduloadministrador">Inicio</Link>
				</li>  
				  <li className="breadcrumb-item active"> Listado  Repartidores</li>
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
							actions={<Link to="/Modulo_administrador/PerfilEmpresa/MisRespartidores/RegistrarRepartidor" className='btn btn-secondary mt-2 mb-2'>Nuevo Registro</Link>    }
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

export default MisRespartidores




