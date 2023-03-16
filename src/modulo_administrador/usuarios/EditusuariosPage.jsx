import { useEffect, useState }    from "react"
import { Link, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {app,db} from '../../firebaseConfig/conexion_firebase'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
const storage=getStorage(app)

const Editusuarios = () => {
  const [ nombre_usuario,setNombreusuario ] = useState('')
  const [ email_usuario,setEmailusuario ] = useState('')
  const [ clave_usuario,setClaveusuario ] = useState('')
  const [ nivel_usuario,setNivelusuario ] = useState('')
   
    const {id} = useParams()
     
	async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`Usuarios/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   } 
	 
    const update = async (e) => {
        e.preventDefault()
        const empresa = doc(db, "Usuarios", id)
        const data = { 
					   nombre_usuario:nombre_usuario,
					   email_usuario:email_usuario,
					   clave_usuario:clave_usuario,
					   nivel_usuario:nivel_usuario
					   
					 }
        await updateDoc(empresa, data)
        alert("Registro Modificado Con Exito");
    }

    const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "Usuarios", id) )
        if(empresa.exists()) {
            //console.log(product.data())
            setNombreusuario(empresa.data().nombre_usuario)    
            setEmailusuario(empresa.data().email_usuario)
			setClaveusuario(empresa.data().clave_usuario)    
            setNivelusuario(empresa.data().nivel_usuario)
			
        }else{
            console.log('El Usuario no existe')
        }
    }

    useEffect( () => {
        getEmpresaById(id)
        // eslint-disable-next-line
    }, [])
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
			   <h4 className="card-title">Editar Usuario {nombre_usuario}</h4>
                 <form className="forms-sample"onSubmit={update}>
                    <div className="form-group">
                        <label for="Codigor">Nombre Usuario</label>
                        <input
                            value={nombre_usuario}
                            onChange={ (e) => setNombreusuario(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Usuario ..."
							minlength="3"
							maxlength="20"
                            required
                        />
                    </div>  
                    <div className="form-group">
                        <label className="nombrer">Correo Electronico</label>
                        <input
                            value={email_usuario}
                            onChange={ (e) => setEmailusuario(e.target.value)} 
                            type="email"
                            className='form-control'
						    placeholder=" Correo Electronico ..."
							minlength="3"
							maxlength="20"
                            required
                        />              
                    </div> 

                     <div className="form-group">
                        <label className="nombrer">Clave Usuario</label>
                        <input
                            value={clave_usuario}
                            onChange={ (e) => setClaveusuario(e.target.value)} 
                            type="password"
                            className="form-control"
						    placeholder="Clave Usuario..."							
							minlength="8"
							malength="20"
                            required
                        />              
                    </div> 
					
					
                      <div className="form-group">
                        <label className="nombrer">Nivel Usuario</label>
                        <select  
						  value={nivel_usuario} 
						  onChange={ (e) => setNivelusuario(e.target.value)} 
						  required
						  >
                           
                          <option value="">-Seleccione</option>
                          <option value="a1">Administrador</option>
                          <option value="a2">Usuario</option>
						 
                        </select>              
                    </div> 
					
					<div className="form-group">
                        <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className='form-control'
						    
                        />              
                    </div> 
                   <div align="Center">
                        <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
					    <Link to="/Moduloadministrador/Listadousuarios" className='btn btn-primary mr-2'>Regresar</Link>
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

export default  Editusuarios