import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import  Inicio               from  './Inicio/Inicio'
import  Servicios            from  './Servicios/Servicios'
import  Productos            from  './Productos/Productos' 
import  Contacto             from  './Contacto/Contacto'
import  CuentaUsuario        from  './IniciarSeccion/CuentaUsuario'
import  RegistroUsuario      from  './RegistroUsuario/RegistroUsuario'
import  RegistroEmpresa      from  './RegistroUsuario/RegistroEmpresa'
import  RegistrorRepartidor  from  './RegistroUsuario/RegistrorRepartidor'

import  Moduloadministrador  from  './modulo_administrador/Moduloadministrador'
import  ListadoCategoria     from  './modulo_administrador/categorias/ListadoCategoriaPage'
import  Registrarcategoria   from  './modulo_administrador/categorias/RegistrarcategoriaPage'
import  Editcategoria        from  './modulo_administrador/categorias/EditcategoriaPage'

import  ListadoEmpresas      from  './modulo_administrador/empresas/ListadoEmpresasPage'
import  Registrarempresa     from  './modulo_administrador/empresas/RegistrarempresaPage'
import  Editempresa          from  './modulo_administrador/empresas/EditempresaPage'

import  ListadoClientes      from  './modulo_administrador/clientes/ListadoClientesPage'
import  Registrarcliente     from  './modulo_administrador/clientes/RegistrarclientePage'
import  Editecliente         from  './modulo_administrador/clientes/EditeclientePage'


import  Listadoplanes        from  './modulo_administrador/planes_seungs/ListadoplanesPage'
import  Registrarplanes      from  './modulo_administrador/planes_seungs/RegistrarplanesPage'
import  Editplanes           from  './modulo_administrador/planes_seungs/EditplanesPage'

import  ListadoProducto      from  './modulo_administrador/productos/ListadoProductoPage'
import  Registrarproducto    from  './modulo_administrador/productos/RegistrarproductoPage'
import  Editarproducto       from  './modulo_administrador/productos/EditproductoPage'

import  Login                 from  './Cuenta/LoginUsuario'
import  RecuperarC            from   './Cuenta/RecuperarClave'

import  ListadoRepartidores   from  './modulo_administrador/repartidores/ListadorepartidoresPage'
import  RegistrarRepartidores from  './modulo_administrador/repartidores/RegistrarepartidoresPage'
import  Editrepartidores      from  './modulo_administrador/repartidores/EditrepartidoresPage'
import  ListadoVeRepartidores from  './modulo_administrador/repartidores/ListadoVehiculorePage'
import  ActualizarVehiculo    from  './modulo_administrador/repartidores/ActualizarVehiculoPage'



import  Listadousuarios      from  './modulo_administrador/usuarios/ListadousuariosPage'
import  Registrarusuarios    from  './modulo_administrador/usuarios/RegistrarusuariosPage'
import  Editusuarios         from  './modulo_administrador/usuarios/EditusuariosPage'


//import "boxicons";
import  {DataProvider}  from  './context/DataProvider'
import  {UsuarioContextProvider}  from  './context/UsuarioContext'
import  ProtectedRoute  from './IniciarSeccion/ProtectedRoute'
import  Perfiles from './modulo_administrador/Perfiles' 

import  Perfil1            from './modulo_administrador/Perfil1' 
import  FormularioEmpresas from './modulo_administrador/formularioEmpresas'
import  EmpresaItem        from './modulo_administrador/EmpresaItem'



//perfil empresa producto 
import MisProductos         from './modulo_administrador/PerfilEmpresa/productos/MisProductos'
import RegistroProducto     from './modulo_administrador/PerfilEmpresa/productos/RegistroProducto'
import EditarMiProducto     from './modulo_administrador/PerfilEmpresa/productos/EditarMiProducto'

//perfil empresa servicios
import MisServicios               from './modulo_administrador/PerfilEmpresa/servicios/MisServicios'
import RegistroServicio           from './modulo_administrador/PerfilEmpresa/servicios/RegistroServicio'
import EditarMiServicio           from './modulo_administrador/PerfilEmpresa/servicios/EditarMiServicio'

//perfil empresa repartidores
import MisRespartidores           from './modulo_administrador/PerfilEmpresa/repartidores/MisRespartidores'
import Registrarpartidor          from './modulo_administrador/PerfilEmpresa/repartidores/Registrarpartidor'
import  EditarMiRepartidor        from './modulo_administrador/PerfilEmpresa/repartidores/EditarMiRepartidor'


