import {Link} from 'react-router-dom'
const Mnav = () => {
  
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <div className="user-profile">
      <div className="user-image">
        
		  <div className="user-name">
			  Seungs Administrador
		  </div>
		  <div className="user-designation">
			Panel de Control
		  </div>
      </div>
    	  
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/Moduloadministrador/ListadoCategoria">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Categorias</span>
        </Link>
      </li>
      
	   <li className="nav-item">
        <Link className="nav-link" to="/Moduloadministrador/ListadoEmpresas">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Empresas</span>
        </Link>
      </li>
	  
	  <li className="nav-item">
        <Link className="nav-link" to="/Moduloadministrador/ListadoClientes">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Clientes</span>
        </Link>
      </li>
	  
	   <li className="nav-item">
        <Link className="nav-link" to="/Moduloadministrador/Listadoplanes">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Planes</span>
        </Link>
      </li>
	  
	   <li className="nav-item">
        <Link className="nav-link" to="/Moduloadministrador/ListadoProducto">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Productos</span>
        </Link>
      </li>
	  
	   <li className="nav-item">
        <Link className="nav-link" to="/Moduloadministrador/ListadoRepartidores">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Repartidor</span>
        </Link>
      </li>
	  
	     <li className="nav-item">
        <Link className="nav-link" to="/Moduloadministrador/VehiculosRepartidores">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Vehiculo Repartidor</span>
        </Link>
      </li>   
	  
	  
	     <li className="nav-item">
        <Link className="nav-link" to="/Moduloadministrador/Listadousuarios">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Usuaios</span>
        </Link>
      </li> 
	  
	  </ul>
	</div>
  </nav>
  )
  
}

export default Mnav

