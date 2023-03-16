import  Header          from  '../header/Header'
import  Slyder          from  '../slyder/Slyder'
import  ListadoProducto from  './ListadoProducto'
import  Footer          from  '../Piepagina/Footer'
import  {DataProvider}  from  '../context/DataProvider'
import  Carrito         from  '../Carrito/Carrito'
const Productos = () => {
  return (
  
    <div> 
	 <Header/>
      <Slyder/> 
	  <Carrito/>
	  <ListadoProducto/>
      <Footer/>
    </div>
 
  )
}

export default Productos