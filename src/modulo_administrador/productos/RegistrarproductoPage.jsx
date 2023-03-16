import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { app,db } from '../../firebaseConfig/conexion_firebase'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
const storage=getStorage(app)

const Registrarproducto = () => {
  const [ codigo_producto, setCodigoproducto ] = useState('')
  const [ nombre_producto, setNombreproducto ] = useState('')
  const [ descripcion_producto, setDescripcionproducto ] = useState('')
  const [ cantidad_producto, setCantidadproducto ] = useState('')
  const [ precio_producto, setPrecioproducto ] = useState('')

   
     async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`productos/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }

  const categoriaCollection = collection(db, "producto")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( categoriaCollection, {codigo_producto:codigo_producto, 
	                                    nombre_producto:nombre_producto,
										descripcion_producto:descripcion_producto,
										cantidad_producto:cantidad_producto,
										precio_producto:precio_producto

										} )

    
        		    alert("Registro Con Exito");
	                window.location.href ="/Moduloadministrador/ListadoProducto"  
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
                        <label for="Categoriar">Codigo Producto</label>
                        <input
                            value={codigo_producto}
                            onChange={ (e) => setCodigoproducto(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Codigo Producto ..."
							minlength="3"
							maxlength="20"
                            required
							
                        />
                    </div>                  

				 <div className="form-group">
                        <label for="Categoriar">Nombre Producto</label>
                        <input
                            value={nombre_producto}
                            onChange={ (e) => setNombreproducto(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Producto ..."
							minlength="3"
							maxlength="20"
                            required
                        />
                    </div>  
					
					 <div className="form-group">
                        <label for="Categoriar">Precio Producto</label>
                        <input
                            value={precio_producto}
                            onChange={ (e) => setPrecioproducto(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Precio Producto ..."
							min="1"
							max="7"
                            required
                        />
                    </div>  
					
						 <div className="form-group">
                        <label for="Categoriar">Cantidad Producto</label>
                        <input
                            value={cantidad_producto}
                            onChange={ (e) => setCantidadproducto(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Cantidad Producto ..."
							min="1"
							max="7"
                            required
                        />
                    </div> 
					
                    <div className="form-group">
                        <label className="descripcionr">Descripción Categoria</label>
                        <textarea
                            value={descripcion_producto}
                            onChange={ (e) => setDescripcionproducto(e.target.value)} 
                            className='form-control'
						    placeholder="Descripcion Producto ..."
							rows="10" 
							cols="50"
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
					<Link to="/Moduloadministrador/ListadoProducto" className='btn btn-primary mr-2'>Regresar</Link>
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

export default Registrarproducto