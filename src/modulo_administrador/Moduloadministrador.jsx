import { Link ,useNavigate} from "react-router-dom";
import { doc,getDoc } from "firebase/firestore"
import {app,db} from '../firebaseConfig/conexion_firebase'
import { useEffect, useState }  from "react"
import { useUserAuth } from "../context/UsuarioContext";






const  Moduloadministrador = () => {
  let navigate = useNavigate();

 const { user } = useUserAuth();
  let uuid =user.uid
 const [state,setState ] = useState('')
 const [nombre,setNombre ] = useState('')
 const [nivel,setNivel]=useState('')
 
 const getPerfilById = async (uuid) => {
        
    const empresa = await getDoc( doc(db, "Usuarios", uuid) )
    
	if(empresa.exists()) {
            //console.log(product.data())
            setState(empresa.data().stat)   
            setNombre(empresa.data().nombre_usuario)			
            setNivel(empresa.data().nivel_usuario)
        }else{
            console.log('no existe')
        }
    }
   
   
    useEffect( () => {
        getPerfilById(uuid)
        // eslint-disable-next-line
    }, [])
 
 
    
   if(nivel==="a2" && state===0)
   {
	     navigate("/Moduloadministrador/Perfil1"); 

   }
	   else
	   {
	    if(nivel==="a2" && state===1)
        {
           
           navigate("/Moduloadministrador/Inicio"); 
		  
		}
		  
	   }
   
   }
  

export default Moduloadministrador