import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { app,db } from '../../../firebaseConfig/conexion_firebase'
import { useUserAuth } from "../../../context/UsuarioContext";
import Mheader    from '../../Mheader'
import Mfooter    from '../../Mfooter'
import Maside     from '../../Maside'

import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)		 
		 
const storage=getStorage(app)

const RegistroServicio= () => {

  const [ nombre_servicio, setNombreservicio ] = useState('')
  const [ descripcion_servicio, setDescripcionservicio ] = useState('')
  const [ precio_servicio, setPrecioservicio ] = useState('')
  let navigate = useNavigate();
  const { user } = useUserAuth();
  let id_usuario =user.uid 
  let urlDescarga
  
   async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`servicio/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }

  const categoriaCollection = collection(db, "servicio")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( categoriaCollection, { 
	                                    nombre_servicio:nombre_servicio,
										descripcion_servicio:descripcion_servicio,
										precio_servicio:precio_servicio,
										url_imagen:urlDescarga,
                                        id_usuario:id_usuario
										} )

    MySwal.fire({
                      title: "Bien hecho!",
                      text: "Servicio Registrado con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    navigate("/Modulo_administrador/PerfilEmpresa/MisServicios"); 
  }

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
				<h1>Modulo Servicio</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Registro Servicio</li>
				</ol>
			  </div>
			</div>
		  </div>
		</section>
		
		<section className="contet">
		  <div className="container-fluid">
			<div className="row">
			  
			  <div className="col-md-12">
			   
				<div className="card card-primary">
				  <div className="card-header">
					<h3 classNames="card-title">Registro Servicio</h3>
				  </div>
				 
				  <form id="quickForm" onSubmit={store}>
				
					  
					  <div className="form-group">
						   <label for="Categoriar">Nombre Servicio</label>
                        <input
                            value={nombre_servicio}
                            onChange={ (e) => setNombreservicio(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Servicio ..."
							minlength="3"
							maxlength="20"
                            required
							
                        />
					  </div>
					
					

						  <div className="form-group">
						 <label className="descripcionr">Descripción Servicio</label>
                          <textarea
                            value={descripcion_servicio}
                            onChange={ (e) => setDescripcionservicio(e.target.value)} 
                            className='form-control'
						    placeholder="Descripción Servicio ..."
							rows="10" 
							cols="50"
							required
                          />      
					  </div>

					<div className="form-group">
					 <label for="Categoriar">Precio Servicio</label>
                        <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className='form-control'
						    required
                        />          
					  </div>	

					
					  
					  
					
					<div className="card-footer"  align="center">
					  <button type="submit" className="btn btn-primary">Guardar</button>
					<Link to="/Modulo_administrador/PerfilEmpresa/servicios/MisServicios/"
					className='btn btn-primary mr-2'>Regresar</Link>
				  </div>
				  </form>
				</div>
			   
				</div>
			 
			  <div className="col-md-6">

			  </div>
          
        </div>
       
      </div>
	  
    </section>
	
	  </div>
	  <Mfooter/>
	 </div>
    </div>
  )
}

export default RegistroServicio



