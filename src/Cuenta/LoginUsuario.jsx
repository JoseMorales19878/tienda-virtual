import React,{useState} from 'react'
import { Link }       from "react-router-dom";
import  '../assets/css/cuenta_usuario.css'    
import {app,db} from '../firebaseConfig/conexion_firebase'     
import {getAuth,
        createUserWithEmailAndPassword,
		signInWithEmailAndPassword,
		signInWithRedirect,
         GoogleAuthProvider
		}from 'firebase/auth'
import {doc,setDoc}from 'firebase/firestore'
import  Header       from  '../header/Header'
import  Slyder       from  '../slyder/Slyder'
import  Footer       from   '../Piepagina/Footer'

const auth=getAuth(app)
 
const Login = () => {
    
	const [isRegistrando,setIsRegistrando]=useState(false)
	
	async function crearUsuario (correo,contra)  {
	 const infoUsuario=await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      ).then((
	  usuarioFirebase)=>
	  {return usuarioFirebase}
	  );
	   const docuRef=doc(db,`Usuarios/${infoUsuario.user.uid}`)
      setDoc(docuRef,{email:correo,clave_usuario:contra ,nva:'a1'})
	  alert("Usuario Registrao Con Exito")
	}
	
	function registroUsuario(e){
		
		e.preventDefault();
		const correo=e.target.emailField.value
		const contra=e.target.passwordField.value
		console.log(correo,contra)
		if(isRegistrando)
		 {
			 crearUsuario(correo,contra)
		 }
		 
		 else
	     {
			 console.log("error");
             signInWithEmailAndPassword(auth,correo,contra);
	     }
		 
      }
	
	
	
	
	
	return(

    <div>
	
	<Header/>
      <Slyder/>
     
       <div id="logreg-forms">
          <form className="form-signin" onSubmit={registroUsuario}>
            <h1 clasName="h3 mb-3 font-weight-normal texto-centro"> 
			{isRegistrando ? "Registrate"  : "Iniciar Sesión" }
			</h1>
               
			   <div className="social-login">
                 <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Cuenta con Facebook</span> </button>
                 <button className="btn google-btn social-btn" type="submit" >
			     <span>
				   <i className="fab fa-google-plus-g"></i>
			        Cuenta con Google
			       </span> 
			   </button>
               </div>
         
		 <p classsName="texto-centro"> OR  </p>
         <div className="input-group">
          <input type="email" name="email" id="emailField" className="form-control" placeholder="Correo Electronico" required="" autofocus="" />
        </div>

        <div className="input-group">
          <input type="password" name="password" id="passwordField" className="form-control" placeholder="Clave Usuario" required="" />
        </div>

        <div className="input-group">
          <button className="btn btn-md btn-rounded btn-block form-control submit" type="submit">
		    {isRegistrando ? "Registrate"  : "Iniciar Sesión" }
		  </button>
        </div>

        <Link   id="logreg-form" className="btn btn-primary" to="/RecuperarClave">Olvidaste Contraseña?</Link>
        <hr />
        
        <button className="btn btn-primary btn-block" type="button" id="btn-signup" onClick={()=>setIsRegistrando(!isRegistrando)}>
		 {isRegistrando ? "¿Ya tienes cuenta? ¡Iniciar Sesión" :"¿No tienes cuenta? ¡Registrate!" }
		</button>
        </form>

       
       

        <br/>
 
     </div>
	    <Footer/>
	</div> 
  
  )
}

export default Login