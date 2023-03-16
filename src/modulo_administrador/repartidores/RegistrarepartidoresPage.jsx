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

const RegistrarRepartidores= () => {

  const [ dni_repartidor,setDnirepartidor ] = useState('')
  const [ nombre_repartidor,setNombrerepartidor ] = useState('')
  const [ apelldio_repartidor,setApelldiorepartidor ] = useState('')
  const [ direccion_repartidor,setDireccionrepartidor ] = useState('')
  const [ fecha,setFecha ] = useState('')
  const [ correo_repartidor,setCorreorepartidor ] = useState('')
  const [ sexo,setSexo] = useState('')
  const [ telefono_repartidor,setTelefonorepartidor ] = useState('')

  const empresaCollection = collection(db, "repartidor")

   async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`repartidor/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }

  const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollection, { dni_repartidor:dni_repartidor, 
	                                   nombre_repartidor:nombre_repartidor,
									   apelldio_repartidor:apelldio_repartidor,
									   direccion_repartidor:direccion_repartidor,
									   fecha:fecha,
									   correo_repartidor:correo_repartidor, 
									   sexo:sexo,
									   telefono_repartidor:telefono_repartidor
									   } )
     alert("Registro Con Exito");
	 window.location.href ="/Moduloadministrador/ListadoRepartidores"  
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
			   <h4 className="card-title">Registro Empresas</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Codigor">Dni Repartidor</label>
                        <input
                            value={dni_repartidor}
                            onChange={ (e) => setDnirepartidor(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Dni Repartidor ..."
						    min="20"
                            required
                        />
                    </div>  
                  
				  <div className="form-group">
                        <label className="nombrer">Nombre Repartidor</label>
                        <input
                            value={nombre_repartidor}
                            onChange={ (e) => setNombrerepartidor(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Repartidor ..."
							minlength="3"
							maxlength="20"
                            required
                        />              
                    </div> 
					
					  <div className="form-group">
                        <label className="nombrer">Apelldio Repartidor</label>
                        <input
                            value={apelldio_repartidor}
                            onChange={ (e) => setApelldiorepartidor(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Apelldio Repartidor ..."
							minlength="3"
							maxlength="20"
                            required
                        />              
                    </div> 

                      
					  <div className="form-group">
                        <label className="nombrer">Fecha Nacimiento</label>
                        <input
                            value={fecha}
                            onChange={ (e) => setFecha(e.target.value)} 
                            type="date"
                            className='form-control'
						    placeholder="Fecha Nacimiento ..."
                            required
                        />              
                    </div> 
                     
					 <div className="form-group">
                        <label className="direccionr">Dirección Repartidor</label>
                        <textarea
                            value={direccion_repartidor}
                            onChange={ (e) => setDireccionrepartidor(e.target.value)} 
                            className='form-control'
						    placeholder="Dirección Repartidor ..."
							rows="10" 
							cols="50"
							required
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="correor">Correo Repartidor</label>
                        <input
                            value={correo_repartidor}
                            onChange={ (e) => setCorreorepartidor(e.target.value)} 
                            type="email"
						     maxlength="50"
                            required
							className='form-control'
						    placeholder="Correo Repartidor ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="dnir">Genero</label>
                        <input
                            value={sexo}
                            onChange={ (e) => setSexo(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Sexo ..."
							maxlength="9"
							minlenght="8"
							 required
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="telefonor">Telefono Repartidor</label>
                        <input
                            value={telefono_repartidor}
                            onChange={ (e) => setTelefonorepartidor(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Telefono Repartidor ..."
							min="8"
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
					    <Link to="/Moduloadministrador/ListadoRepartidores" className='btn btn-primary mr-2'>Regresar</Link>
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

export default RegistrarRepartidores