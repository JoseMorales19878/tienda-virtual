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

const RegistroUsuario = () => {
	
	 const { crearUsuario } = useUserAuth(); 
        const [ nombre_cliente,setNombrecliente ] = useState('')
        const [ apellido_cliente,setApellidocliente ] = useState('')
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
				 
	            const docuRef=doc(db,`clientes/${idu}`)
                setDoc(docuRef,{
					              nombre_cliente:nombre_cliente,
								  apellidos_cliente:apellido_cliente
				                })
				 const docuRef1=doc(db,`Usuarios/${idu}`)
                setDoc(docuRef1,{
					            nombre_usuario:nombre_cliente,
				                email_usuario:correo,
				                clave_usuario:password,
								nivel_usuario:"a2",
								stat:0
								})
							
					
				 	MySwal.fire({
                      title: "Bien hecho!",
                      text: "Cliente Registrado Con Exito!",
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
                        <h3>Registro de Clientes</h3>
                    </div> 
                 
                    <div className="input_div">
                        <div className="input_text"> 
                          <input 
						    className="written_name" 
						    type="text" require required 
							value={nombre_cliente}
                            onChange={ (e) => setNombrecliente(e.target.value)} 
							minlength="3"
						    maxlength="20"
							/> 
							
							<label>Nombre Cliente</label> 
                        </div> 
                  
                         <div className="input_text"> 
                            <input type="text" 
							value={apellido_cliente}
                            onChange={ (e) => setApellidocliente(e.target.value)}
							minlength="3"
						    maxlength="20"
							required /> 
							<label>Apellido Cliente</label>
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
							 /> 
                             <label>Correo Electronico</label>
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
                         <button>Registrar</button> 
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

export default RegistroUsuario