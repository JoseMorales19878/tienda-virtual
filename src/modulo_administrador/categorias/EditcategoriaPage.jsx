import { useEffect, useState }    from "react"
import { Link, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import {app,db} from '../../firebaseConfig/conexion_firebase'
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import Mheader    from '../Mheader'
import Mnav       from '../Mnav'
import Mfooter    from '../Mfooter'

const storage=getStorage(app)

const Editcategoria = () => {
   const [ nombre_categoria, setNombrecategoria ] = useState('')
   const [ descripcion_categoria, setDescripcioncategoria ] = useState('')
   const [ numberError, setNumberError] = useState(0);
   const [ numberErro, setNumberErro] = useState(0);
   const minValue =  nombre_categoria.length > 2;
   const miniValue =  nombre_categoria.length >2;
   const maxValue =  nombre_categoria.length <=20;
   const maValue =  nombre_categoria.length <=200;
   const onliLet = /^[a-zA-Z\s]*$/g.test(nombre_categoria);

     async function subirArchivo(e)
   {
	   //detectar archivo
	   const archivoLocal=e.target.files[0];
	   console.log(archivoLocal)
	   //cargar a firebasestore
	   const archivoRef=ref(storage,`categoria/${archivoLocal.name}`)
	   const uplo=await uploadBytes(archivoRef,archivoLocal)
	   const urlDescarga=await getDownloadURL(archivoRef)
	   console.log(uplo)
	   console.log(urlDescarga)
   }
	
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
		if(nombre_categoria==="" &&  descripcion_categoria==="")
         {
			 setNumberError(1);
			 setNumberErro(1);
		 }
		 else
		 {
			if(nombre_categoria==="" &&  descripcion_categoria!="")
            { 
		        setNumberError(2);      
		    }
			
			else{
			
			if(nombre_categoria!="" &&  descripcion_categoria==="")
            { 
		        setNumberErro(2);      
		    }
			else
			{
				if(nombre_categoria &&  descripcion_categoria)
                { 
		             if (onliLet == false) 
					 {
						  setNumberError(3); 
                     }		
                      else
                      {
						  if (!minValue && !maxValue) 
						  {
					          setNumberError(4);
                             							  
						  }
						  else
						  {
							   if (!miniValue && !maValue) 
						       { 
					          
							      setNumberErro(3);
                             							  
						       }
						  }
					  }
				}//fin del  if categoria 
				 const categoria = doc(db, "categoria_empresa", id)
                const data = {nombre_categoria: nombre_categoria, descripcion_categoria: descripcion_categoria }
                await updateDoc(categoria, data)
				alert("Registro Modificado Con Exito");
	                window.location.href ="/Moduloadministrador/ListadoCategoria"  
			}	
		 }	
		}	 
       
       
    }

    const getProductById = async (id) => {
        const categoria = await getDoc( doc(db, "categoria_empresa", id) )
        if(categoria.exists()) {
            //console.log(product.data())
            setNombrecategoria(categoria.data().nombre_categoria)    
            setDescripcioncategoria(categoria.data().descripcion_categoria)
        }else{
            console.log('La categoria no existe')
        }
    }

    useEffect( () => {
        getProductById(id)
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
			   <h4 className="card-title">Editar Categoria {nombre_categoria}</h4>
                 <form className="forms-sample"onSubmit={update}>
                    <div className="form-group">
                        <label for="Categoriar">Nombre Categoria</label>
                        <input
                            value={nombre_categoria}
                            onChange={ (e) => setNombrecategoria(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Nombre Categoria ..."
                            required
						/>
						{numberError == 1 && (
                         <label className="mi_formulario__error">
                           El campo categoria esa vacío
                           </label>
                           )}
						
                          {numberError == 2 && (
                         <label className="mi_formulario__error">
                           El campo categoria esa vacío
                           </label>
                           )}
						   
						   
                          {numberError == 3 && (
                         <label className="mi_formulario__error">
                           El campo categoria solo letras
                           </label>
                           )}
						
                            {numberError == 4 && (
                         <label className="mi_formulario__error">
                           El campo categoria  acepta entre 3 y 20 caracteres
                           </label>
                           )}
								
                    </div>
					
                    <div className="form-group">
                        <label className="descripcionr">Descripción Categoria</label>
                        <input
                            value={descripcion_categoria}
                            onChange={ (e) => setDescripcioncategoria(e.target.value)} 
                            type="text"
                            className='form-control'
						    placeholder="Descripción Categoria ..."
                            required
						/>   
                        
                         {numberErro == 1 && (
                         <label className="mi_formulario__error">
                           El campo descripción esa vacío
                           </label>
                           )}
						   
						   {numberErro == 2 && (
                         <label className="mi_formulario__error">
                           El campo descripción esa vacío43
                           </label>
                           )}

                            {numberErro == 3 && (
                         <label className="mi_formulario__error">
                           El campo descripción  acepta entre 3 y 200 caracteres
                           </label>
                           )}
						 

						
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
					<Link to="/Moduloadministrador/ListadoCategoria" className='btn btn-primary mr-2'>Regresar</Link>
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