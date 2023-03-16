import './descargaapp.css'
import imagen_play_storeImg from '../images/imagedescargaapp/imagen_play_store.png'
const Descargaapp = () => {
  return (
    
    <div className="blog-area pt-130 pb-70 desapp-black">
    <div className="container">
       
        <div clasNames="row">
            <div className="col-lg-4 col-md-6">
                <div className=" mb-30 wow fadeInLeft">
                    <div className="blog-img-2">
                       <a href="blog-details.html">
                        </a>
                    </div>
                    <div classsName="blog-wrapper-titulo text-center desapp-letra">
                       Seungs
                        <p style={{color:"#ffffff",fontWeight:"bold"}} align="center">
                           Descarga Nustras Apps
                        </p>
                 
                    </div>
                </div>
            </div>
          
        
               
                <div classsName="col-lg-6 col-md-6">
                    <div classsName="blog-wrapper mb-30 wow fadeInRight">
                        <div classsName="blog-img-2">
                          
                        </div>
                        <div classsName="blog-wrapper-titulo text-center" >
						/*<img src={imagen_play_storeImg} className="img-thumbnail" width="100"/> */
                                
                        </div>
                           
                           
                        </div>
                    </div>

            </div>
          
        </div>
    </div>
  )
}

export default Descargaapp