//perfil empresa imagenes productos
import ImagenesProductos         from './modulo_administrador/PerfilEmpresa/imagenes_productos/ImagenesProductos'
import RegistrarProductoImagenes from './modulo_administrador/PerfilEmpresa/imagenes_productos/RegistrarProductoImagenes'
import VerImagenes               from './modulo_administrador/PerfilEmpresa/imagenes_productos/VerImagenes'

//perfil empresa imagenes servicios
import ImagenesServicios          from './modulo_administrador/PerfilEmpresa/imagenes_servicios/ImagenesServicios'
import RegistrarServiciosImagenes from './modulo_administrador/PerfilEmpresa/imagenes_servicios/RegistrarServiciosImagenes'
import VerImagenesServicios       from './modulo_administrador/PerfilEmpresa/imagenes_servicios/VerImagenesServicios'

//perfil empresa reclamo repartidores 
import  ReclamoRepartidores         from './modulo_administrador/PerfilEmpresa/Reclamo_repartidor/ReclamoRepartidores'
import  ResponderReclamoRepartidor  from './modulo_administrador/PerfilEmpresa/Reclamo_repartidor/ResponderReclamoRepartidor'

//perfil empresa reclamo servicios
import ReclamoServicios             from './modulo_administrador/PerfilEmpresa/Reclamo_servicio/ReclamoServicios'

//perfi empresa reclamos productos
import ReclamoProductos           from './modulo_administrador/PerfilEmpresa/Reclamo_Producto/ReclamoProductos'
import ResponderReclamo           from './modulo_administrador/PerfilEmpresa/Reclamo_Producto/ResponderReclamo'

//perfil empresa repartidor empresa
import RepartidoresEmpresa        from './modulo_administrador/PerfilEmpresa/repartidorempresa/RepartidoresEmpresa'
import RegistrarRepartidorEmpresa from './modulo_administrador/PerfilEmpresa/repartidorempresa/RegistrarRepartidorEmpresa'
import EditarRepartidorEmpresa    from './modulo_administrador/PerfilEmpresa/repartidorempresa/EditarRepartidorEmpresa'

//perfil empresa repartidor individual

import RepartiodrIndividual       from './modulo_administrador/PerfilEmpresa/repartidor_individual/RepartiodrIndividual'
import VerRepartidor              from './modulo_administrador/PerfilEmpresa/repartidor_individual/VerRepartidor'
import VerReferencia              from './modulo_administrador/PerfilEmpresa/repartidor_individual/VerReferencia'

//perfil empresa vehicula repartidor
import VehiculoRepartidores       from './modulo_administrador/PerfilEmpresa/vehiculo_repartidor/VehiculoRepartidores'
import RegistroVehiculoRepartidor from './modulo_administrador/PerfilEmpresa/vehiculo_repartidor/RegistroVehiculoRepartidor'
import EditarVehiculoRepartidor   from './modulo_administrador/PerfilEmpresa/vehiculo_repartidor/EditarVehiculoRepartidor'

import  Mprincipal                from './modulo_administrador/Mprincipal'



