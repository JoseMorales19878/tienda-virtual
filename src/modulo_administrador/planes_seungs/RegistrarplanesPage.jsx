import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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

const Registrarcategoria = () => {
  const [ nombre_plan, setNombreplan ] = useState('')
  const [ precio_plan, setPrecioplan ] = useState('')
  const [ descripcion_plan, setDescripcionplan ] = useState('')

  const planesCollection = collection(db, "adquision_plan")

  async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`planes/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }
  const store = async (e) => {
    e.preventDefault()
    await addDoc( planesCollection, {  nombre_plan:nombre_plan, precio_plan:precio_plan,descripcion_plan:descripcion_plan } )
    alert("Registro Con Exito");
	 window.location.href ="/Moduloadministrador/Listadoplanes"  
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
			   <h4 className="card-title">Registro Planes</h4>
                 <form className="forms-sample" onSubmit={store}>
                    <div className="form-group">
                        <label for="Categoriar">Nombre Plan</label>
                        <input
                            value={nombre_plan}
                            onChange={ (e) => setNombreplan(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Plan ..."
							minlength="3"
							maxlength="20"
                            required
                        />
                    </div>  
					<div className="form-group">
                        <label for="Categoriar">Precio Plan</label>
                        <input
                            value={precio_plan}
                            onChange={ (e) => setPrecioplan(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Plan Precio ..."
							min="7"
							
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="descripcionr">Descripción Plan</label>
                        <textarea
                            value={descripcion_plan}
                            onChange={ (e) => setDescripcionplan(e.target.value)} 
                            className='form-control'
						    placeholder="Descripción Plan ..."
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
					    <Link to="/Moduloadministrador/Listadoplanes" className='btn btn-primary mr-2'>Regresar</Link>
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