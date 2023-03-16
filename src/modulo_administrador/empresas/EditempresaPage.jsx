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
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const storage=getStorage(app)

const Editcategoria = () => {
  const [ codigo_empresa,setcodigoempresa ] = useState('')
  const [ nombre_empresa,setNombreempresa ] = useState('')
  const [ direccion_empresa,setDireccionempresa ] = useState('')
  const [ correo_empresa,setCorreoempresa ] = useState('')
  const [ dni,setDni ] = useState('')
  const [ telefono_empresa,setTelefonoempresa ] = useState('')
  const [ profecion_empresa,setProfecion_empresa ] = useState('')
   
    const {id} = useParams()
     
	async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`empresa/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   } 
	 
    const update = async (e) => {
        e.preventDefault()
        const empresa = doc(db, "empresas", id)
        const data = { codigo_empresa:codigo_empresa, 
	                                   nombre_empresa:nombre_empresa,
									   direccion_empresa:direccion_empresa,
									   correo_empresa:correo_empresa, 
									   dni:dni,
									   telefono_empresa:telefono_empresa,
									   profecion_empresa:profecion_empresa
					}
        await updateDoc(empresa, data)
       MySwal.fire({
                      title: "Bien hecho!",
                      text: "Registro Modificado Con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    }

    const getEmpresaById = async (id) => {
        const empresa = await getDoc( doc(db, "empresas", id) )
        if(empresa.exists()) {
            //console.log(product.data())
            setcodigoempresa(empresa.data().codigo_empresa)    
            setNombreempresa(empresa.data().nombre_empresa)
			setDireccionempresa(empresa.data().direccion_empresa)    
            setCorreoempresa(empresa.data().correo_empresa)
			setDni(empresa.data().dni)    
            setTelefonoempresa(empresa.data().telefono_empresa)
			setProfecion_empresa(empresa.data().profecion_empresa)    
        }else{
            console.log('La Empresa no existe')
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
			   <h4 className="card-title">Editar Categoria {nombre_empresa}</h4>
                 <form className="forms-sample"onSubmit={update}>
                    <div className="form-group">
                        <label for="Codigor">Codigo Empresa</label>
                        <input
                            value={codigo_empresa}
                            onChange={ (e) => setcodigoempresa(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Codigo Empresa ..."
							min="20"
                            required
                        />
                    </div>  
                    <div className="form-group">
                        <label className="nombrer">Nombre Empresa</label>
                        <input
                            value={nombre_empresa}
                            onChange={ (e) => setNombreempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Empresa ..."
							minlength="3"
							maxlength="20"
                            required
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="direccionr">Dirección Empresa</label>
                        <textarea
                            value={direccion_empresa}
                            onChange={ (e) => setDireccionempresa(e.target.value)} 
                            className='form-control'
						    placeholder="Dirección Empresa ..."
							rows="10" 
							cols="50"
							required
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="correor">Correo Empresa</label>
                        <input
                            value={correo_empresa}
                            onChange={ (e) => setCorreoempresa(e.target.value)} 
                            type="email"
                            className='form-control'
						    placeholder="Correo Empresa ..."
							maxlength="50"
                             required
                        />              
                    </div>
					
				<div className="form-group">
                        <label className="dnir">Dni</label>
                        <input
                            value={dni}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Dni Empresa ..."
							min="8"
							 required
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="telefonor">Telefono Empresa</label>
                        <input
                            value={telefono_empresa}
                            onChange={ (e) => setTelefonoempresa(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Telefono Empresa ..."
							min="8"
							 required
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="pr">Profeción Empresa</label>
                        <input
                            value={profecion_empresa}
                            onChange={ (e) => setProfecion_empresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Profesión Empresa ..."
							minlength="3"
							maxlength="30"
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
					    <Link to="/Moduloadministrador/ListadoEmpresas" className='btn btn-primary mr-2'>Regresar</Link>
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