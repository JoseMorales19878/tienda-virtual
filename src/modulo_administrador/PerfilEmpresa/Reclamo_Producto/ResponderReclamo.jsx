import { useEffect, useState }    from "react"
import { Link, useParams,useNavigate } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {app,db} from '../../../firebaseConfig/conexion_firebase'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Mheader    from '../../Mheader'
import Maside     from '../../Maside'
import Mfooter    from '../../Mfooter'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)	

const storage=getStorage(app)

const ResponderReclamo   = () => {
  const [ nombre_producto, setNombreproducto ] = useState('')
  const [ imagen_producto, setImagenproducto ] = useState('')
  const [ nombre_cliente,  setNombrecliente ] = useState('')
  const [ observacion, setObservacion ] = useState('')
  const [ repuesta, setRepuesta ] = useState('')

  let navigate = useNavigate();
  let urlDescarga;	
	
    
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const categoria = doc(db, "reclamo_producto", id)
        const data = {
					   repuesta:repuesta
					  }
        await updateDoc(categoria, data)
        MySwal.fire({
                      title: "Bien hecho!",
                      text: "Repuestas Enivada con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    navigate("/Moduloadministrador/PerfilEmpresa/Reclamo_Producto/ReclamoProductos"); 
    }

    const getProductById = async (id) => {
        const categoria = await getDoc( doc(db, "reclamo_producto", id) )
        if(categoria.exists()) {
            //console.log(product.data())
            setNombreproducto(categoria.data().nombre_producto)    
            setImagenproducto(categoria.data().imagen_producto)
            setNombrecliente(categoria.data().nombre_cliente)    
            setObservacion(categoria.data().observacion)
		}else{
            console.log('El reclamo no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
        // eslint-disable-next-line
    }, [])
    return (
              <div className="hold-transition sidebar-mini layout-fixed">
  <div className="wrapper">
  <Mheader />
  <Maside />
  <div className="content-wrapper">
	  <section className="content-header">
		  <div className="container-fluid">
			<div className="row mb-2">
			  <div className="col-sm-6">
				<h1>Modulo Reclamo Producto</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Registro Reclamo Producto</li>
				</ol>
			  </div>
			</div>
		  </div>
		</section>
		
		<section className="contet">
		  <div className="container-fluid">
			<div className="row">
			  
			  <div className="col-md-12">
			   
				<div className="card card-primary">
				  <div className="card-header">
					<h3 classNames="card-title">Responder Reclamo producto {nombre_producto}</h3>
				  </div>
                 <form id="quickForm" onSubmit={update}>
                   
                                   

				 <div className="form-group">
                        <label for="Categoriar">Nombre Producto</label>
                        <input
                            value={nombre_producto}
                            onChange={ (e) => setNombreproducto(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Producto ..."
							disabled
                           
                        />
                    </div> 
                      
                      <div className="form-group">
                        <label for="Categoriar">foto Producto</label>
                        <img src={imagen_producto} width="100" height="100"/>
                    </div>  					  
  
					
						 <div className="form-group">
                        <label for="Categoriar">Nombre Cliente</label>
                        <input
                            value={nombre_cliente}
                            onChange={ (e) => setNombrecliente(e.target.value)} 
                            type="text"
                            className='form-control'
						    disabled
                        />
                    </div> 
					
                    <div className="form-group">
                        <label className="descripcionr">Reclamo</label>
                        <textarea
                            value={observacion}
                            onChange={ (e) => setObservacion(e.target.value)} 
                            className='form-control'
						    placeholder="Descripcion Producto ..."
							rows="10" 
							cols="50"
							required
							disabled
                        />              
                    </div>  
					
					   <div className="form-group">
                        <label className="descripcionr">Repuesta</label>
                        <textarea
                            value={repuesta}
                            onChange={ (e) => setRepuesta(e.target.value)} 
                            className='form-control'
						    placeholder="Repuesta ..."
							rows="10" 
							cols="50"
							required
							
                        />              
                    </div>  
					
					
					
                     <div align="Center">
                      <button type='submit' className='btn btn-primary mr-2'>Guardar</button>
				      <Link to="/Moduloadministrador/PerfilEmpresa/Reclamo_Producto/ReclamoProductos" className='btn btn-primary mr-2'>Regresar</Link>
                     </div>
                     
                 </form>   
					</div>
			   
				</div>
			 
			  <div className="col-md-6">

			  </div>
          
        </div>
       
      </div>
	  
    </section>

	  </div>
	  	<Mfooter/>
	 </div>
    </div>
 
    )
}

export default ResponderReclamo




