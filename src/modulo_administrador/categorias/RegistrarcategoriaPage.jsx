import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { app,db } from '../../firebaseConfig/conexion_firebase'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'

import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'
import  './centro.css'

const storage=getStorage(app)

const Registrarcategoria = () => {
  
  
  const [ nombre_categoria, setNombrecategoria ] = useState('')
  const [ descripcion_categoria, setDescripcioncategoria ] = useState('')
   


  
const categoriaCollection = collection(db, "categoria_empresa")
   
   async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`categoria/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	    const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
	   
   }
   
    const store = async (e) => {
    e.preventDefault()
    await addDoc( categoriaCollection, { nombre_categoria:nombre_categoria, 
	                                     descripcion_categoria:descripcion_categoria
                                         				 
										} )
		            
	
        		    alert("Registro Con Exito");
	                window.location.href ="/Moduloadministrador/ListadoCategoria"  
             
			
		
		
		 }  
		
   
  
  return (
  <div className="container-scroller">
       <Mheader/>
      <div  className="container-fluid page-body-wrapper">
        
      <Mnav/>
        <div className="main-panel">
    <div className='content-wrapper'>
        <div className='row'>
            <div className='col-md-6 grid-margin stretch-card'>
             <div className="card">
			  <div className="card-body">
			   <h4 className="card-title">Registro Categoria</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Categoriar">Nombre Categoria</label>
                        <input
                            value={nombre_categoria}
                            onChange={ (e) => setNombrecategoria(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Categoria ..."
						    required
                        />
                    </div>  
                    
					<div className="form-group">
                        <label className="descripcionr">Descripción Categoria</label>
                        <textarea
                           
                            onChange={ (e) => setDescripcioncategoria(e.target.value)} 
                            className='form-control'
						    placeholder="Descripción Categoria ..."
							required
							
                         />    
                        
                    </div> 
					
						<div className="form-group">
                        <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className='form-control'
						    required
                        />              
                    </div>  
					
				<div align="Center">
                    <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
					<Link to="/Moduloadministrador/ListadoCategoria" className='btn btn-primary mr-2'>Regresar</Link>
                </div> 
				 </form>   
				</div>
			  </div>
            </div>
        </div>
	    </div>
     </div>
 </div>
    </div> 
  )
}

export default Registrarcategoria