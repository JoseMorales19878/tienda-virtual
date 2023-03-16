import React,{useState}from "react"
import {app} from '../firebaseConfig/conexion_firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getFirestore,doc,getDoc} from'firebase/firestore'
import ModuloAdministrador from '../modulo_administrador/Moduloadministrador'
import Login from './LoginUsuario'

const auth = getAuth(app);
const firestore=getFirestore(app)

const Iniciarc= () => {
	
	const [Inciu,setInciu]=useState(null)

        /*async function getRol(uid)
		{
			const docuRef=doc(firestore,`Usuarios/${uid}`)
			const docuCifrada=await getDoc(docuRef)
			const infoFinal=docuCifrada.data().nivel_usuario
			return infoFinal
		}

         function Entrar(usuarioFirebase)
		 {
			 getRol(usuarioFirebase.uid).then((nivel_usuario)=>
			 {
				 const userData={
				                uid:usuarioFirebase.uid,
								email:usuarioFirebase.email,
								nivel_usuario:nivel_usuario           
				 }
				 setInciu(userData)
                 console.log("es",userData)				 
			 })		 
		 }			 
*/
		onAuthStateChanged(auth, (usuarioFirebase) => {
			if (usuarioFirebase) {
				/*if(!Inciu)
				{
					Entrar(usuarioFirebase)
				}*/
					setInciu(usuarioFirebase)
			}		
			else{setInciu(null)}
			//}
		})
		
	return <>{Inciu?<ModuloAdministrador />
	           :<Login  />
			   }</>
}	
	
export default Iniciarc