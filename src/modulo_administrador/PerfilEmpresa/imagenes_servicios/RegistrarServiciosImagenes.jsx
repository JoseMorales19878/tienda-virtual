import React, { useState,useEffect } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { collection, 
         addDoc,
		 getDoc, 
		 updateDoc, 
		 doc
		 } from 'firebase/firestore'
import { app,db } from '../../../firebaseConfig/conexion_firebase'
import { useUserAuth } from "../../../context/UsuarioContext";
import Mheader    from '../../Mheader'
import Maside     from '../../Maside'
import Mfooter    from '../../Mfooter'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)		 
		 
const storage=getStorage(app)

const RegistrarServiciosImagenes = () => {
  
  const [ codigo_producto, setCodigoproducto ] = useState('')
  const [ nombre_producto, setNombreproducto ] = useState('')
  const [ imagen, setImagen ] = useState('')
  let navigate = useNavigate();
  const { user } = useUserAuth();
  let id_usuario =user.uid 
  let urlDescarga
  
   const {id} = useParams()
  
  
   async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files.length;
	   const categoriaCollection = collection(db, "imagenes_servicios")
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   let i;
	   for(i=0;i<archivoLocal;i++)
	   {	   
           const file = e.target.files[i]
		   const archivoRef=ref(storage,`servicio/${file.name}`)
		   const uplo=await uploadBytes(archivoRef,file)
		   urlDescarga=await getDownloadURL(archivoRef)
		   console.log(uplo)
		   console.log(urlDescarga)
		   await addDoc( categoriaCollection, {
										url_imagen:urlDescarga,
                                        id_servicio:id
										} )
             MySwal.fire({
                      title: "Bien hecho!",
                      text: "Imagenes Registradas con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    navigate("/Moduloadministrador/PerfilEmpresa/ImagenesServicios");
	   } 
   }

   const getProductById = async (id) => {
        const categoria = await getDoc( doc(db, "servicio", id) )
        if(categoria.exists()) {
            //console.log(product.data())
            setNombreproducto(categoria.data().nombre_producto)    
            setImagen(categoria.data().url_imagen)
           
		}else{
            console.log('El servicio no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])

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
				<h1>Modulo Imagenes Servicios</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Registro Imagenes Servicios</li>
				</ol>
			  </div>
			</div>
		  </div>
		</section>
		
		<section className="contet">
		  <div className="container-fluid">
			<div className="row">
			  <div classN ame="col-md-12">
			  <div className="card card-primary">
				  <div className="card-header">
				  <h3 classNames="card-title">Registro Iamgenes Servicio</h3>
				  </div>
                 <form id="quickForm">

						
					 <div className="form-group">
                        <label for="Categoriar">Nombre Servicio</label>
                        <input
                            value={nombre_producto}
                            onChange={ (e) => setNombreproducto(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Producto ..."
							minlength="3"
							maxlength="20"
                             disabled
                        />
                    </div>  
					<div className="form-group">
                        <label className="descripcionr">Imagen</label>
                        <img src={imagen} width="100" height="100"/>           
                    </div> 
					
					
					<div className="form-group">
                        <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
							className='form-control'
							multiple
						    required
                        />              
                    </div>  
					
					
                     <div align="Center">
                    <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
					<Link to="/Moduloadministrador/PerfilEmpresa/imagenes_servicios/ImagenesServicios" className='btn btn-primary mr-2'>Regresar</Link>
                </div> 
				  
				  
                 </form>   
				</div>
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

export default RegistrarServiciosImagenes



