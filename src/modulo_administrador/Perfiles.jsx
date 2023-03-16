import React, { useState, useEffect } from "react";
import {db} from '../firebaseConfig/conexion_firebase.js'
import {collection,docs,getDocs,query,where} from "firebase/firestore"
import mostrarProductos from "../function/mostrarProductos" 
const Perfiles = () => {
	
  //const value=useContext(DataContext)
  //const [listadoproductos]=value.listadoproductos
  //const [productInfo, setProductInfo] = useState(null)
  const [ correoempresas,setCorreoempresa ] = useState([])
  const ce=collection(db,"empresas")
  let id
  let email="josehumberto1556@gmail.com"
  mostrarProductos(email)

  return (
  
  <div>g</div>
  )
}

export default Perfiles