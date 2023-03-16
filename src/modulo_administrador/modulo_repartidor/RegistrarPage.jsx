import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig/conexion_firebase'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const Registrarcategoria = () => {
  const [ nombre_categoria, setNombrecategoria ] = useState('')
  const [ descripcion_categoria, setDescripcioncategoria ] = useState('')
  const navigate = useNavigate()

  const categoriaCollection = collection(db, "categoria_empresa")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( categoriaCollection, { nombre_categoria: nombre_categoria, descripcion_categoria: descripcion_categoria } )
    navigate('/')
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
			   <h4 className="card-title">Registro Categoria</h4>
                 <form className="forms-sample"onSubmit={store}>
                    <div className="form-group">
                        <label for="Categoriar">Nombre Categoria</label>
                        <input
                            value={nombre_categoria}
                            onChange={ (e) => setNombrecategoria(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Categoria ..."
                        />
                    </div>  
                    <div className="form-group">
                        <label className="descripcionr">Descripción Categoria</label>
                        <input
                            value={descripcion_categoria}
                            onChange={ (e) => setDescripcioncategoria(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Descripción Categoria ..."
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

export default Registrarcategoria