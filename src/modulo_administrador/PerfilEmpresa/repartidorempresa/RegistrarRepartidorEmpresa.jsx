import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { collection, 
         addDoc,
		 getDocs,
		 getDoc,
		 doc 
		} 
		 from 'firebase/firestore'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import { db,app } from '../../../firebaseConfig/conexion_firebase'
import Mheader    from '../../Mheader'
import Mfooter    from '../../Mfooter'
import Maside     from '../../Maside'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useUserAuth } from "../../../context/UsuarioContext";
const MySwal = withReactContent(Swal)
const storage=getStorage(app)

const RegistrarRepartidorEmpresa = () => {
  const [ dni_repartidor,setDnirepartidor ] = useState('')
  const [ nombre_repartidor,setNombrerepartidor ] = useState('')
  const [ apelldio_repartidor,setApelldiorepartidor ] = useState('')
  const [ sexo,setSexo ] = useState('')
  const [ fecha_nacimiento,setFechanacimiento ] = useState('')
  const [ direccion_repartidor,setDireccionrepartidor] = useState('')
  const [ correo_repartidor,setCorreorepartidor ] = useState('')
  const [ telefono_repartidor,setTelefonorepartidor ] = useState('')
  const navigate = useNavigate()
    const { user } = useUserAuth();
  let id_usuario =user.uid
  let urlDescarga
  
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
  
  const empresaCollection = collection(db, "repartidor")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollection, { dni_repartidor:dni_repartidor, 
	                                   nombre_repartidor:nombre_repartidor,
									   apelldio_repartidor:apelldio_repartidor,
									   sexo:sexo,
									   fecha_nacimiento:fecha_nacimiento,
									   direccion_repartidor:direccion_repartidor,
									   correo_repartidor:correo_repartidor,
									   telefono_repartidor:telefono_repartidor,
									   tipo_repartidor:"Empresa",
									   id_usuario:id_usuario,
									   url_imagen:urlDescarga
									   } )
      MySwal.fire({
                      title: "Bien hecho!",
                      text: "Repartidor Registrado con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    navigate("/Moduloadministrador/PerfilEmpresa/RepartidoresEmpresa"); 
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
				<h1>Modulo Repartidores Empresa</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				 <li className="breadcrumb-item">
				  <Link to="/Moduloadministrador">Inicio</Link>
				 </li> 
				  <li className="breadcrumb-item active">Registro  Repartidor Empresa</li>
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
					<h3 classNames="card-title">Registro Repartidor</h3>
				  </div>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Codigor">Dni Repartidor</label>
                        <input
                            value={dni_repartidor}
                            onChange={ (e) => setDnirepartidor(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Dni Repartidor ..."
							maxlength="7"
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
                        <label className="nombrer">Apellido Repartidor</label>
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
                        <label className="nombrer">Sexo</label>
                        <select
                            value={sexo}
                            onChange={ (e) => setSexo(e.target.value)} 
                            required
                        >   
						    <option value="">-Seleccione</option>
                            <option value="Masculino">Masculino</option>
							<option value="Femenino">Femenino</option>
                       </select>
 
                    </div> 
					
						<div className="form-group">
                        <label className="nombrer">Fecha Nacimiento</label>
                        <input
                            value={fecha_nacimiento}
                            onChange={ (e) => setFechanacimiento(e.target.value)} 
                            type="date"
                            className='form-control'
						    placeholder="Fecha Nacimiento ..."
							required
                        />              
                    </div> 
									  
                       <div className="form-group">
                        <label className="correor">Correo </label>
                        <input
                            value={correo_repartidor}
                            onChange={ (e) => setCorreorepartidor(e.target.value)} 
                            type="email"
                            className='form-control'
						    placeholder="Correo repartidor ..."
							minlength="2"
							maxlength="100"
							required
                        />              
                    </div>					
					
                      <div className="form-group">
                        <label className="direccionr">Dirección Empresa</label>
                         <label className="descripcionr">Descripción Categoria</label>
                        <textarea
                            value={direccion_repartidor}
                            onChange={ (e) => setDireccionrepartidor(e.target.value)} 
                            className='form-control'
						    placeholder="Dirección repartidor ..."
							rows="10" 
							cols="50"
							required/>  
                    </div>
					
					
					
				  <div className="form-group">
                        <label className="telefonor">telefono repartidor</label>
                        <input
                            value={telefono_repartidor}
                            onChange={ (e) => setTelefonorepartidor(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Telefono Repartidor ..."
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
					
					<div align="center">
     					<button type='submit' className='btn btn-primary mr-2'>Guardar</button>
                      <Link to="/Moduloadministrador/PerfilEmpresa/RepartidoresEmpresa" className='btn btn-primary mr-2'>Regresar</Link>
                    </div>
				 </form> 
        	 </div>
			     <div className="col-md-6">

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

export default RegistrarRepartidorEmpresa