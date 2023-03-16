import {db} from './firebaseConfig/conexion_firebase.js'
import {collection, getDocs,query,where} from "firebase/firestore"

export default async  function()
{

   const collectionRef=collection(db,"producto")
   const filtrarActivos=query(collectionRef,where("activo","==",true))
   const snaps=await getDocs(filtrarActivos)
   const productos=[]
  /* snaps.forEach((doc)=>
   {
       productos.push(doc.data())
   })
*/
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
