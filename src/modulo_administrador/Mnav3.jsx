import {Link} from 'react-router-dom'

const Mnav3 = () => {
  	
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
      <div className="nav-link">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Categorias</span>
        </div>
      </li>
      
	   <li className="nav-item">
        <div className="nav-link" to="/Moduloadministrador/ListadoEmpresas">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Empresas</span>
        </div>
      </li>
	  
	  <li className="nav-item">
        <div className="nav-link" to="/Moduloadministrador/ListadoClientes">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Clientes</span>
        </div>
      </li>
	  
	   <li className="nav-item">
        <div className="nav-link" to="/Moduloadministrador/Listadoplanes">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Planes</span>
        </div>
      </li>
	  
	   <li className="nav-item">
        <div className="nav-link" to="/Moduloadministrador/ListadoProducto">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Productos</span>
        </div>
      </li>
	  
	   <li className="nav-item">
        <div className="nav-link" to="/Moduloadministrador/ListadoRepartidores">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Modulo Repartidor</span>
        </div>
      </li>
	  
	     <li className="nav-item">
        <div className="nav-link" to="/Moduloadministrador/VehiculosRepartidores">
          <i className="icon-box menu-icon"></i>
          <span className="menu-title">Vehiculo Repartidor</span>
        </div>
      </li>   
	  
	  
	     
	  
	  </ul>
	</div>
  </nav>
  )
  
}

export default Mnav3












