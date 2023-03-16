import {app,db} from '../firebaseConfig/conexion_firebase'
import { useUserAuth } from "../context/UsuarioContext";
import {Link,useNavigate} from 'react-router-dom'
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { useEffect, useState }  from "react"
import { getStorage,
         ref, 
		 uploadBytes,
		 getDownloadURL } from 'firebase/storage'
import mostrarProductos from '../function/mostrarProductos';
import  FormularioEmpresas from './formularioEmpresas'
import Mheader    from './Mheader'
import Maside1     from './Maside1'
import Mfooter    from './Mfooter'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
const storage=getStorage(app)

const Perfil1= () => {
	
  
	return (
	<>
	 <div className="hold-transition sidebar-mini layout-fixed">
  <div className="wrapper">
  <Mheader />
  <Maside1 />
  <div className="content-wrapper">
	  <section className="content-header">
		  <div className="container-fluid">
			<div className="row mb-2">
			  <div className="col-sm-6">
				<h1>Perfil Empresa</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active">Perfil Empresa ugg</li>
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
				 
                 <FormularioEmpresas/>
                
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
    </>							   
					   
			          
	 )
	
}

export default Perfil1	


