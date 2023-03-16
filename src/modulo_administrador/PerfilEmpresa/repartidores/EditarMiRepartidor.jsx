import { useEffect, useState }    from "react"
import { Link, useParams,useNavigate } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {app,db} from '../../../firebaseConfig/conexion_firebase'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Mheader     from '../../Mheader'
import Maside     from '../../Maside'
import Mfooter     from '../../Mfooter'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)	

const storage=getStorage(app)

const EditarMiRepartidor   = () => {
 
  const [ dni_repartidor, setDnirepartidor ] = useState('')
  const [ nombre_repartidor, setNombrerepartidor ] = useState('')
  const [ apelldio_repartidor, setApelldiorepartidor] = useState('')
  const [ fecha_nacimiento, setFechanacimiento ] = useState('')
  const [ sexo,setSexo ] = useState('')
  const [ direccion_repartidor,setDireccionrepartidor ] = useState('')
  const [ telefono_repartidor,setTelefonorepartidor ] = useState('')
  const [ correo_repartidor,setCorreorepartidor ] = useState('')
  const [ url_imagen_r,setUrlimagenr ] = useState('')
 				  

  let navigate = useNavigate();
  let urlDescarga;	
	
    async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`repartidor/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }

    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const categoria = doc(db, "repartidor", id)
        const data = {dni_repartidor:dni_repartidor, 
	                  nombre_repartidor:nombre_repartidor,
					  apelldio_repartidor:apelldio_repartidor,
					  fecha_nacimiento:fecha_nacimiento,
					  sexo:sexo,
                      direccion_repartidor:direccion_repartidor,
                      telefono_repartidor:telefono_repartidor,
					  correo_repartidor:correo_repartidor,
					  url_imagen_r:urlDescarga,
					  }
        await updateDoc(categoria, data)
        MySwal.fire({
                      title: "Bien hecho!",
                      text: "Repartidor Modificado con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    navigate("/Moduloadministrador/PerfilEmpresa/EditarMiRepartidor/".id); 
    }

    const getProductById = async (id) => {
        const categoria = await getDoc( doc(db, "repartidor", id) )
        if(categoria.exists()) {
            //console.log(product.data())
			setDnirepartidor(categoria.data().dni_repartidor)    
            setNombrerepartidor(categoria.data().nombre_repartidor)    
            setApelldiorepartidor(categoria.data().apelldio_repartidor)
            setFechanacimiento(categoria.data().fecha_nacimiento)    
			setSexo(categoria.data().sexo)
            setDireccionrepartidor(categoria.data().direccion_repartidor)
			setTelefonorepartidor(categoria.data().telefono_repartidor)
			setCorreorepartidor(categoria.data().correo_repartidor)
			setUrlimagenr(categoria.data().url_imagen_r)
			
			
		}else{
            console.log('El reartidor no existe')
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
				<h1>Modulo Repartidor</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Editar Repartidor</li>
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
				    <h3 classNames="card-title">Editar Repartidor {nombre_repartidor}</h3>
				  </div>
                  <form id="quickForm" onSubmit={update}>
                 
            
				   
                   <div className="form-group">
                        <label for="Categoriar">Dni Repartidor</label>
                        <input
                            value={dni_repartidor}
                            onChange={ (e) => setDnirepartidor(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Dni Repartidor ..."
							minlength="3"
							maxlength="20"
                            required
                        />
                    </div>                  

				 <div className="form-group">
                        <label for="Categoriar">Nombre Repartidor</label>
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
                        <label for="Categoriar">Apelldio Repartidor</label>
                        <input
                            value={apelldio_repartidor}
                            onChange={ (e) => setApelldiorepartidor(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Apelldio Repartidor ..."
                            required
                        />
                    </div>  
					
						 <div className="form-group">
                        <label for="Categoriar">Fecha Nacimiento</label>
                        <input
                            value={fecha_nacimiento}
                            onChange={ (e) =>setFechanacimiento(e.target.value)} 
                            type="date"
                            className='form-control'
						    placeholder="Fecha Nacimiento ..."
                            required
                        />
                    </div> 
					
						 <div className="form-group">
                        <label for="Categoriar">Genero</label>
                        <input
                            value={sexo}
                            onChange={ (e) =>setSexo(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Genero ..."
                            required
                        />
                    </div> 
				
					
                    <div className="form-group">
                        <label className="descripcionr">Dirección Repartidor</label>
                        <textarea
                            value={direccion_repartidor}
                            onChange={ (e) =>setDireccionrepartidor(e.target.value)} 
                            className='form-control'
						    placeholder="Dirección Repartidor ..."
							rows="10" 
							cols="50"
							required
                        />              
                    </div>

                     <div className="form-group">
                        <label for="Categoriar">Telefono Repartidor</label>
                        <input
                            value={telefono_repartidor}
                            onChange={ (e) =>setTelefonorepartidor(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Telefono Repartidor ..."
                            required
                        />
                    </div>    			
			
			         <div className="form-group">
                        <label for="Categoriar">Correo Repartidor</label>
                        <input
                            value={correo_repartidor}
                            onChange={ (e) =>setCorreorepartidor(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Correo Repartidor ..."
                            required
                        />
                    </div> 

					<div className="form-group">
					   <label className="descripcionr">Foto</label>
					   <img src={url_imagen_r} className='form-contro' with="100" height="100"/>    
					</div>
					
					
					<div className="form-group">
                        <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className='form-control'
						    
                        />              
                    </div>  
					
					<div className="form-group">
					   <label className="descripcionr">Foto</label>
					   <img src={url_imagen_r} className='form-contro' witch="100" height="100"/>    
					</div>
					
					 
					
                     <div align="Center">
                      <button type='submit' className='btn btn-primary mr-2'>Editar</button>
				      <Link to="/Modulo_administrador/PerfilEmpresa/repartidores/MisRespartidores" 
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

export default  EditarMiRepartidor




