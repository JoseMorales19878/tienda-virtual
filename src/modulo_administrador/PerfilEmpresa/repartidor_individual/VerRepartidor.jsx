import { useEffect, useState }    from "react"
import { Link, useParams,useNavigate } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {app,db} from '../../../firebaseConfig/conexion_firebase'
import Mheader     from '../../Mheader'
import Mfooter     from '../../Mfooter'
import Maside      from '../../Maside'

const VerRepartidor=()=>
{
  const [ dni_repartidor, setDnirepartidor ] = useState('')
  const [ nombre_repartidor, setNombrerepartidor ] = useState('')
  const [ apelldio_repartidor, setApelldiorepartidor] = useState('')
  const [ fecha_nacimiento, setFechanacimiento ] = useState('')
  const [ sexo,setSexo ] = useState('')
  const [ direccion_repartidor,setDireccionrepartidor ] = useState('')
  const [ telefono_repartidor,setTelefonorepartidor ] = useState('')
  const [ correo_repartidor,setCorreorepartidor ] = useState('')
  const [ url_imagen_r,setUrlimagenr ] = useState('')
  const [ tipo_vehiculo,setTipovehiculo ] = useState('')
  const [ foto_vehiculo,setFotovehiculo ] = useState('')	
  
  let navigate = useNavigate();
  const {id} = useParams() 
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
	        setFotovehiculo(categoria.data().foto_vehiculo) 		
			setTipovehiculo(categoria.data().tipo_vehiculo)
		}else{
            console.log('El repartidor no existe')
        }
    }  
	
	 useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])
	
	return(
	     <div className="hold-transition sidebar-mini layout-fixed">
  <div className="wrapper">
  <Mheader />
  <Maside />
  <div className="content-wrapper">
	  <section className="content-header">
		  <div className="container-fluid">
			<div className="row mb-2">
			  <div className="col-sm-6">
				<h1>Modulo Repartidor Individual</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Ver Repartidor</li>
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
					<h3 classNames="card-title">Ver Repartidor</h3>
				  </div>
			   
        
			                <h4 className="card-title">Perfil Repartidor {nombre_repartidor}</h4>
							 <form id="quickForm">
                 
            
				   
							   <div className="form-group">
									<label for="Categoriar">Dni Repartidor {dni_repartidor}</label>
									<input
										value={dni_repartidor}
										onChange={ (e) => setDnirepartidor(e.target.value)} 
										type="number"
										className='form-control'
										placeholder="Dni Repartidor ..."
										minlength="3"
										maxlength="20"
										disabled
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
											disabled
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
										disabled
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
									disabled
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
										disabled
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
										disabled
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
									disabled
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
									disabled
								/>
							</div> 

							<div className="form-group">
							   <label className="descripcionr">Foto</label>
							   <img src={url_imagen_r} className='form-control' with="100" height="100"/>    
							</div> 
							
							 <div className="form-group">
								<label for="Categoriar">Tipo Vehiculo</label>
								<input
									value={tipo_vehiculo}
									onChange={ (e) =>setTipovehiculo(e.target.value)} 
									type="text"
									className='form-control'
									placeholder="Tipo Vehiculo ..."
									disabled
								/>
							</div> 
							
							<div className="form-group">
							   <label className="descripcionr">Foto</label>
							   <img src={foto_vehiculo} className='form-control' width="100" height="100"/>    
							</div> 
							
					
                     <div align="Center">
				      <Link to="/Modulo_administrador/PerfilEmpresa/RepartiodoresIndividuales/" 
					   className='btn btn-primary mr-2'>
					   Regresar
					 </Link>
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


export default VerRepartidor;



