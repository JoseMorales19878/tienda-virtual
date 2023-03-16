import React,{useState} from 'react'
import { useUserAuth } from "../context/UsuarioContext";
import { Link,useNavigate }  from "react-router-dom";
import  '../assets/css/cuenta_usuario.css' 
import  Header       from  '../header/Header'
import  Slyder       from  '../slyder/Slyder'
import  Footer       from   '../Piepagina/Footer'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)		
		
const RecuperarC = (props) => {
	
  const [formCorreo, setFormCorreo] = useState("");
  const {recuperarClave}=useUserAuth()
   const navigate = useNavigate();
  const cambiarDatos = (e) => {
    const value = e.target.value;
    setFormCorreo(value);
  };
  
  function recuperarContrasena(formCorreo){
  
   try
   {
      recuperarClave(formCorreo)
	  			 MySwal.fire({
                      title: "Bien hecho!",
                      text: "Revisa tu bandeja de entrada o span!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
				navigate("/IniciarSeccion");   
    }catch(error)
	{
	  if(error.code ==='auth/user-not-found')
	  {
         MySwal.fire({
                      title: "Error!",
                      text: "Correo Electronico Invalido!",
                      icon: "danger",
                       button: "Felicitaciones!"
					    });
      }
    };
  }
  	 
  const recuperar = (e) => {
    e.preventDefault();
    recuperarContrasena(formCorreo).then((res) => {
      if (res === "correcto") {
        console.log("Verifique en su correo electrónico");
      } else {
        console.log("Error no se pudo"+formCorreo);
      }
    });
    setFormCorreo("");
  };

	

	
	return(

    <div>
	   <Header/>
      <Slyder/>
     
       <div id="logreg-forms">
         
          <form className="form-signin" onSubmit={recuperar}>
          
    		<h1 clasName="h3 mb-3 font-weight-normal texto-centro"> 
			  Recuperar Conraseña
			</h1>
              
			 <div className="input-group">
          
		      <input
            type="email"
            required
            name="correo"
            placeholder="Correo"
            value={formCorreo}
            onChange={cambiarDatos}/>
         
		     </div>

       

             <div className="input-group">
           
		       <button className="btn btn-md btn-rounded btn-block form-control submit" type="submit">
		         Reestablecer Conraseña
		       </button>
        
		     </div>

             <Link   id="logreg-form" className="btn btn-primary" to="/IniciarSeccion">Átras</Link>
             <hr />
        
           <br/>
         </form>		
 
        </div>
		<Footer/>
    </div>	
  
  )
}	

export default RecuperarC 