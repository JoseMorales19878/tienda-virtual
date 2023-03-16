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

const ActualizarVehiculo = () => {
  
  const [ tipo_carro,setTipocarro ] = useState('')
  const [ numero_placa,setNumeroplaca ] = useState('')
  const [ numero_licencia,setNumerolicencia ] = useState('')

    const {id} = useParams()

    async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`repartidor/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }


    const update = async (e) => {
        e.preventDefault()
        const empresa = doc(db, "repartidor", id)
        const data = {
				        tipo_carro:tipo_carro,
					    numero_placa:numero_placa,
						numero_licencia:numero_licencia					
					 }
        await updateDoc(empresa, data)
        
    }

    const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "repartidor", id) )
        if(empresa.exists()) {
            //console.log(product.data())
            setTipocarro(empresa.data().tipo_carro)    
            setNumeroplaca(empresa.data().numero_placa)
			setNumerolicencia(empresa.data().numero_licencia)    
           	
        }else{
            console.log('El vehiculo no existe')
        }
    }

    useEffect( () => {
        getEmpresaById(id)
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
			   <h4 className="card-title">Registro Categoria</h4>
                 <form className="forms-sample"onSubmit={update}>
                     
                  
				  <div className="form-group">
                        <label className="nombrer">Numero Placa</label>
                        <input
                            value={numero_placa}
                            onChange={ (e) => setNumeroplaca(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Numero Placa ..."
							minlength="3"
							maxlength="20"
                            required
                        />              
                    </div> 
					
					  <div className="form-group">
                        <label className="nombrer">Apelldio Repartidor</label>
                        <input
                            value={tipo_carro}
                            onChange={ (e) => setTipocarro(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Tipo carro ..."
							minlength="3"
							maxlength="20"
                            required
                        />              
                    </div> 

                      
					 <div className="form-group">
                        <label className="nombrer">Numero Licencia</label>
                        <input
                            value={numero_licencia}
                            onChange={ (e) => setNumerolicencia(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Numero Licencia ..."
							minlength="3"
							maxlength="20"
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
					    <Link to="/Moduloadministrador/ListadoVeRepartidores" className='btn btn-primary mr-2'>Regresar</Link>
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

export default  ActualizarVehiculo


