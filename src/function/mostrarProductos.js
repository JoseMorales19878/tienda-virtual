//import {db} from '../firebaseConfig/conexion_firebase.js'
/*import {collection, getDocs,query,where} from "firebase/firestore"

 async function mostrarProductos(email)
{

   const collectionRef=collection(db,"empresas")
   const filtrarActivos=query(collectionRef,where("co","==",true))
   const snaps=await getDocs(filtrarActivos)
   const productos=[]
  /* snaps.forEach((doc)=>
   {
       productos.push(doc.data())
   })

  for await(const snap of snaps.docs)
  {

     const producto=snap.data()
     producto.id=snap.id
     //const precioSnaps=await getDocs(collection,(sanp.ref,"prices"))
    // producto.prices=priceSanps.docs[0].data()
     productos.push(producto)

  }
  
  return productos

}


export default mostrarProductos
*/



import {db} from '../firebaseConfig/conexion_firebase.js'
import {collection, getDocs,query,where} from "firebase/firestore"
import { useUserAuth } from "../context/UsuarioContext";

export default async function mostrarProductos(email)
{
   
   
    let n;
//   const [a,setA]=useState('')
   const collectionRef=collection(db,"empresas")
   const filtrarActivos=query(collectionRef,where("correo_empresa","==", email))
   const snaps=await getDocs(filtrarActivos)
   const productos=[]

  for await(const snap of snaps.docs)
  {

     const producto=snap.data()
     producto.id=snap.id
     //const precioSnaps=await getDocs(collection,(sanp.ref,"prices"))
    // producto.prices=priceSanps.docs[0].data()
     productos.push(producto)

  }
  console.log(productos)
  
  return productos    //return producto
     
        
     
}


