import { useEffect, useState }    from "react"
import { Link, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {app,db} from '../../firebaseConfig/conexion_firebase'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'

const storage=getStorage(app)


  const Editcliente= () => {
  const [ nombre_cliente,setNombrecliente ] = useState('')
  const [ apellidos_cliente,setApellidoscliente ] = useState('')
  const [ dni_cliente,setDni ] = useState('')
  const [ direccion_cliente,setDireccioncliente ] = useState('')
  const [ telefono_cliente,setTelefonocliente ] = useState('')
  const [ correo_cliente,setCorreocliente ] = useState('')
  const {id} = useParams()

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

    const update = async (e) => {
        e.preventDefault()
        const cliente = doc(db, "clientes", id)
        const data = { 
		                nombre_cliente:nombre_cliente, 
	                    apellidos_cliente:apellidos_cliente,
						dni_cliente:dni_cliente,
					    direccion_cliente:direccion_cliente,
						telefono_cliente:telefono_cliente,
						correo_cliente:correo_cliente
					 }
        await updateDoc(cliente, data)
        alert("Registro Modificado Con Exito");
    }

    const getClienteById = async (id) => {
        const cliente= await getDoc( doc(db, "clientes", id) )
        if(cliente.exists()) {
            //console.log(product.data())
            setNombrecliente(cliente.data().nombre_cliente)    
            setApellidoscliente(cliente.data().apellidos_cliente)
			setDni(cliente.data().dni_cliente)    
            setDireccioncliente(cliente.data().direccion_cliente)
			setTelefonocliente(cliente.data().telefono_cliente)
			setCorreocliente (cliente.data().correo_cliente)    
           
        }else{
            console.log('El cliente no existe')
        }
    }

    useEffect( () => {
        getClienteById(id)
        // eslint-disable-next-line
    }, [])
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
			   <h4 className="card-title">Editar Cliente {nombre_cliente}</h4>
                 <form className="forms-sample"onSubmit={update}>
                    
                    <div className="form-group">
                        <label for="Nombrer">Nombre Cliente</label>
                        <input
                            value={nombre_cliente}
                            onChange={ (e) => setNombrecliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Cliente ..."
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
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="Dnic">Dni Cliente</label>
                        <input
                            value={dni_cliente}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dni Cliente ..."
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="dirr">Dirección Cliente</label>
                        <input
                            value={direccion_cliente}
                            onChange={ (e) => setDireccioncliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dirección Cliente ..."
                        />              
                    </div>
					
			
					
					<div className="form-group">
                        <label className="telefonor">Telefono Cliente</label>
                        <input
                            value={telefono_cliente}
                            onChange={ (e) => setTelefonocliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Telefono Clientes ..."
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
                        />              
                    </div>
					
					
						<div className="form-group">
                        <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className='form-control'
						    
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

export default  Editcliente