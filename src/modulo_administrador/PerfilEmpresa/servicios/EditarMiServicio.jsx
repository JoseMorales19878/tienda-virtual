import { useEffect, useState }    from "react"
import { Link, useParams,useNavigate } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {app,db} from '../../../firebaseConfig/conexion_firebase'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Mheader    from '../../Mheader'
import Mfooter    from '../../Mfooter'
import Maside     from '../../Maside'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)	

const storage=getStorage(app)

const EditarMiServicio   = () => {

  const [ nombre_servicio, setNombreservicio ] = useState('')
  const [ descripcion_servicio, setDescripcionservicio ] = useState('')
  const [ precio_servicio, setPrecioservicio ] = useState('')
  const [ url_empresa,setUrlempresa ] = useState('')

  let navigate = useNavigate();
  let urlDescarga;	
	
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

    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const categoria = doc(db, "servicio", id)
        const data = {nombre_servicio:nombre_servicio,
					  descripcion_servicio:descripcion_servicio,
					  precio_servicio:precio_servicio,
					  url_imagen:urlDescarga,
					  }
        await updateDoc(categoria, data)
        MySwal.fire({
                      title: "Bien hecho!",
                      text: "Servicio Modificado con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    navigate("/Moduloadministrador/PerfilEmpresa/EditarMiServicio/".id); 
    }

    const getProductById = async (id) => {
        const categoria = await getDoc( doc(db, "servicio", id) )
        if(categoria.exists()) {
            //console.log(product.data())
            setNombreservicio(categoria.data().nombre_servicio)    
            setDescripcionservicio(categoria.data().descripcion_servicio)
            setPrecioservicio(categoria.data().precio_servicio)
			setUrlempresa(categoria.data().url_imagen)
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
				<h1>Modulo Producto</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Editar Servicio</li>
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
				  	<h3 classNames="card-title">Editar Servicio {nombre_servicio}</h3>

				  </div>
                      <form id="quickForm" onSubmit={update}>
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
						 <label for="Categoriar">Precio Servicio</label>
                        <input
                            value={precio_servicio}
                            onChange={ (e) => setPrecioservicio(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Precio Servicio ..."
							minlength="1"
							maxlength="7"
                            required
                        />
					  </div>

					

					<div className="form-group">
					 <label for="Categoriar">Precio Servicio</label>
                        <input
                            value={precio_servicio}
                            onChange={ (e) => setPrecioservicio(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Precio Producto ..."
							minlength="1"
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
						    placeholder="Descripcion Servicio ..."
							rows="10" 
							cols="50"
							required
                        />             
					  </div>	

					  
					   <div className="form-group">
						  <label className="descripcionr">Foto</label>
					   <img src={url_empresa} className='form-contro' with="100" height="100"/>    
					  </div>					  
					  
					     <div className="form-group">
						  <label className="descripcionr">Foto</label>
					       <img src={url_empresa} className='form-contro' witch="100" height="100"/>  
					     </div>					  
					  
					  
					  <div className="form-group mb-0">
						<div className="custom-control custom-checkbox">
						   <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className='form-control'
						    
                        />
						</div>
					  </div>
					  
					  <div className="card-footer" align="center">
					  <button type="submit" className="btn btn-primary">Editar</button>
					  <Link to="/Modulo_administrador/PerfilEmpresa/servicios/MisServicios"
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

export default  EditarMiServicio




