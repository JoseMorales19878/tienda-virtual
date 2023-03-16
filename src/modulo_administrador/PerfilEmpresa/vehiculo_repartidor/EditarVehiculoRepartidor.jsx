import React, { useEffect,useState }     from 'react'
import { Link,useNavigate,useParams }    from 'react-router-dom'
import {getDoc, updateDoc,doc} from 'firebase/firestore'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'

import { app,db } from '../../../firebaseConfig/conexion_firebase'
import Mheader    from '../../Mheader'
import Maside           from '../../Maside'
import Mfooter    from '../../Mfooter'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)		 
		 
const storage=getStorage(app)

const EditarVehiculoRepartidor = () => {
  const [ nombre,setNombre ] = useState('')
  const [ foto,setFoto ] = useState('') 
  const [ fotov,setFotov ] = useState('')   
  const [ vehiculo,setVehiculo ] = useState('')
  const [ color,setColor ] = useState('')
  const [ descripcion, setDescripcion ] = useState('')
  let urlDescarga
  let navigate = useNavigate();
  
   async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`vehiculo_repartidor/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }

 const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const categoria = doc(db, "repartidor", id)
        const data = {
			            vehiculo:vehiculo,
						color_vehiculo:color,
						caracteristicas_vehiculo:descripcion,
						foto_vehiculo:urlDescarga
					 }
        await updateDoc(categoria, data)
        MySwal.fire({
                      title: "Bien hecho!",
                      text: "Vehiculo Modificado con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    navigate("/Modulo_administrador/PerfilEmpresa/EditarVehiculoRepartidor/".id); 
    }
	
	  const getProductById = async (id) => {
        const categoria = await getDoc( doc(db, "repartidor", id) )
        if(categoria.exists()) {
            //console.log(product.data())
            setNombre(categoria.data().nombre_repartidor)    
            setFoto(categoria.data().url_imagen)
			setVehiculo(categoria.data().vehiculo)
			setColor(categoria.data().color_vehiculo)
			setDescripcion(categoria.data().caracteristicas_vehiculo)
			setFotov(categoria.data().foto_vehiculo)
		}else{
            console.log('El repartidor no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])
	
	
  return (
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
					<h3 classNames="card-title">Editar Vehículo Repartidor {nombre}</h3>
				  </div>
				 
                 <form className="forms-sample"onSubmit={update}>

                                  

				 <div className="form-group">
                        <label for="Categoriar">Nombre Repartidor</label>
                        <input
                            value={nombre}
                            onChange={ (e) => setNombre(e.target.value)} 
                            type="text"
                            className='form-control'
                            disabled
                        />
                    </div>  
					
				    <div className="form-group">
					   <label className="descripcionr">Foto</label>
					   <img src={foto} className='form-control' with="100" height="100"/>    
					</div>
					 
					
						 <div className="form-group">
                        <label for="Categoriar">Vehiculo</label>
                        <input
                            value={vehiculo}
                            onChange={ (e) => setVehiculo(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Vehículo ..."
							minlength="3"
							maxlength="20"
                            required
                        />
                    </div> 
					
						 <div className="form-group">
                        <label for="Categoriar">Color Vehículo</label>
                        <input
                            value={color}
                            onChange={ (e) => setColor(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Color Vehículo ..."
							minlength="3"
							maxlength="20"
                            required
                        />
                    </div> 
					
                    <div className="form-group">
                        <label className="descripcionr">Descripción Vehículo</label>
                        <textarea
                            value={descripcion}
                            onChange={ (e) => setDescripcion(e.target.value)} 
                            className='form-control'
						    placeholder="Descripción ..."
							rows="10" 
							cols="50"
							required
                        />              
                    </div>  
					
					 <div className="form-group">
					   <label className="descripcionr">Foto</label>
					   <img src={fotov} className='form-control' with="100" height="100"/>    
					</div>
					 
					
					<div className="form-group">
                        <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className='form-control'/>  
					</div>

                  
					 
                                    
                    
					
                     <div align="Center">
                    <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
					<Link to="/Modulo_administrador/PerfilEmpresa/VehiculoRepartidores/" className='btn btn-primary mr-2'>Regresar</Link>
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
    
 
  )
}

export default EditarVehiculoRepartidor



