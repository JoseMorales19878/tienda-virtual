import React,{useState,useEffect}from 'react'
import {Link} from 'react-router-dom'
import {collection,getDocs,getDoc,deleteDoc,doc}from 'firebase/firestore'
import {db} from '../../firebaseConfig/conexion_firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader          from '../Mheader'
import Mnav             from '../Mnav'
import Mfooter          from '../Mfooter'

const MySwal = withReactContent(Swal)

const ListadoCategoria = () => {
let contador=1;	
//1.configuramos los hooks
  const [categorias,setCategorias ]=useState([])
//2. referencia a la bd
  const  categoriaCollection=collection(db,"categoria_empresa")
//3. mostrar todos los documentos
  const getCategorias=async ()   => {
  const data=await getDocs(categoriaCollection)
   //console.log(data.docs)
   setCategorias(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria
//4 - Funcion para eliminar un doc
  const deletecategoria = async (id) => {
   const categoriaDoc = doc(db, "categoria_empresa", id)
   await deleteDoc(categoriaDoc)
    getCategorias()
  }
  //5 - Funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: '¿Esta Seguro de Eliminar esta categoria?',
      text: "Categoria Eliminada con Exito",
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
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })    
  }
//6 - usamos useEffect
  useEffect( () => {
    getCategorias()
    // eslint-disable-next-line
  }, [] ) 
  return (
     <>
  <div className="container-scroller">
    <Mheader/>
	<div  className="container-fluid page-body-wrapper">
        
      <Mnav/>
        <div className="main-panel">
	<div className="main-panel">
      <div className="content-wrapper">
         <div className="row">
            <div className="col-lg-12 grid-margin stretch-card">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Listado de Categorias</h4>
                     <div className="table-responsive pt-3">
                        <div className="d-grid gap-2">
                          <Link to="/Registrarcategoria" className='btn btn-secondary mt-2 mb-2'>Nuevo Registro</Link>    
                        </div>
					 <table className="table table-bordered">
                         <thead>
                                <tr>
                                <th>
                                    Nr
                                </th>
                                <th>
                                   Categoria
                                </th>
								 <th>
                                  Descripción Categoria
                                </th>
                                <th colSpan={2}>
                                   Elija una Opción
                                </th>
                                </tr>
                         </thead>
                       
					<tbody>
                         
						 { categorias.map( (categoria) => (
                            <tr key={categoria.id}>
							   <td>{categoria.contador}</td>
                               <td>{categoria.nombre_categoria}</td>
							   <td>{categoria.descripcion_categoria}</td>
							   <td><Link to={`/Editcategoria/${categoria.id}`} className="btn btn-light">Editar</Link></td>
							   <td><button onClick={ () => { confirmDelete(categoria.id) } } className="btn btn-danger">Eliminar</button></td>
                            </tr>                
                          ) ) }
						    
                         </tbody>
						
                        </table>   
                     </div>
                   </div>
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

export default ListadoCategoria