 import {db} from '../../firebaseConfig/conexion_firebase.js'
 import {collection, getDocs,query,where} from "firebase/firestore"

export default async function RepartidoEmpresaId(id_usuario)
{
   
      
    let n;
//   const [a,setA]=useState('')
   const collectionRef=collection(db,"repartidor")
   const filtrarActivos=query(collectionRef,where("id_usuario","==",id_usuario))
   const snaps=await getDocs(filtrarActivos)
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


