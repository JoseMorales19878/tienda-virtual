import producto1 from '../images/imagesproduct/sidebar-product/producto1.jpg'
import React, { useContext } from "react";
import { Link }       from "react-router-dom";
import  {DataContext}  from  '../context/DataProvider'
import './productos.css'

const Productoitem = ({id,imagen,title,price,category,cantidad}) => {
	
const value=useContext(DataContext)
const [menu,setMenu] =value.menu;
const addCarrito=value.addCarrito	

return(
 

        
        <div className="col-lg-12 col-xl-6 services" id="services">
                 <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                    <div className="product-img list-img-width">
                        <div  data-aos="fade-up" data-aos-delay="500">
						  <div className="service-box purple">
                             <h3>{title}</h3>							
							 <a href="#">
							    <img src={imagen} alt="" width="100" height="100" />
							 </a>
                             
							  <p>
							   {category}
							    <span>${price}</span><br/>
							  </p>
                             <a href="#" className="read-more"><span>Leer mas</span> 
			                    <i className="bi bi-arrow-right"></i>
							 </a>

							
							</div>
						</div>	
                     </div>
                    
                 </div>
               </div>
	
    
        

    

   
	
	      ) 
	
	
}

export default Productoitem