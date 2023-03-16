import { createContext, 
         useContext, 
		 useEffect, 
		 useState } 
		 from "react";

import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

import { 
         doc,
		 getDoc
	   } from 'firebase/firestore'

import { auth,db } from "../firebaseConfig/conexion_firebase";


export const usuarioContext=createContext()

export const UsuarioContextProvider=({children})=>
{
	
	const [user, setUser] = useState({});
    
  function crearUsuario(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  
  function recuperarClave(formCorreo) {
    return sendPasswordResetEmail(auth, formCorreo)
  }
  
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

   function logOut() {
    return signOut(auth);
  }
  
 
  
  async function getRol(uid)
   {
	   const docuRef=doc(db,`Usuarios/${uid}`)
	   const docucifrada=await getDoc(docuRef)
	   const infoFinal=docucifrada.data().nivel_usuario
     const infoFinal1=docucifrada.data().stat
       return infoFinal
   }

    function acceso(usuarioFirebase)
	{
	   getRol(usuarioFirebase.uid).then((nivel_usuario)=>{
		
            const userData={
				             uid:usuarioFirebase.uid,
							 email:usuarioFirebase.email,
							 rol:nivel_usuario
						   }		
	             setUser(userData)
				 console.log(userData)
		})
	   
	}
	
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      console.log("Auth", usuarioFirebase);
	  if(usuarioFirebase){
      acceso(usuarioFirebase);}
    });

    return () => {
      unsubscribe();
    };
  }, []);
	return(
	   <usuarioContext.Provider
	    value={{ user, logIn,logOut,crearUsuario,recuperarClave }}
		>
		{children}
		</usuarioContext.Provider>
	)
}

export function useUserAuth() {
  return useContext(usuarioContext);
}