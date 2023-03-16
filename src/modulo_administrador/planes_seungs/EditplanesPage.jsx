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
const Editcategoria = () => {
  const [ nombre_plan, setNombreplan ] = useState('')
  const [ precio_plan, setPrecioplan ] = useState('')
  const [ descripcion_plan, setDescripcionplan ] = useState('')

    
    const {id} = useParams()
    async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`planes/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }
   
    const update = async (e) => {
        e.preventDefault()
        const planes = doc(db, "adquision_plan", id)
        const data = {nombre_plan:nombre_plan, precio_plan:precio_plan,descripcion_plan:descripcion_plan}
        await updateDoc(planes, data)
        alert("Registro Modificado Con Exito");
    }

    const getPlanesById = async (id) => {
        const planes = await getDoc( doc(db, "adquision_plan", id) )
        if(planes.exists()) {
            //console.log(product.data())
            setNombreplan(planes.data().nombre_plan)    
            setPrecioplan(planes.data().precio_plan)
			setDescripcionplan(planes.data().descripcion_plan)
        }else{
            console.log('El plan no existe')
        }
    }

    useEffect( () => {
        getPlanesById(id)
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
			   <h4 className="card-title">Editar Plan {nombre_plan}</h4>
                 <form className="forms-sample"onSubmit={update}>
                   <div className="form-group">
                        <label for="Categoriar">Nombre Plan</label>
                        <input
                            value={nombre_plan}
                            onChange={ (e) => setNombreplan(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Plan ..."
							minlength="3"
							maxlength="20"
                            required
                        />
                    </div>  
					<div className="form-group">
                        <label for="Categoriar">Precio Plan</label>
                        <input
                            value={precio_plan}
                            onChange={ (e) => setPrecioplan(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Plan Precio ..."
							min="7"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="descripcionr">Descripción Plan</label>
                        <textarea
                            value={descripcion_plan}
                            onChange={ (e) => setDescripcionplan(e.target.value)} 
                            className='form-control'
						    placeholder="Descripción Plan ..."
                            rows="10" 
							cols="50"
							required
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
					    <Link to="/Moduloadministrador/Listadoplanes" className='btn btn-primary mr-2'>Regresar</Link>
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

export default  Editcategoria