import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { app,db } from '../../firebaseConfig/conexion_firebase'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'
const storage=getStorage(app)
const Registrarcliente = () => {
  const [ nombre_cliente,setNombrecliente ] = useState('')
  const [ apellidos_cliente,setApellidoscliente ] = useState('')
  const [ dni_cliente,setDni ] = useState('')
  const [ direccion_cliente,setDireccioncliente ] = useState('')
  const [ telefono_cliente,setTelefonocliente ] = useState('')
  const [ correo_cliente,setCorreocliente ] = useState('')
  const [ numberError, setNumberError] = useState(0);
  const [ numberErro, setNumberErro] = useState(0);
  //const minValue =  nombre_categoria.length > 2;
  //const miniValue =  nombre_categoria.length >2;
  //const maxValue =  nombre_categoria.length <=20;
  //const maValue =  nombre_categoria.length <=200;
  //const onliLet = /^[a-zA-Z\s]*$/g.test(nombre_categoria);
  const clienteCollection = collection(db, "clientes")

   async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`clientes/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }

  const store = async (e) => {
    e.preventDefault()
    await addDoc( clienteCollection, { nombre_cliente:nombre_cliente, 
	                                   apellidos_cliente:apellidos_cliente,
									   dni_cliente:dni_cliente,
									   direccion_cliente:direccion_cliente,
									   telefono_cliente:telefono_cliente,
									   correo_cliente:correo_cliente
									  } )
     alert("Registro Con Exito");
	 window.location.href ="/Moduloadministrador/ListadoClientes"  
  }

  return (
  <div className="container-scroller">
       <Mheader/>
      <div  className="container-fluid page-body-wrapper">
        
      <Mnav/>
        <div className="main-panel">
    <div className='content-wrapper'>
        <div className='row'>
            <div className='col-md-6 grid-margin stretch-card'>
             <div className="card">
			  <div className="card-body">
			   <h4 className="card-title">Registro Clientes</h4>
                 <form className="forms-sample" onSubmit={store}>
                    <div className="form-group">
                        <label for="Nombrer">Nombre Cliente</label>
                        <input
                            value={nombre_cliente}
                            onChange={ (e) => setNombrecliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Cliente ..."
							minlength="3"
							maxlength="20"
                            required							
                        />
                    </div>  
                    <div className="form-group">
                        <label className="aper">Apellido Cliente</label>
                        <input
                            value={apellidos_cliente}
                            onChange={ (e) => setApellidoscliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Apellido Cliente ..."
							minlength="3"
							maxlength="20"
                            required
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="Dnic">Dni Cliente</label>
                        <input
                            value={dni_cliente}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Dni Cliente ..."
							min="8"
                            required
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="dirr">Dirección Cliente</label>
                        <textarea
                            value={direccion_cliente}
                            onChange={ (e) => setDireccioncliente(e.target.value)} 
                            rows="10" 
							cols="50"
                            className='form-control'
						    placeholder="Dirección Cliente ..."
							required
                        />              
                    </div>
					
			
					
					<div className="form-group">
                        <label className="telefonor">Telefono Cliente</label>
                        <input
                            value={telefono_cliente}
                            onChange={ (e) => setTelefonocliente(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Telefono Clientes ..."
							min="12"
							required
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="correor">Correo Cliente</label>
                        <input
                            value={correo_cliente}
                            onChange={ (e) => setCorreocliente(e.target.value)} 
                            type="email"
                            className='form-control'
						    placeholder="Correo Cliente ..."
							maxlength="30"
							required
                        />              
                    </div>
					
						<div className="form-group">
                        <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className='form-control'
						    required
                        />              
                    </div>  
					
                     <div align="Center">
                        <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
					    <Link to="/Moduloadministrador/ListadoClientes" className='btn btn-primary mr-2'>Regresar</Link>
                     </div> 
					 
                 </form>   
				</div>
			  </div>
            </div>
        </div>
	    </div>
     </div>
 </div>
    </div> 
  )
}

export default Registrarcliente