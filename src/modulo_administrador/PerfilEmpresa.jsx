import {app,db} from '../firebaseConfig/conexion_firebase'
import { useUserAuth } from "../context/UsuarioContext";
import {Link,useNavigate} from 'react-router-dom'
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { useEffect, useState }  from "react"
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL }      from 'firebase/storage'
import mostrarProductos        from '../function/mostrarProductos';
import Swal from 'sweetalert2'
import withReactContent         from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const storage=getStorage(app)

const PerfilEmpresa= () => {
	const {user}= useUserAuth();
	let email=user.email	
	let i=user.uid
	let navigate = useNavigate();
	let urlDescarga;
	const [productInfo, setProductInfo] = useState(null);
	
	useEffect(() => {
		async function getProductInfo() {
		  const product = await mostrarProductos(email)
		  setProductInfo(product)
	  }
	  getProductInfo()
	}, []);
	
   async function subirArchivo(e)
   {
	   //detectar archivo
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
		const profecion_empresa=e.target.profecion_empresa.value
		const id=e.target.id.value
        const empresa = doc(db, "empresas", id)
        const data = { 
							profecion_empresa:profecion_empresa,
							url:urlDescarga
					}
        await updateDoc(empresa, data)
        MySwal.fire({
                      title: "Bien hecho!",
                      text: "Perfil Completado con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
		const usuario = doc(db, "Usuarios", i)
        const dat = { 
				      stat:1
					}
        await updateDoc(usuario, dat)		   
		 navigate("/Moduloadministrador/Usuarioempresa");    
    }
  
	return (
	<>
	<div>
		
               {productInfo ? productInfo.map((p)=>

					<div className="main-panel">
					<div className='content-wrapper'>
						<div className='row'>
							<div className='col-md-6 grid-margin stretch-card'>
							<div className="card">
							<div className="card-body">
								<h4 className="card-title">Perfil Empresa  {p.nombre_empresa}  </h4>
								<form className="forms-sample" onSubmit={update}>
							
									
								<div className="form-group">
											<label for="Codigor">Dni Empresa</label>
											<input
												value={p.dni} 
												type="text"
												className='form-control'
												placeholder="Codigo Empresa ..."
												disabled
											/>
									</div>

									<div className="form-group">
											<label for="Codigor">Nombre Empresa</label>
											<input
												value={p.nombre_empresa} 
												type="text"
												className='form-control'
												placeholder="Codigo Empresa ..."
												disabled
											/>
									</div>

									<div className="form-group">
											<label for="Codigor">Correo Empresa</label>
											<input
												value={p.correo_empresa} 
												type="text"
												className='form-control'
												placeholder="Codigo Empresa ..."
												disabled
											/>
									</div>

									<div className="form-group">
											<label for="Codigor">Dirección Empresa</label>
											<input
												value={p.direccion_empresa} 
												type="text"
												className='form-control'
												placeholder="Codigo Empresa ..."
												disabled
											/>
									</div>

									<div className="form-group">
											<label for="Codigor">Profesión Empresa</label>
											<input
												id="profecion_empresa"
												type="text"
												className='form-control'
												placeholder="Profesión Empresa ..."
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
								 
						         <input type="hidden" id="id" value={p.id}/>
                         
								<div align="Center">
									<button type='submit' className='btn btn-primary mr-2'>Guardar</button>
								 </div> 
								
						</form>		
								</div>
							</div>
							</div>
						</div>
					</div>
					</div>     
			   ):null}


	</div>
			
				
    </>							   
					   
			          
	 )
	
}

export default PerfilEmpresa	


