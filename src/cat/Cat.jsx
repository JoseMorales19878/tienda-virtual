import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './Cat.css'
import cafeImg      from '../images/imgcarusel/cafe.png'
import cajaImg      from '../images/imgcarusel/caja.png'
import discoImg     from '../images/imgcarusel/disco.png'
import hamburgerImg from '../images/imgcarusel/hamburger.png'
import telefonoImg  from '../images/imgcarusel/telefono.png'

const options = {
  items: 1,
  nav: true,
  rewind: true,
  autoplay: true
};



const Cat = () => {
  return (
  
           <div>
             
             <div className="titulo">
               Categoria Seungs
             </div>

          <OwlCarousel options={options} className="fondo-negro-slyder">
           
            <div className="item"><img className="img-fluid" src={cafeImg} alt="The Last of us"/></div>
            <div className="item"><img className="img-fluid" src={cajaImg} alt="The Last of us"/></div>
            <div className="item"><img className="img-fluid" src={discoImg} alt="The Last of us"/></div>
            <div className="item"><img className="img-fluid" src={hamburgerImg} alt="The Last of us"/></div>
            <div className="item"><img className="img-fluid" src={telefonoImg} alt="The Last of us"/></div>
          
          </OwlCarousel>
        </div>
      
      
  )
}

export default Cat