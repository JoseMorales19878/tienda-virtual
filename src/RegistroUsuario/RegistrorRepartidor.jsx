import './RegistroUsuario.css'
import  Header  from  '../header/Header'
import  Slyder  from  '../slyder/Slyder'
import  Footer  from '../Piepagina/Footer'
import { db } from '../firebaseConfig/conexion_firebase'
import  React,{useState}from "react";
import { useUserAuth } from "../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import { collection, addDoc,doc,setDoc} from 'firebase/firestore'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const RegistrorRepartidor = () => {
        const { crearUsuario } = useUserAuth(); 
        const [ nombre_repartidor,setNombrerepartidor ] = useState('')
        const [ apelldio_repartidor,setApelldiorepartidor ] = useState('')
    	const [ fecha,setFecha ] = useState('')
		const [ clave,setClave] = useState('')
        const [ direccion_repartidor,setDireccionrepartidor ] = useState('')
		let navigate = useNavigate();
		
		async function guardarUsuario(e){
		 e.preventDefault()
		 const correo=e.target.emailField.value
		 const password=e.target.passwordField.value
		 
			try
			{
		         const usuario=await crearUsuario(
				 correo,
				 password).then((
	             usuarioFirebase)=>
	             {return usuarioFirebase}
	             );	
				 
				 let idu=usuario.user.uid;
				 
	            const docuRef=doc(db,`repartidor/${idu}`)
                setDoc(docuRef,{
					            nombre_repartidor:nombre_repartidor,
				                apelldio_repartidor:apelldio_repartidor,
				                fecha_nacimiento:fecha,
								correo_repartidor:correo,
								direccion_repartidor:direccion_repartidor,
								id_usuario:idu
								})
				 const docuRef1=doc(db,`Usuarios/${idu}`)
                setDoc(docuRef1,{
					            nombre_usuario:nombre_repartidor,
				                email_usuario:correo,
				                clave_usuario:password,
								nivel_usuario:"a3",
								stat:0
								})
							
					
				 	MySwal.fire({
                      title: "Bien hecho!",
                      text: "Repartidor Registrado Con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
				 
				 navigate("/IniciarSeccion"); 
			}catch(error){
				
				console.log(error.message)
				console.log(error.code)
				
			if (error.code === 'auth/email-already-in-use') {
				 
				  	MySwal.fire({
                      title: "Advertencia!",
                      text: "Corro electronivo ya existe!",
                      icon: "success",
                       button: "Error!",
                   });
				   
				}else if(error.code === 'auth/invalid-email')
				{
                    MySwal.fire({
                      title: "Advertencia!",
                      text: "Corro electronivo invalido!",
                      icon: "success",
                       button: "Error!",
                   });
                 
				  
                }else if (error.code === 'auth/weak-password')
				{
					MySwal.fire({
                      title: "Advertencia!",
                      text: "Contraseña debil minimo 6 caracteres!",
                      icon: "success",
                       button: "Error!",
                   });
				}else if (error.code) {
                   MySwal.fire({
                      title: "Advertencia!",
                      text: "Ocurrio un problema!",
                      icon: "success",
                       button: "Error!",
                   });
			}
		  }//fin del try catch
		 }	 



 return (

 <div>	
    <Header/>
    <Slyder/>
	<div className="container1"> 
          <div className="card"> 
		  
            <form className="form" onSubmit={guardarUsuario}> 
              <div className="right-side"> 
                <div className="main active"> 
                    <div clasNames="manage"> 
                        <h3>Registro  Repartidor</h3>
                    </div> 
                 
                    <div className="input_div">
                        
						
						<div className="input_text"> 
                          <input 
						   value={nombre_repartidor}
                           onChange={ (e) => setNombrerepartidor(e.target.value)} 
						   className="written_name" 
						   type="text"
                           minlength="3"
						   maxlength="20"						   
                           required /> 
						  <label> Nombres Repartidor</label> 
                        </div> 
						
						<div className="input_text"> 
                          <input 
						   value={apelldio_repartidor}
                           onChange={ (e) => setApelldiorepartidor(e.target.value)} 
						   className="written_name" 
						   type="text" 
                           minlength="3"
						   maxlength="20"
						   required /> 
						  <label> Apellidos Repartidor </label> 
                        </div> 
						
                    </div>
					
                      
                   
                    
					
					<div className="input_div">
                  
				      <div className="input_text"> 
                          <input 
						   value={fecha}
                           onChange={ (e) => setFecha(e.target.value)} 
						   className="written_name" 
						   type="date" 
                           required /> 
						  <label> Fecha Nacimiento </label> 
                        </div> 
				  
				      <div className="input_text"> 
						
						 <input 
						   value={direccion_repartidor}
                           onChange={ (e) =>setDireccionrepartidor(e.target.value)} 
						   className='written_name' 
						   type="text" 
                           minlength="3"
						   maxlength="100"
						   required />     
						  <label> Dirección Empresa </label> 
                        </div>
				  
				    </div>
				  
				    <div className="input_div">
				  
				          <div className="input_text"> 
                             <input 
							 type="email" 
							 name="email" 
							 id="emailField" 
							 className="written_name" 
							 minlength="3"
						     maxlength="50"
							 required/>

							<label>Correo Repartidor</label>
                        </div> 
				  
					   <div className="input_text">
                             <input 
							   className="pass_type" 
							   type="password"
                               id="passwordField"							   
							   minlength="3"
						       maxlength="50"
							   required /> 
                             <label>Clave</label>  
                       </div>						 
                  
                        
                    </div> 
				    
					
					
					
					
                    <div className="button step_1">
                         <button type='submit'>Registrar</button> 
                    </div> 
                
            
            
			</div>
			 </div>
			
			</form> 
        </div>
    </div>		
   <Footer/>	
 </div>	   
  )
}

export default RegistrorRepartidor






