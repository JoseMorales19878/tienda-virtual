import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {collection,
        getDocs,
		getDoc,
		deleteDoc,
		doc} from 'firebase/firestore'
import {db} from '../../../firebaseConfig/conexion_firebase'
import { useUserAuth } from "../../../context/UsuarioContext";
import DataTable from 'react-data-table-component'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader          from '../../Mheader'
import Mfooter          from '../../Mfooter'
import Maside           from '../../Maside'
import ProductosIdUsuarios from '../../../function/perfielempresa/ProductosIdUsuarios'

const MySwal = withReactContent(Swal)

const  MisProductos  = () => {

const { user } = useUserAuth();
 let id_usuario =user.uid
//.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [empre,setEmpresas ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])

//. mostrar todos los documentos
  
  async function actualizarEstadoProductos(){
   const listado=await ProductosIdUsuarios(id_usuario);
  setfiltereCountries(listado)
    setEmpresas(listado)
   }//fin del actualizarEstadoProductos

// - Funcion para eliminar un doc
  const deleteempresa = async (id) => {
   const empresaDoc = doc(db, "producto", id)
   await deleteDoc(empresaDoc)
    actualizarEstadoProductos()
  }	 
    //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar este Producto?',
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
	name:"Codigo ",
	selector:(row)=>row.codigo_producto,
	sortable:true
	
  },
  
  {
	name:"Producto ",
	selector:(row)=>row.nombre_producto,
	sortable:true
	
  },
  
  {
	name:"Descripción ",
	selector:(row)=>row.descripcion_producto,
	sortable:true
	
  },
  
   {
	name:"Cantidad ",
	selector:(row)=>row.cantidad_producto,
	sortable:true
	
  },
  
    {
	name:"Precio ",
	selector:(row)=>row.precio_producto,
	sortable:true
	
  },
  
  {
	name:"Foto ",
	selector:(row)=><img src={row.url_imagen} width="100" height="100"/>,
	sortable:true
	
  },
  
  {
	name:"Modificar",
	cell:(row)=><Link to={`/Moduloadministrador/PerfilEmpresa/productos/EditarMiProducto/${row.id}`} className="btn btn-light">Editar</Link>
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
	  return country.nombre_producto.toLowerCase().match(search.toLowerCase())
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
				<h1>Listado Producto</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				   <li className="breadcrumb-item">
				       <Link to="/Moduloadministrador">
					   Inicio
					   </Link>
				  </li>
				  
				  <li className="breadcrumb-item active"> 
				       Listado Productos
				  </li>
				  
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
				actions={<Link to="/Moduloadministrador/PerfilEmpresa/productos/RegistroProducto" className='btn btn-secondary mt-2 mb-2'>Nuevo Registro</Link>    }
				highlightOnHover
				subHeader
				subHeaderComponent={<input 
				                    type="text" 
									placeholder="Buscar Producto ..." 
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

export default  MisProductos