function App() {
  return (
 <UsuarioContextProvider> 
 <DataProvider>
    <Router>
    
    <Routes>
      <Route path="/"                                          element={<Inicio />} />
      <Route path="/Productos"                                 element={<Productos />} />
      <Route path="/Servicios"                                 element={<Servicios />} />
      <Route path="/Contacto"                                  element={<Contacto />} />
      <Route path="/IniciarSeccion"                            element={<CuentaUsuario />} />
      <Route path="/RegistroCliente"                           element={<RegistroUsuario />} />
	  <Route path="/RegistroEmpresa"                           element={<RegistroEmpresa  />} />
	  <Route path="/RegistroRepartidor"                        element={<RegistrorRepartidor  />} />
      <Route path="/RecuperarClave"                            element={<RecuperarC    />} />
       
	   <Route path="/Moduloadministrador/Inicio"                             
			   element={
				         <ProtectedRoute>
						    <Mprincipal /> 
						  </ProtectedRoute>
			   } />	
	   /*mi perfil empresa*/
	   
	   
	   		<Route path="/Moduloadministrador/Perfil1"                             
			   element={
				         <ProtectedRoute>
						    <Perfil1 /> 
						  </ProtectedRoute>
			   } />	 
	   
	   <Route
                path="/Moduloadministrador"
                element={
                  <ProtectedRoute>
                    <Moduloadministrador />
                  </ProtectedRoute>
                }
              />
	
    	 /*perfil empresa producto*/
		
		<Route path="/Moduloadministrador/PerfilEmpresa/productos/MisProductos"          
		              element={
						         <ProtectedRoute>
						          <MisProductos />
							     </ProtectedRoute>	
							  }/>	  		  
	    
		<Route path="/Moduloadministrador/PerfilEmpresa/productos/RegistroProducto"      
	         element={
				        <ProtectedRoute>
		                  <RegistroProducto />
				         </ProtectedRoute>	
					} />

        <Route path="/Moduloadministrador/PerfilEmpresa/productos/EditarMiProducto/:id"      
	         element={
				        <ProtectedRoute>
		                  <EditarMiProducto />
				         </ProtectedRoute>	
					} />
					
		
		
		/*fin del perfile empresa producto*/
		
		/*perfil empresa servicios*/
		 <Route path="/Modulo_administrador/PerfilEmpresa/servicios/MisServicios/"      
	         element={
				        <ProtectedRoute>
		                  <MisServicios  />
				         </ProtectedRoute>	
					 } 
		/>   		

         <Route path="/Modulo_administrador/PerfilEmpresaservicios/servicios/RegistroServicio/"      
	         element={
				        <ProtectedRoute>
		                  <RegistroServicio  />
				         </ProtectedRoute>	
					 } 
		/> 

         <Route path="/Moduloadministrador/PerfilEmpresa/servicios/EditarMiServicio/:id"      
	         element={
				        <ProtectedRoute>
		                  <EditarMiServicio  />
				         </ProtectedRoute>	
					 } 
		/>   		
  		

		/*fin de mi perfil empresa servicios*/
		
		/* perfil empresa Mis repartidores*/
	  
	 
     <Route 
	     path="/Modulo_administrador/PerfilEmpresa/MisRespartidores/RegistrarRepartidor"                             
		 element={<Registrarpartidor />} 
	  />	

	 <Route 
	     path="/Modulo_administrador/PerfilEmpresa/repartidores/MisRespartidores"                             
		 element={
			        <ProtectedRoute>
				      <MisRespartidores />
				     </ProtectedRoute>
				} 
	  />	  		  



       <Route 
	     path="/Modulo_administrador/PerfilEmpresa/repartidores/EditarMiRepartidor/:id"                             
		 element={
			        <ProtectedRoute>
			         <EditarMiRepartidor />
				     </ProtectedRoute>
				 } 
	  />	  
  
	/*fin del perfil empresa repartidor*/


    /*perfil empresa imagenes productos*/
     	 
	 <Route 
	   path="/Moduloadministrador/PerfilEmpresa/imagenes_productos/ImagenesProductos"    
	   element={
		          <ProtectedRoute>
				   <ImagenesProductos />
			      </ProtectedRoute>
			   } 
	 />	 

      <Route 
	   path="/Moduloadministrador/PerfilEmpresa/imagenes_productos/RegistrarProductoImagenes"    
	   element={
		          <ProtectedRoute>
				   <RegistrarProductoImagenes />
			      </ProtectedRoute>
			   } 
	 />	 	 

      <Route 
	   path="/Moduloadministrador/PerfilEmpresa/imagenes_productos/VerImagenes"    
	   element={
		          <ProtectedRoute>
				   <VerImagenes />
			      </ProtectedRoute>
			   } 
	 />	 

	/*fin del per ver imagenes  productos*/    
	
	/*perfil empresa imagenes servicios*/
     	 
	 <Route 
	   path="/Moduloadministrador/PerfilEmpresa/imagenes_servicios/ImagenesServicios"    
	   element={
		          <ProtectedRoute>
				   <ImagenesServicios />
			      </ProtectedRoute>
			   } 
	 />	 

      <Route 
	   path="/Moduloadministrador/PerfilEmpresa/imagenes_servicios/RegistrarServiciosImagenes"    
	   element={
		          <ProtectedRoute>
				   <RegistrarProductoImagenes />
			      </ProtectedRoute>
			   } 
	 />	 	 

      <Route 
	   path="/Moduloadministrador/PerfilEmpresa/imagenes_servicios/VerImagenes"    
	   element={
		          <ProtectedRoute>
				   <VerImagenes />
			      </ProtectedRoute>
			   } 
	 />	 

	/*fin del per ver imagenes  servicios*/  
		
	//perfi empresa reclamo reapartidores	
	
      <Route 
	   path="/Moduloadministrador/PerfilEmpresa/Reclamo_repartidor/ReclamoRepartidores"    
	   element={
		          <ProtectedRoute>
				   <ReclamoRepartidores />
			      </ProtectedRoute>
			   } 
	 />	 	
		
	      <Route 
	   path="/Moduloadministrador/PerfilEmpresa/Reclamo_repartidor/ResponderReclamoRepartidor"    
	   element={
		          <ProtectedRoute>
				   <ResponderReclamoRepartidor />
			      </ProtectedRoute>
			   } 
	 />	 	
		
			
     		
 		  
	    <Route path="/Moduloadministrador/FormularioEmpresas"                  element={<FormularioEmpresas />} />	  		  
	    <Route path="/Moduloadministrador/EmpresaItem"                         element={<EmpresaItem />} />
	    
	
		
		
		
		
	    
		<Route path="/Moduloadministrador/PerfilEmpresa/RegistrarProductoImagenes/:id"
		
		 element={
				        <ProtectedRoute>
		                  <RegistrarProductoImagenes />
				         </ProtectedRoute>	
					}
					
		/>
		
		<Route path="/Moduloadministrador/PerfilEmpresa/VerImagenes/:id"
		
		 element={
				        <ProtectedRoute>
		                  <VerImagenes/>
				         </ProtectedRoute>	
					}
					
		/>
		
		<Route path="/Moduloadministrador/PerfilEmpresa/ReclamoProductos"
		
		 element={
				        <ProtectedRoute>
		                  <ReclamoProductos/>
				         </ProtectedRoute>	
					}
					
		/>
		
		<Route path="/Moduloadministrador/PerfilEmpresa/ResponderReclamo/:id"
		
		 element={
				        <ProtectedRoute>
		                  <ResponderReclamo/>
				         </ProtectedRoute>	
					}
					
		/>
		 
		
		
		//perfil empresa servicios
           <Route path="/Moduloadministrador/PerfilEmpresa/ImagenesServicios"      
	         element={
				        <ProtectedRoute>
		                  <ImagenesServicios />
				         </ProtectedRoute>	
					} />		
					
		   
		   <Route path="/Moduloadministrador/PerfilEmpresa/VerImagenesServicios/:id"      
	         element={
				        <ProtectedRoute>
		                  <VerImagenesServicios />
				         </ProtectedRoute>	
					} />				
	
             <Route path="/Moduloadministrador/PerfilEmpresa/RegistrarServiciosImagenes/:id"      
	         element={
				        <ProtectedRoute>
		                  <RegistrarServiciosImagenes />
				         </ProtectedRoute>	
					} />				
						
		     <Route path="/Moduloadministrador/PerfilEmpresa/ReclamoServicios"      
	         element={
				        <ProtectedRoute>
		                  <ReclamoServicios />
				         </ProtectedRoute>	
					} />				
				
		//perfil empresa repartidores			
        
	    <Route path="/Moduloadministrador/PerfilEmpresa/RepartidoresEmpresa"      
		   element={
			        <ProtectedRoute>
					  <RepartidoresEmpresa />
				    </ProtectedRoute> 
				   } 
		/>

        <Route path="/Moduloadministrador/PerfilEmpresa/RegistrarRepartidorEmpresa"      
		   element={
			        <ProtectedRoute>
					  <RegistrarRepartidorEmpresa />
				    </ProtectedRoute> 
				   } 
		/>
		
		 <Route path="/Moduloadministrador/PerfilEmpresa/EditarRepartidorEmpresa/:id"      
		   element={
			        <ProtectedRoute>
					  <EditarRepartidorEmpresa />
				    </ProtectedRoute> 
				   } 
		/>

      //fin del empresa repartidores
	  
	  //perfil empresa reclamo repartidores
	  <Route path="/Modulo_administrador/PerfilEmpresa/Reclamo_repartidor/ReclamoRepartidores/"      
	         element={
				        <ProtectedRoute>
		                  <ReclamoRepartidores  />
				         </ProtectedRoute>	
					 } 
		/>

       <Route path="/Modulo_administrador/PerfilEmpresa/RepartiodoresIndividuales/"      
	         element={
				        <ProtectedRoute>
		                  <RepartiodrIndividual  />
				         </ProtectedRoute>	
					 } 
		/>

	  
		
		
		<Route path="/Modulo_administrador/PerfilEmpresa/VehiculoRepartidores/"      
	         element={
				        <ProtectedRoute>
		                  <VehiculoRepartidores  />
				         </ProtectedRoute>	
					 } 
		/>

        	
		<Route path="/Modulo_administrador/PerfilEmpresa/RegistroVehiculoRepartidor/:id"      
	         element={
				        <ProtectedRoute>
		                  <RegistroVehiculoRepartidor  />
				         </ProtectedRoute>	
					 } 
		/>

<Route path="/Modulo_administrador/PerfilEmpresa/RegistroVehiculoRepartidor/:id"      
	         element={
				        <ProtectedRoute>
		                  <RegistroVehiculoRepartidor  />
				         </ProtectedRoute>	
					 } 
		/><Route path="/Modulo_administrador/PerfilEmpresa/RegistroVehiculoRepartidor/:id"      
	         element={
				        <ProtectedRoute>
		                  <RegistroVehiculoRepartidor  />
				         </ProtectedRoute>	
					 } 
		/>
        
		<Route path="/Modulo_administrador/PerfilEmpresa/EditarVehiculoRepartidor/:id"      
	         element={
				        <ProtectedRoute>
		                  <EditarVehiculoRepartidor  />
				         </ProtectedRoute>	
					 } 
		/>
		
			
	
        	<Route path="/Modulo_administrador/PerfilEmpresa/VerRepartidor/:id"      
	         element={
				        <ProtectedRoute>
		                  <VerRepartidor  />
				         </ProtectedRoute>	
					 } 
		/>   

        
        <Route path="/Modulo_administrador/PerfilEmpresa/VerReferencia/:id"      
	         element={
				        <ProtectedRoute>
		                  <VerReferencia  />
				         </ProtectedRoute>	
					 } 
		/>   		

       
	
	  <Route path="/Moduloadministrador/ListadoCategoria"      element={<ListadoCategoria />} />
	  <Route path="/Moduloadministrador/Registrarcategoria"    element={<Registrarcategoria />} />
	  <Route path="/Moduloadministrador/Editcategoria/:id"     element={<Editcategoria />} />
	  <Route path="/Moduloadministrador/ListadoEmpresas/"      element={<ListadoEmpresas />} />
	  <Route path="/Moduloadministrador/Registrarempresa"      element={<Registrarempresa />} />
	  <Route path="/Moduloadministrador/Editempresa/:id"       element={<Editempresa />} />
	  <Route path="/Moduloadministrador/ListadoClientes/"      element={<ListadoClientes />} />
	  <Route path="/Moduloadministrador/Registrarcliente"      element={<Registrarcliente />} />
	  <Route path="/Moduloadministrador/Editecliente/:id"      element={<Editecliente />} />
	  <Route path="/Moduloadministrador/Listadoplanes/"        element={<Listadoplanes  />} />
	  <Route path="/Moduloadministrador/Registrarplanes"       element={<Registrarplanes />} />
	  <Route path="/Moduloadministrador/Editplanes/:id"        element={<Editplanes />} />
	  <Route path="/Moduloadministrador/ListadoProducto/"      element={<ListadoProducto  />} />
	  <Route path="/Moduloadministrador/Registrarproducto/"    element={<Registrarproducto  />} />
	  <Route path="/Moduloadministrador/Editarproducto/:id"    element={<Editarproducto  />} />
	  <Route path="/Moduloadministrador/ListadoRepartidores"   element={<ListadoRepartidores   />} />
	  <Route path="/Moduloadministrador/RegistrarRepartidores" element={<RegistrarRepartidores   />} />
    <Route path="/Moduloadministrador/Editrepartidores/:id"   element={<Editrepartidores   />} />
	  <Route path="/Moduloadministrador/VehiculosRepartidores" element={<ListadoVeRepartidores  />  }/>
    <Route path="/Moduloadministrador/ActualizarVehiculo/:id" element={<ActualizarVehiculo    />}/>
    <Route path="/Moduloadministrador/Listadousuarios"       element={<Listadousuarios   />} />
	  <Route path="/Moduloadministrador/Registrarusuarios"     element={<Registrarusuarios   />} />
    <Route path="/Moduloadministrador/Editusuarios/:id"       element={<Editusuarios   />} />     
	  <Route path="*"                                          element={<NotFoundPage />} />
    </Routes>
  </Router>
 </DataProvider>
 </UsuarioContextProvider> 
  )
}
const NotFoundPage = () => {
  return (
    <div>
      <h1 style={{ color: "red", fontSize: 100 }}>404</h1>
      <h3>Page Not Found</h3>
      
    </div>
  );
};

export default App;
