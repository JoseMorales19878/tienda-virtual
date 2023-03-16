import React, {useState,useContext} from "react";
import  {DataContext}   from '../context/DataProvider'
import { Link }       from "react-router-dom";
import './Header.css'
import  logo            from '../images/imageslogo/logo.png'
import  barra           from '../assets/img/barra.png'



const Header = () => {

const value = useContext(DataContext);
const [carrito] = value.carrito;
const [menu,setMenu] =value.menu;
const toogleMenu = () =>{
   setMenu(!menu)
  }
 const letra = {
	 color:"#ffffff"
	
	 
 }
  
  return (
 <header> 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand">Seungs</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
		<li className="nav-item">
		    <Link className="nav-link" to="/"  style={letra}>Inicio </Link>
        </li>
        
		
		<li className="nav-item">
		     <Link className="nav-link" 
			 to="/Productos" 
			 style={letra}>
			 Productos 
			 </Link>

        </li>
		
			<li className="nav-item">
          <div className="cart"  onClick={toogleMenu}  style={letra}>
             <box-icon name="cart"  style={letra}></box-icon>
             <span className="item__total">{carrito.length}</span>
           </div>
		   
        </li>
		
		<li className="nav-item">
          <Link className="nav-link" to="/Servicios"  style={letra}>Servicios </Link>
        </li>
		

		<li className="nav-item">
          <Link className="nav-link" to="/Contacto"  style={letra}>Contacto </Link>
		</li>
		
		<li className="nav-item">
          <Link className="nav-link" to="/IniciarSeccion"  style={letra}>Iniciar Sección </Link>
		</li>
	
		
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" 
		    href="#" 
			role="button" 
			data-bs-toggle="dropdown" 
			aria-expanded="false"
			style={letra}
			>
            Registro Usuarios
          </a>
          <ul className="dropdown-menu">
		    <li>
				<Link className="dropdown-item" 
				      to="/RegistroCliente"  
					  >Registro Comprador/vendedor
				 </Link>

			</li>
          
		  <li>
			 <Link className="dropdown-item" 
				      to="/RegistroEmpresa"  
					  >Registro Empresa
				 </Link>
			</li>
			
            <li>
			    
			 <Link className="dropdown-item" 
				      to="/RegistroRepartidor"  
					  >Registro Repartidor
				 </Link>
			</li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar ..." aria-label="Search" />
        <button className="btn btn-primary" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
</header> 
  )
}

export default Header
