import React, { useState,useEffect } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { collection, 
         addDoc,
		 getDoc, 
		 updateDoc, 
		 doc
		 } from 'firebase/firestore'
import { app,db } from '../../../firebaseConfig/conexion_firebase'
import { useUserAuth } from "../../../context/UsuarioContext";
import Mheader    from '../../Mheader'
import Mfooter    from '../../Mfooter'
import Maside     from '../../Maside'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import ImagenesProductoId from '../../../function/perfielempresa/ImagenesProductoId'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)		 
		 
const storage=getStorage(app)

const VerImagenes = () => {
  
  const [ codigo_producto, setCodigoproducto ] = useState('')
  const [ nombre_producto, setNombreproducto ] = useState('')
  const [ imagen, setImagen ] = useState('')
  const [ imagenes, setImagenes ] = useState('')

  let navigate = useNavigate();
  const { user } = useUserAuth();
  let id_usuario =user.uid 
  let urlDescarga
  
   const {id} = useParams()

  ImagenesProductoId(id);
 async function actualizarEstadoProductos(){
   const listado=await ImagenesProductoId(id);
    setImagenes(listado)
   }//fin del actualizarEstadoProductos
  
   const getProductById = async (id) => {
        const categoria = await getDoc( doc(db, "producto", id) )
        if(categoria.exists()) {
            //console.log(product.data())
			setCodigoproducto(categoria.data().codigo_producto)    
            setNombreproducto(categoria.data().nombre_producto)    
            setImagen(categoria.data().url_imagen)
           
		}else{
            console.log('El producto no existe')
        }
    }
    
	useEffect( () => {
        actualizarEstadoProductos()
        // eslint-disable-next-line
    }, [])
  
	
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
				<h1> Ver Imagenes Productos</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Ver Imagenes  Productos</li>
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
					<h3 classNames="card-title">
                      Imagenes Producto {nombre_producto}
					</h3>
				  </div>
		        
				   
                 <form id="quickForm">

                     <div className="form-group">
                        <label for="Categoriar">Codigo Producto</label>
                        <input
                            value={codigo_producto}
                            onChange={ (e) => setCodigoproducto(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="codigo Producto ..."
							minlength="3"
							maxlength="20"
                            disabled
                        />
                    </div>     
						
					 <div className="form-group">
                        <label for="Categoriar">Nombre Producto</label>
                        <input
                            value={nombre_producto}
                            onChange={ (e) => setNombreproducto(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Producto ..."
							minlength="3"
							maxlength="20"
                             disabled
                        />
                    </div>  
					
					
					
					<div className="form-group">
                        <label className="descripcionr">Imagen</label>
                        <img src={imagen} width="100" height="100"/>           
                    </div> 
					
					<div className="form-group">
                        <label className="descripcionr">Imagenes</label>
					{imagenes && imagenes.map((imagene,index)=>(
					
					  <div className="form-group">
                        <img src={imagene.url_imagen} width="100" height="100"/>           
                     </div> 
					
					))}
					</div> 
                     <div  className="card-footer" align="center">
					  <Link to="/Moduloadministrador/PerfilEmpresa/imagenes_productos/ImagenesProductos" className='btn btn-primary mr-2'>Regresar</Link>
                   </div> 
				</form>
				  </div>
		      </div>
			</div>
			<div className="col-md-6">

			  </div>
          </div>
        </section>		  
		
		
		
		
		
		
		
			   
			 </div>
			<Mfooter/>
			
			</div> 
		 </div>	
			
  )
}

export default VerImagenes



