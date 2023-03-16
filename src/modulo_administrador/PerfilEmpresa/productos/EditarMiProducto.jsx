import { useEffect, useState }    from "react"
import { Link, useParams,useNavigate } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {app,db} from '../../../firebaseConfig/conexion_firebase'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Mheader    from '../../Mheader'
import Mfooter    from '../../Mfooter'
import Maside     from '../../Maside'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const MySwal = withReactContent(Swal)	

const storage=getStorage(app)

const EditarMiProducto   = () => {
  const [ codigo_producto, setCodigoproducto ] = useState('')
  const [ nombre_producto, setNombreproducto ] = useState('')
  const [ descripcion_producto, setDescripcionproducto ] = useState('')
  const [ cantidad_producto, setCantidadproducto ] = useState('')
  const [ precio_producto, setPrecioproducto ] = useState('')
  const [ url_empresa,setUrlempresa ] = useState('')

  let navigate = useNavigate();
  let urlDescarga;	
	
    async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`productos/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }

    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const categoria = doc(db, "producto", id)
        const data = {codigo_producto:codigo_producto, 
	                  nombre_producto:nombre_producto,
					  descripcion_producto:descripcion_producto,
					  cantidad_producto:cantidad_producto,
					  precio_producto:precio_producto,
					  url_imagen:urlDescarga,
					  }
        await updateDoc(categoria, data)
        MySwal.fire({
                      title: "Bien hecho!",
                      text: "Producto Modificado con Exito!",
                      icon: "success",
                       button: "Felicitaciones!",
                   });
    navigate("/Moduloadministrador/PerfilEmpresa/EditarMiProducto/".id); 
    }

    const getProductById = async (id) => {
        const categoria = await getDoc( doc(db, "producto", id) )
        if(categoria.exists()) {
            //console.log(product.data())
			setCodigoproducto(categoria.data().codigo_producto)    
            setNombreproducto(categoria.data().nombre_producto)    
            setDescripcionproducto(categoria.data().descripcion_producto)
            setCantidadproducto(categoria.data().cantidad_producto)    
            setPrecioproducto(categoria.data().precio_producto)
			setUrlempresa(categoria.data().url_imagen)
		}else{
            console.log('El producto no existe')
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
				<h1>Modulo Producto</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Editar Producto</li>
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
					<h3 classNames="card-title">Editar Producto {nombre_producto}	</h3>
				  </div>
                      <form id="quickForm" onSubmit={update}>
				
					  
					  <div className="form-group">
						<label for="Categoriar">Codigo Producto</label>
                        <input
                            value={codigo_producto}
                            onChange={ (e) => setCodigoproducto(e.target.value)} 
                            type="number"
                            className="form-control"
						    placeholder="Codigo Producto ..."
							minlength="1"
							maxlength="20"
                            required
							
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
                            required
                        />
					  </div>

					

					<div className="form-group">
					 <label for="Categoriar">Precio Producto</label>
                        <input
                            value={precio_producto}
                            onChange={ (e) => setPrecioproducto(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Precio Producto ..."
							minlength="1"
							maxlength="20"
                            required
                        />
					  </div>	


					   <div className="form-group">
						 <label for="Categoriar">Cantidad Producto</label>
                        <input
                            value={cantidad_producto}
                            onChange={ (e) => setCantidadproducto(e.target.value)} 
                            type="number"
                            className='form-control'
						    placeholder="Cantidad Producto ..."
							minlength="1"
							maxlength="7"
                            required
                        />
					  </div>	

					  
					   <div className="form-group">
						  <label className="descripcionr">Descripción Categoria</label>
                        <textarea
                            value={descripcion_producto}
                            onChange={ (e) => setDescripcionproducto(e.target.value)} 
                            className='form-control'
						    placeholder="Descripcion Producto ..."
							rows="10" 
							cols="50"
							required
                        />  
					  </div>					  
					  
					     <div className="form-group">
						  <label className="descripcionr">Foto</label>
					       <img src={url_empresa} className='form-contro' witch="100" height="100"/>  
					     </div>					  
					  
					  
					  <div className="form-group mb-0">
						<div className="custom-control custom-checkbox">
						  <label className="descripcionr">Subir Imagen</label>
                        <input
                            onChange={subirArchivo} 
                            type="file"
                            className="form-control"
						    required
							/>
						</div>
					  </div>
					  
					  <div className="card-footer" align="center">
					  <button type="submit" className="btn btn-primary">Editar</button>
					<Link to="/Moduloadministrador/PerfilEmpresa/productos/MisProductos" className='btn btn-primary mr-2'>Regresar</Link>
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

export default  EditarMiProducto




