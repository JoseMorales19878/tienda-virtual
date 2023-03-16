import {app,db}                   from '../firebaseConfig/conexion_firebase'
import { useUserAuth }            from "../context/UsuarioContext";
import {Link,useNavigate}         from 'react-router-dom'
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { useEffect, useState }    from "react"
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL }  from 'firebase/storage'
import  mostrarProductos   from '../function/mostrarProductos';
import  EmpresaItem        from './EmpresaItem'

const FormularioEmpresas= () => { 
const {user}= useUserAuth();
	let email=user.email
    let id;	
	const [productInfo, setProductInfo] = useState(null);
	
	useEffect(() => {
		async function getProductInfo() {
		  const product = await mostrarProductos(email)
		  setProductInfo(product)
	  }
	  getProductInfo()
	}, []);
	
  
	
 return(
 <div>
 
                {productInfo ? productInfo.map((p)=>
                  
				<EmpresaItem id={p.id}/>				
				
			   ):null}
			   
			  
			   
    </div>
)}	

export default FormularioEmpresas

			   
			   