import  './IniciarSeccion.css'
import  '../assets/css/cuenta_usuario.css'
import  Header  from  '../header/Header'
import  Slyder  from  '../slyder/Slyder'
import  Footer  from  '../Piepagina/Footer'
import  React,{useState}from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth,db } from "../firebaseConfig/conexion_firebase";
import  RecuperarC          from  '../Cuenta/RecuperarClave'
import { useUserAuth } from "../context/UsuarioContext";
import {signInWithPopup,GoogleAuthProvider}from "firebase/auth";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const googleProvider = new GoogleAuthProvider();

const CuentaUsuario = () => {
  
    const { logIn,crearUsuario,user} = useUserAuth();
    let navigate = useNavigate();


    const handleGoogleSignin = async () => {
	  try {
    const go=await signInWithPopup(auth, googleProvider)
	 navigate("/Moduloadministrador");
	  }catch (error) {
        console.log("Error: ",error)
    }
  }
	
	
	async function submitHandler(e){
		 e.preventDefault()
		 const email=e.target.emailField.value
		 const password=e.target.passwordField.value
		
		 console.log(email,password,user.rol,user.stat)
         		 
			try
			{
				 
				await logIn(email,password);
				MySwal.fire({
                      title: "Bien hecho!",
                      text: "Has Iniciado Sección!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
                navigate("/Moduloadministrador"); 
			}catch(error){
				
				console.log(error.message)
				console.log(error.code)
				
				if(error.code ==='auth/user-not-found')
				{
                  MySwal.fire({
                      title: "Error!",
                      text: "Correo Electronico Invalido!",
                      icon: "danger",
                       button: "Felicitaciones!"
					    });
                 
				  
                }
               
			   if (error.code === 'auth/wrong-password')
				{
					   MySwal.fire({
                      title: "Error!",
                      text: "Contraseña debil minimo 6 caracteres!",
                      icon: "danger",
                       button: "Felicitaciones!"
					    });
				}
				
				
			   
				
			}//fin del try catch
		 
}	 
  return (
    <div> 
      
      <Header/>
      <Slyder/>
       <div id="logreg-forms">
	    
          <form className="form-signin" onSubmit={submitHandler}>
        
            <div className="social-login">
               
			    <button className="btn facebook-btn social-btn">
				 <span>
			        <i className="fab fa-facebook-f"></i> 
				      Cuenta con Facebook
				 </span>
				</button>
               
			   <button className="btn google-btn social-btn"  type="submit" onClick={handleGoogleSignin}>
			     <span>
				 <i className="fab fa-google-plus-g"></i>
			     Cuenta con Google
			     </span> 
			   </button>
        
		</div>

		  <h1 clasName="h3 mb-3 font-weight-normal texto-centro"> 
			    Iniciar Sesión
			</h1>
            
         
		 <p classsName="texto-centro"> OR  </p>
         <div className="input-group">
          <input type="email" name="email" id="emailField" className="form-control" placeholder="Correo Electronico"  autofocus="" />
        </div>
    
        <div className="input-group">
          <input type="password" name="password" id="passwordField" className="form-control" placeholder="Clave Usuario"  />
        </div>

        <div className="input-group">
          <button className="btn btn-md btn-rounded btn-block form-control submit" type="submit">
              Iniciar Sesión
		  </button>
        </div>

        <Link  to="/RecuperarClave" 
		  id="logreg-form" 
		  className="btn btn-primary">
		   Olvidaste Contraseña?
		</Link>
        <hr />
        
       
        </form>

       
       

        <br/>
 
</div><Footer/></div>
  )
}

export default CuentaUsuario

