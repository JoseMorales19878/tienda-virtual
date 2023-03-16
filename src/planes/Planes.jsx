import { Link }       from "react-router-dom";
import './planes.css'
import empresaImg        from  '../images/imgesplanes/empresa.jpg'
import pedidosImg        from  '../images/imgesplanes/pedidos.jpg'
import repartidoresImg   from  '../images/imgesplanes/repartidores.jpg' 

const Planes = () => {
  return (
   <div className="blog-area pt-130 pb-70">
    
     <div className="container">
       
        <div className="section-title-furits text-center mb-95">
            <h2>Nuestros Planes</h2>
        </div>

        <div className="row">
            
            <div className="col-lg-4 col-md-6">
                <div className="blog-wrapper mb-30 wow fadeInLeft">
                     <div className="blog-img-2">
                        <a href="blog-details.html">
                            <img src={empresaImg} />
                        </a>
                    </div>
                    <div className="blog-info-wrapper-2 text-center">
                    <div className="blog-meta-2">
                        <ul>
                             <li><a href="#" className="planes-titulo">Registra tu empresa en Seungs</a></li>
                        </ul>
                    </div>
                    <p>
                        REGISTRA TU EMPRESA en seungs

                        La conexión directa con tu cliente, 
                        con 0% de comisiones ni recargos adicionales, 

                        Con todas las herramientas para que faciliten 
                        las ventas y lleves
                        tu empresa a otro nivel
                 </p>
                 <div className="blog-meta-2 btn">
                  <Link to="/RegistroEmpresa" className="planes-boton-btn">Registrar</Link>
                 </div>
                  
            </div>
                    
                </div>  
             </div>    
             
             <div className="col-lg-4 col-md-6">
                        
                <div className="blog-wrapper mb-30 wow fadeInUp">
                    <div className="blog-img-2">
                         <a href="blog-details.html">
                         <img  src={pedidosImg} /></a>
                    </div>
                            
                    <div className="blog-info-wrapper-2 text-center">
                        <div className="blog-meta-2">
                             <ul>
                                  <li>
                                    <a href="#" className="planes-titulo">REGISTRATE Y REALIZA TUS PEDIDOS SEUNGS</a></li>
                             </ul>
                        </div>
                        <p>
                            Sin intermediarios directamente desde la empresa para ti, 
                            con los mejores precios de ventas del mercado, 
                            con ventas y entregas seguras con todos los productos
                            y servicios en seungs
                        </p>
                                <div className="blog-meta-2 btn">
                                 <Link to="/RegistroCliente"  className="planes-boton-btn" >Registrar</Link>
                                </div>
							
							</div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-wrapper mb-30 wow fadeInRight">
                            <div className="blog-img-2">
                                <a href="blog-details.html">
                                    <img  src={repartidoresImg}/></a>
                            </div>
                            <div className="blog-info-wrapper-2 text-center">
                                <div className="blog-meta-2">
                                    <ul>
                                      <li>
									  <a 
							           className="planes-titulo">
									     REGISTRATE Y CONVIERTETE EN REPARTIDOR </a>
										 </li>
                                    </ul>
                                </div>
                                <p>La mejor forma de aprovechar tu tiempo libre, con los mejores pagos del mercado, con horarios y entregas en cualquier tipo de vehiculos que esperas para unirte a seungs</p>
                                <div className="blog-meta-2 btn">
                                   <Link to="/RegistroRepartidor" className="planes-boton-btn">Registrar</Link>
                                </div>
                            </div>
                        </div>
                    </div>

        </div>       

     </div>

    </div>
  )
}

export default Planes