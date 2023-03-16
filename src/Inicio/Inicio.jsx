import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import  Header       from  '../header/Header'
import  Slyder       from  '../slyder/Slyder'
import  Cat          from  '../cat/Cat'
import  Acordion     from  '../acordion/Acordion'
import  Planes       from   '../planes/Planes'
import  Descargaapp  from   '../descargaapp/Descargaapp'
import  Convivencia  from   '../convivevencia/Convivencia'
import  Footer       from   '../Piepagina/Footer'
//<Convivencia/>


const Inicio = () => {
  return (
    <div>
      <Header/>
      <Slyder/>
	  <Cat/>
	  <Acordion />
	  <Planes/>
	  <Convivencia/>
	  <Footer/>
    </div>
  )
}

export default Inicio