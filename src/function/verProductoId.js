import {db} from '../firebaseConfig/conexion_firebase.js'
import { doc, collection, getDocs, getDoc } from "firebase/firestore";

async function  verProductoId(id)  {
    //try {
        const collectionRef = collection(db, "producto");
        const docuRef = doc(collectionRef, id);
        const snapDoc = await getDoc(docuRef);
        const producto = snapDoc.data();
        // obtenemos el/los precio(s) del producto
       /* const precioSnaps = await getDocs(collection(snapDoc.ref, "prices"));
        producto.price = precioSnaps.docs[0].data();
        producto.priceId = precioSnaps.docs[0].id;
        return producto;
      } catch (error) {
        console.log(error);
        return undefined;
      }*/
      return producto
}

export default verProductoId



