import React,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import {collection,getDocs,getDoc,deleteDoc,doc}from 'firebase/firestore'
import {db} from '../../firebaseConfig/conexion_firebase'
import DataTable from 'react-data-table-component'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader          from '../Mheader'
import Mnav             from '../Mnav'
import Mfooter          from '../Mfooter'

const MySwal = withReactContent(Swal)

const Listadoplanes = () => {
let contador=1;	
//1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [planes,setPlanes ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])
//2. referencia a la bd
  const  planesCollection=collection(db,"adquision_plan")
//3. mostrar todos los documentos
  const getPlanes=async ()   => {
  const data=await getDocs(planesCollection)
   //console.log(data.docs)
   setPlanes(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria
//4 - Funcion para eliminar un doc
   const deleteplanes = async (id) => {
   const planesDoc = doc(db, "adquision_plan", id)
   await deleteDoc(planesDoc)
    getPlanes()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar este plan?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) { 
        //llamamos a la fcion para eliminar   
        deleteplanes(id)               
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
	name:"Nombre Plan ",
	selector:(row)=>row.nombre_plan,
	sortable:true
	
  },
  
   {
	name:"Precio Plan ",
	selector:(row)=>row.precio_plan,
	sortable:true
	
  },
  
  {
	name:"Descripción Plan",
	selector:(row)=>row.descripcion_plan
  },
  
 
  {
	name:"Modificar",
	cell:(row)=><Link to={`/Moduloadministrador/Editplanes/${row.id}`} className="btn btn-light">Editar</Link>
  },
   {
	name:"Eliminar",
	cell:(row)=><button onClick={ () => { confirmDelete(row.id) } } className="btn btn-danger">Eliminar</button>
  }
  
  ]
//6 - usamos useEffect
  useEffect( () => {
    getPlanes()
    // eslint-disable-next-line
  }, [] )

  useEffect( () => {
    const result=planes.filter((country)=>{
	  return country.nombre_plan.toLowerCase().match(search.toLowerCase())
	})
	setfiltereCountries(result)
    // eslint-disable-next-line
  }, [search] ) 
 
  return (
     <>
  <div className="container-scroller">
    <Mheader/>
	<div  className="container-fluid page-body-wrapper">
        
      <Mnav/>
      
        
	<div className="main-panel">
      <div className="content-wrapper">
         <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Listado de Planes</h4>
                       <DataTable 
							columns={columns} 
							data={filtereCountries} 
							fixedHeader 
							pagination
							fixedHeaderScrollHeight="450px"
							selecttablesRow
							selecttablesRowHighlight
							actions={<Link to="/Moduloadministrador/Registrarplanes" className='btn btn-secondary mt-2 mb-2'>Nuevo Registro</Link>    }
							highlightOnHover
							subHeader
							subHeaderComponent={<input 
												type="text" 
												placeholder="Buscar Planes ..." 
												className="w25 form-control" 
												value={search}
												onChange={(e)=>setSearch(e.target.value)}/>
												}
							/>
                     </div>
                   </div>
                </div>
             </div>
          </div>
    
	 <Mfooter/>  
          </div>     
      </div>
    </div>
	 </>
  )
}

export default Listadoplanes