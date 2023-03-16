import {app} from '../firebaseConfig/conexion_firebase'     
import {getAuth,
        sendPasswordResetEmail
		}from 'firebase/auth'

const auth = getAuth(app);



export const recuperarContrasena = (formCorreo) => {
  return sendPasswordResetEmail(auth, formCorreo)
    .then(() => {
      return "correcto";
    })
    .catch(() => {
      return "error";
    });
};
