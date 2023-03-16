 import {db} from '../../firebaseConfig/conexion_firebase.js'
import {collection, getDocs,query,where} from "firebase/firestore"

export default async function ListadoProducto()
{
   
      
    let n;
//   const [a,setA]=useState('')
   const collectionRef=collection(db,"producto")
   const snaps=await getDocs(collectionRef)
   const productos=[]

  for await(const snap of snaps.docs)
  {

     const producto=snap.data()
     producto.id=snap.id
     productos.push(producto)

  }
  console.log(productos)
  
  return productos    //return producto
        
     
}


