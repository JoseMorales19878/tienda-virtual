import producto1 from '../images/imagesproduct/sidebar-product/producto1.jpg'
import verProducto  from "./VerProducto"
import React, { useContext } from "react";
import { Link }       from "react-router-dom";
import  {DataContext}  from  '../context/DataProvider'

const Item = ({id,nombre,precio,des}) => {
	
const value=useContext(DataContext)
const [menu,setMenu] =value.menu;
const addCarrito=value.addCarrito	

return(
	   
   
			  <div className="col-lg-12 col-xl-6">
                 <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                    <div className="product-img list-img-width">
                        <a href="#">
                         <img src="" alt="" />
                        </a>
                                                
                        <div className="product-action-list-style">
                           <Link to={`/VerProducto/${id}`} className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal">
                              <i className="pe-7s-look"></i>
                           </Link>
                        </div>
                     </div>
                    
					<div className="product-content-list">
                        <div className="product-list-info">
                          <h4><a href="#">Nombre {nombre} </a></h4>
                          <span>$ {precio}</span>
                          <p>
                          {des}
						  </p>
                        </div>
                        
						<div className="product-list-cart-wishlist">
                            <div className="product-list-cart">
                               <button className="btn-hover list-btn-style" onClick={()=>addCarrito(id)}>add to cart</button>
                            </div>
                            <div className="product-list-wishlist">
                              <a className="btn-hover list-btn-wishlist" href="#">
                                <i className="pe-7s-like"></i>
                              </a>
                            </div>
                        </div>
                    </div>
                 </div>
               </div>
              
	
	      ) 
	
	
}

export default Item