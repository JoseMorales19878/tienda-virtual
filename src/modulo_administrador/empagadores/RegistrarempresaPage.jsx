import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/conexion_firebase'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const Registrarempresa = () => {
  const [ codigo_empresa,setcodigoempresa ] = useState('')
  const [ nombre_empresa,setNombreempresa ] = useState('')
  const [ direccion_empresa,setDireccionempresa ] = useState('')
  const [ correo_empresa,setCorreoempresa ] = useState('')
  const [ dni,setDni ] = useState('')
  const [ telefono_empresa,setTelefonoempresa ] = useState('')
  const [ profecion_empresa,setProfecion_empresa ] = useState('')
  const navigate = useNavigate()

  const empresaCollection = collection(db, "empresas")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( empresaCollection, { codigo_empresa:codigo_empresa, 
	                                   nombre_empresa:nombre_empresa,
									   direccion_empresa:direccion_empresa,
									   correo_empresa:correo_empresa, 
									   dni:dni,
									   telefono_empresa:telefono_empresa,
									   profecion_empresa:profecion_empresa
									   } )
    //navigate('/')
    //console.log(e.target[0].value)
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
			   <h4 className="card-title">Registro Empresas</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Codigor">Codigo Empresa</label>
                        <input
                            value={codigo_empresa}
                            onChange={ (e) => setcodigoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Codigo Empresa ..."
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
                        />              
                    </div> 

                      <div className="form-group">
                        <label className="direccionr">Dirección Empresa</label>
                        <input
                            value={direccion_empresa}
                            onChange={ (e) => setDireccionempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dirección Empresa ..."
                        />              
                    </div>
					
					 <div className="form-group">
                        <label className="correor">Correo Empresa</label>
                        <input
                            value={correo_empresa}
                            onChange={ (e) => setCorreoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Correo Empresa ..."
                        />              
                    </div>
					
				<div className="form-group">
                        <label className="dnir">Dni</label>
                        <input
                            value={dni}
                            onChange={ (e) => setDni(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Dni Empresa ..."
                        />              
                    </div>
					
					<div className="form-group">
                        <label className="telefonor">Telefono Empresa</label>
                        <input
                            value={telefono_empresa}
                            onChange={ (e) => setTelefonoempresa(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Telefono Empresa ..."
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
                        />              
                    </div>
					
                    <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
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

export default Registrarempresa