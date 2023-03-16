import { Link } from "react-router-dom";
import { doc,getDoc } from "firebase/firestore"
import {app,db} from '../firebaseConfig/conexion_firebase'
import { useEffect, useState }  from "react"
import { useUserAuth } from "../context/UsuarioContext";
import {useParams}  from 'react-router-dom'
import './maside.css'

const Maside = () => {
  
  const { user } = useUserAuth();
  let uuid =user.uid
  let nom=user.rol
 //const {uuid} = useParams();
 const [nombre,setNombre ] = useState('')
 const [nivel,setNivel]=useState('')
 
   const getPerfilById = async (uuid) => {
        
    const empresa = await getDoc( doc(db, "Usuarios", uuid) )
    
	if(empresa.exists()) {
            //console.log(product.data())  
            setNombre(empresa.data().nombre_usuario)			
            setNivel(empresa.data().url)
        }else{
            console.log('no existe')
        }
    }
   
   
    useEffect( () => {
        getPerfilById(uuid)
        // eslint-disable-next-line
    }, [])
 
 
  
  
 return (
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
 
 <Link to="/Moduloadministrador" className="brand-link text-center">
    <span className="brand-text font-weight-light">Cpanel Seungs</span>
  </Link>
  
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
	  
		<img src={nivel} 
		className="img-circle elevation-2" 
		alt="User Image" 
		/>
      </div>
      <div className="info">
        <a href="#" className="d-block">{nombre}</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
 
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

        
       
        <li className="nav-item">
		
		  <Link to="/Moduloadministrador/Perfil1" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
             Mi perfil 
            </p>
          </Link>
		  </li>
		  
   
        <li className="nav-item">		 
		   <a href="javascript:void(0)" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Productos
            </p>
          </a>
		 </li>
		 
		 <li className="nav-item">		 
		   <a href="javascript:void(0)" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Imagenes Productos
            </p>
          </a>
		 </li>
		 
		 <li className="nav-item">		 
		    <a href="javascript:void(0)" 
		   className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Servicios
            </p>
          </a>
		 </li>
		 
		<li className="nav-item">		 
		    <a href="javascript:void(0)" 
		   className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Imagenes Servicios
            </p>
          </a>
		 </li>
		 
		  <li className="nav-item">		 
            <a href="javascript:void(0)"
		   className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
             Repartidores
            </p>
          </a>
		  </li>
		  
		  <li className="nav-item">
		   <a href="javascript:void(0)"className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
           Repartidores Empresa
            </p>
          </a>
		</li>  
		  
		   <li className="nav-item">  
		   <a href="javascript:void(0)"
		    className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
           Repartidores Independiente
            </p>
          </a>
		 </li>
           
		     <li className="nav-item">		   
		         <a href="javascript:void(0)"
		        className="nav-link">
                <i className="nav-icon fas fa-copy" />
                <p>
                  Vehículo Repartidores 
                </p>
         
		      </a>  
		    </li>
			
			  <li className="nav-item">		   
		    <a href="javascript:void(0)"
		   className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
             Reclamo Producto 
            </p>
           </a>  
		 </li>
		 
		   <li className="nav-item">		   
		    <a href="javascript:void(0)"
			   className="nav-link">
				<i className="nav-icon fas fa-copy" />
				<p>
				 Reclamo Repartidores 
				</p>
          </a>  
		</li>
		
		  <li className="nav-item">		   
		  <a href="javascript:void(0)"
			 className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
             Reclamo Servicios 
            </p>
           </a>  
          </li>
         
	
		  
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
)
}

export default Maside;





