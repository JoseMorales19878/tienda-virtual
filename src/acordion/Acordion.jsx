import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css'
import './acordion.css'

const Acordion = () => {
  return (
<Accordion className="fondo">
 
 <div className="accordion" id="accordionExample">
 
 <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       ¿QUE ES SEUNGS?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	    SEUNGS ES UNA PLATAFORMA. 
        QUE FACILITA LA CONEXION DE UNA EMPRESA CON UN CLIENTE. 
        PERMITIENDO DE ESTA FORMALA VENTA DIRECTA DE UN PRODUCTO,
        SERVICIO DETERMINADO SIN INTERMEDIARIOS Y CON PRODUCTOS 
        MAS ECONOMICOS Y MAS RENTABLES
      </div>
    </div>
  </div>
  
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         AFILIACIÓN A SEUNGS
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	    PERMITE ELEVAR TUS VENTAS AL 100% CON NUESTRA PLATAFORMA. 
        CON LA CUOTA MENOR DE 0% COMICIONES,INTERESES,ETC. 
        SOLO CON UNA CUOTA MINIMA POR EL USO DE NUESTRA PLATAFORMA 
        PERMITIENDO ELEVAR TUS INGRESOS DE ENTREDA. LA CUOTA DE 
        SERVICIO VARIA DEPENDIENDO DE TU EMPRESA, PRODUCTO Y 
        MERCADO
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        EMPRESAS DESTINADAS
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	    PEQUEÑAS,MEDIANAS, GRANDES EMPRESAS, DISTRIBUIDORES, COMPAÑIAS, FABRICAS.
                    Y MUCHO MAS GENERALIZANDO TODO EL MERCADO EN UNA SOLA PLATAFORMA Y BRINDANDO 
                    LA MEJOR SOLUCION POSIBLE PARA SUS CLIENTES Y EMPRESAS.
      </div>
    </div>
  </div>
  
   <div className="accordion-item">
    <h2 className="accordion-header" id="four">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
         PLATAFORMA DE ENTREGAS SEUNGS!!
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="four" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	   TENEMOS LA OPCION DE ENTREGAS SEGURA EN NUESTRA PLATAFORMA. 
                     PARA AQUEYAS EMPRESAS QUE NO TENGAS SISTEMAS DE ENVIOS PERSONALES 
                    100% SEGURO CONFIABLE Y RESPONSABLE PUEDAN IMPLETARLA, DE IGUAL MANERA
                    ES OPCIONAL POR SI LA EMPRESA NO LO DESEA IMPLEMENTAR.
      </div>
    </div>
  </div>
  
   <div className="accordion-item">
    <h2 className="accordion-header" id="five">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFour">
          PAGOS DE PARA LAS EMPRESAS
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse show" aria-labelledby="four" data-bs-parent="#accordionExample">
      <div className="accordion-body">
	   LOS PAGOS LLEGARAN DE FORMA EXACTA DONDE NO SE DESCONTARAN COMICIONES
       ,NI DESCUENTOS EXTRAS ESTA POLITICA. ES DE REGLA ESTRICTA DE SEUNGS 
       DONDE SE LLEGARAN LOS PAGOS TOTALES REALIZADOS MEDIANTE LA PLATAFORMA 
       EL UNICO DESCUENTO SERA LA CUOTA FIJA MENSUAL ACORDADA CON EL PROPIETARIO.
                   
      </div>
    </div>
  </div>
  
  
</div>  

</Accordion>
  
   
  )
}

export default Acordion