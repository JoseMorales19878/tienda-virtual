import producto1 from '../images/imagesproduct/sidebar-product/producto1.jpg'
import producto2 from '../images/imagesproduct/sidebar-product/producto2.jpg'
import producto3 from '../images/imagesproduct/sidebar-product/producto3.jpg'
import producto4 from '../images/imagesproduct/sidebar-product/producto4.jpg'


import productof1  from '../images/imagesproduct/fashion-colorful/productof1.jpg'
import productof2 from '../images/imagesproduct/fashion-colorful/productof2.jpg'
import productof3 from '../images/imagesproduct/fashion-colorful/productof3.jpg'
import productof4 from '../images/imagesproduct/fashion-colorful/productof4.jpg'
import productof5 from '../images/imagesproduct/fashion-colorful/productof5.jpg'

const ListadoServicios = () => {
  return (
 <>
   <h1 align="center">Listado Servicios</h1>
	  <div className="shop-page-wrapper shop-page-padding ptb-100">
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3">
                <div className="sidebar mr-50">
                    <div className="sidebar-widget mb-50">
                        <h3 className="sidebar-title">Buscar Servicios</h3>
                        <div className="sidebar-item search-form">
                            <form action="#">
                                <input placeholder="Buscar Servicios..." type="text" />
                                <button><i className="ti-search"></i></button>
                            </form>
                        </div>
                    </div>
                  
                    <div className="sidebar-widget mb-45">
                        <h3 className="sidebar-title">Categorias</h3>
                        <div className="sidebar-item categories">
                            <ul>
                                <li><a href="#">Accessories <span>4</span></a></li>
                                <li><a href="#">Book <span>9</span></a></li>
                                <li><a href="#">Clothing <span>5</span> </a></li>
                                <li><a href="#">Homelife <span>3</span></a></li>
                                <li><a href="#">Kids & Baby <span>4</span></a></li>
                            </ul>
                        </div>
                    </div>
                    
                   
                    <div className="sidebar-widget mb-50">
                        <h3 className="sidebar-title">Servicios Relacionados</h3>
                        <div className="sidebar-item recent-posts">
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#">
										  <img src={producto1} alt="" className="img-fluid"/>
										  </a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#">Flying Drone</a></h4>
                                        <div className="post-item clearfix">
                                            vhvh
                                        </div>
                                        <span> </span>
                                    </div>
                                </div>
                            </div>
                            
                            
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="shop-product-wrapper res-xl">
                    <div className="shop-bar-area">
                        <div className="shop-bar pb-60">
                            <div className="shop-found-selector">
                               
                                
                            </div>
                            <div className="shop-filter-tab">
                                <div className="shop-tab nav" role="tablist">
                                    
                                    <a href="#grid-sidebar4" data-toggle="tab" role="tab" aria-selected="true">
                                        <i className="ti-menu"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                         <div className="shop-product-content tab-content">
                           <div id="grid-sidebar3" className="tab-pane fade active show">
	                         <div className="row">
							  <div className="col-lg-12 col-xl-6 services" id="services">
                 <div className="product-wrapper mb-30 single-product-list product-list-right-pr mb-60">
                    <div className="product-img list-img-width">
                        <div  data-aos="fade-up" data-aos-delay="500">
						  <div className="service-box purple">
                             <h3>Dagger Smart Trousers</h3>							
							 <a href="#">
							    <img src={producto1} alt="" width="100" height="100" />
							 </a>
                             
							  <p>
							     Lorem ipsum dolor sit amet, 
								 mana consectetur adipisicing elit,
								 sed  eiusmod tempor labore.
							    <span>$20</span><br/>
							  </p>
                             <a href="#" className="read-more"><span>Leer mas</span> 
			                    <i className="bi bi-arrow-right"></i>
							 </a>

							
							</div>
						</div>	
                     </div>
                    
                 </div>
               </div>
	
    
							 </div>
                           </div>							 
                         </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div> 
 </>
  )
}

export default ListadoServicios