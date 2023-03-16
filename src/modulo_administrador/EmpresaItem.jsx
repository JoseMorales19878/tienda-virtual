import {app,db} from '../firebaseConfig/conexion_firebase'
import { useEffect, useState }    from "react"
import { collection,
          getDoc, 
		  getDocs,
		  updateDoc, 
		  doc }
		  from "firebase/firestore"
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL, 
		 deleteObject } 
		 from 'firebase/storage'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const storage=getStorage(app)

const  EmpresaItem= (props) => { 
  const id=props.id
  const [ idd,setIdd ] = useState('')
  const [ nombre_empresa,setNombreempresa ] = useState('')
  const [ direccion_empresa,setDireccionempresa ] = useState('')
  const [ correo_empresa,setCorreoempresa ] = useState('')
  const [ dni,setDni ] = useState('')
  const [ telefono_empresa,setTelefonoempresa ] = useState('')
  const [ profecion_empresa,setProfecionempresa ] = useState('')
  const [ url_empresa,setUrlempresa ] = useState('')
  const [ categorias,setCategorias]=useState('')
  let urlDescarga;
  
  
  
   async function subirArchivo(e)
   {
	   /*const desertRef = ref(storage, `empresa/${idd}`);

		// Delete the file
		deleteObject(desertRef).then(() => {
		  // File deleted successfully
		  console.log("exito")
		}).catch((error) => {
		  // Uh-oh, an error occurred!
		});
	   //detectar archivo*/
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`empresa/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   } 
	 
    const update = async (e) => {
        e.preventDefault()
        const empresa = doc(db, "empresas", id)
        const data = { 
	                                   nombre_empresa:nombre_empresa,
									   direccion_empresa:direccion_empresa,
									   correo_empresa:correo_empresa, 
									   dni:dni,
									   telefono_empresa:telefono_empresa,
									   profecion_empresa:profecion_empresa,
									   url:urlDescarga
					}
        await updateDoc(empresa, data)
       MySwal.fire({
                      title: "Bien hecho!",
                      text: "Perfil Modificado Con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    }

 
 
    const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "empresas", id) )
        if(empresa.exists()) {
            //console.log(product.data())
			setIdd(empresa.data().idd)      
            setNombreempresa(empresa.data().nombre_empresa)
			setDireccionempresa(empresa.data().direccion_empresa)    
            setCorreoempresa(empresa.data().correo_empresa)
			setDni(empresa.data().dni)    
            setTelefonoempresa(empresa.data().telefono_empresa)
			setProfecionempresa(empresa.data().profecion_empresa)
			setUrlempresa(empresa.data().url)
			   
        }else{
            console.log('La Empresa no existe')
        }
    }
 
      
 
     useEffect( () => {
        getEmpresaById(id)
        // eslint-disable-next-line
    }, [])
 
   
 
 
return(
        <div>
				  <div className="card-header">
					<h3 classNames="card-title">
					Perfil Empresas  {nombre_empresa}
					</h3>
				  </div>
 
		        <form id="quickForm" onSubmit={update}>
                   
					
                    <div className="form-group">
                        <label className="nombrer">Nombre Empresa</label>
                        <input
                            value={nombre_empresa}
                            onChange={ (e) => setNombreempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Empresa ..."
							minlength="3"
							maxlength="20"
                            required
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="direccionr">Dirección Empresa</label>
                        <textarea
                            value={direccion_empresa}
                            onChange={ (e) => setDireccionempresa(e.target.value)} 
                            className='form-control'
						    placeholder="Dirección Empresa ..."
							rows="10" 
							cols="50"
							required
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="correor">Correo Empresa</label>
                        <input
                            value={correo_empresa}
                            onChange={ (e) => setCorreoempresa(e.target.value)} 
                            type="email"
                            className='form-control'
						    placeholder="Correo Empresa ..."
							maxlength="50"
                             required
                        />              
                    </div>
					
				<div className="form-group">
                        <label className="dnir">Dni</label>
                        <input
                            value={dni}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Dni Empresa ..."
							minlength="8"
							maxlength="8"
							 required
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="telefonor">Telefono Empresa</label>
                        <input
                            value={telefono_empresa}
                            onChange={ (e) => setTelefonoempresa(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Telefono Empresa ..."
							minlength="8"
							maxlength="8"
							 required
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="pr">Profeción Empresa</label>
                        <textarea
                            value={profecion_empresa}
                            onChange={ (e) => setProfecionempresa(e.target.value)} 
                            className='form-control'
						    placeholder="Profesión Empresa ..."
							rows="10" 
							cols="50"
							required
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="pr">Categoria Empresa</label>
                        
                                     
                    </div>
					
				
				   <div className="form-group">
                        <label className="descripcionr">Imagen</label>
                        <img src={url_empresa} className='form-contro' with="100" height="100"/>              
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
                     </div> 
                 </form>   
						
		 </div>				
      )


}

export default  EmpresaItem;