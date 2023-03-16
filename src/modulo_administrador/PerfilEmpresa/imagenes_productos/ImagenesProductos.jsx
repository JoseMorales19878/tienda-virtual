import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {collection,
        getDocs,
		getDoc,
		deleteDoc,
		doc} from 'firebase/firestore'
import Mheader    from '../../Mheader'
import Maside     from '../../Maside'
import Mfooter    from '../../Mfooter'
import {app,db} from '../../../firebaseConfig/conexion_firebase'
import DataTable from 'react-data-table-component'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const ImagenesProductos = () => {
  	
	
	///1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [client,setClientes ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])
//2. referencia a la bd
  const  clientesCollection=collection(db,"producto")
//3. mostrar todos los documentos
  const getClientes=async ()   => {
  const data=await getDocs(clientesCollection)
   //console.log(data.docs)
   setClientes(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria
//4 - Funcion para eliminar un doc
  const deletecliente = async (id) => {
  const clientesDoc = doc(db, "producto", id)
  await deleteDoc(clientesDoc)
    getClientes()
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
        deletecliente(id)               
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
	name:"Codigo Producto ",
	selector:(row)=>row.codigo_producto,
	sortable:true
	
  },
  
  {
	name:"Nombre Producto",
	selector:(row)=>row.nombre_producto
  },
  
  
   {
	name:"Foto ",
	selector:(row)=><img src={row.url_imagen} width="100" height="100"/>,
	sortable:true
	
  },
 
   {
	  name:"Ver Imagenes",
	cell:(row)=><Link 
	                to={`/Moduloadministrador/PerfilEmpresa/VerImagenes/${row.id}`} 
				    className="btn btn-light">
				    Ver
			    </Link>
  }, 
 
  {
	  name:"Registrar",
	cell:(row)=><Link 
	                to={`/Moduloadministrador/PerfilEmpresa/RegistrarProductoImagenes/${row.id}`} 
				    className="btn btn-light">
				    Registrar
			    </Link>
  },
 
  
   {
	name:"Eliminar",
	cell:(row)=><button onClick={ () => { confirmDelete(row.id) } } className="btn btn-danger">Eliminar</button>
  }
  
  ]
  //6 - usamos useEffect
  useEffect( () => {
    getClientes()
    // eslint-disable-next-line
  }, [] )
  
    useEffect( () => {
    const result=client.filter((country)=>{
	  return country.nombre_producto.toLowerCase().match(search.toLowerCase())
	})
	setfiltereCountries(result)
    // eslint-disable-next-line
  }, [search] )
	
	 return (
 <div className="hold-transition sidebar-mini layout-fixed">
  <div className="wrapper">
  <Mheader />
  <Maside />
  <div className="content-wrapper">
	  <section className="content-header">
		  <div className="container-fluid">
			<div className="row mb-2">
			  <div className="col-sm-6">
				<h1> Imagenes Productos</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				   <li className="breadcrumb-item">
				      <Link to="/Moduloadministrador">Inicio</Link>
					</li>  
				  <li className="breadcrumb-item active"> Listado Imagenes de Productos</li>
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
												placeholder="Buscar Imagen Producto ..." 
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
  
}

export default ImagenesProductos
