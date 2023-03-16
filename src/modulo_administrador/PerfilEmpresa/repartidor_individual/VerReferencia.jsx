import { useEffect, useState }    from "react"
import { Link, useParams,useNavigate } from "react-router-dom"
import { getDocs,doc,collection } from "firebase/firestore"
import {app,db} from '../../../firebaseConfig/conexion_firebase'
import DataTable from 'react-data-table-component'
import Mheader     from '../../Mheader'
import Maside      from '../../Maside'
import Mfooter     from '../../Mfooter'
const VerReferencia=()=>{
	
///1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [empre,setEmpresas ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])
  let asi="asignado"
//2. referencia a la bd
  const  empresaCollection=collection(db,"repartidor")
//3. mostrar todos los documentos
  const getEmpresas=async ()   => {
  const data=await getDocs(empresaCollection)
   //console.log(data.docs)
   setEmpresas(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria

  const columns= [

  
  
  
  {
	name:"Dni repartidor ",
	selector:(row)=>row.dni_repartidor,
	sortable:true
	
  },
  
   {
	name:"Foto",
	selector:(row)=><img src={row.url_imagen_r} width="50" height="50"/>
  },
  
  {
	name:"Nombre",
	selector:(row)=>row.nombre_repartidor
  },
  
  {
	name:"Apelldio",
	selector:(row)=>row.apelldio_repartidor
  },
  
  {
	name:"Cliente",
	selector:(row)=>row.apelldio_repartidor
  },
   
   {
	name:"Foto Cliente",
	selector:(row)=><img src={row.url_imagen_r} width="50" height="50"/>
  },
  {
	name:"Observaciones",
	selector:(row)=>row.apelldio_repartidor
  },
 
  
  ]
  //6 - usamos useEffect
  useEffect( () => {
    getEmpresas()
    // eslint-disable-next-line
  }, [] )
  
    useEffect( () => {
    const result=empre.filter((country)=>{
	  return country.nombre_empresa.toLowerCase().match(search.toLowerCase())
	})
	setfiltereCountries(result)
    // eslint-disable-next-line
  }, [search] )

	return(
	
         <>
  <div className="hold-transition sidebar-mini layout-fixed">
  <div className="wrapper">
  <Mheader />
  <Maside />
  <div className="content-wrapper">
	  <section className="content-header">
		  <div className="container-fluid">
			<div className="row mb-2">
			  <div className="col-sm-6">
				<h1>Modulo Repartidor Individual</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				     <li className="breadcrumb-item">
					   <Link to="/Moduloadministrador">Inicio</Link>
					 </li>
				  <li className="breadcrumb-item active"> Listado  Repartidores Individuales</li>
				</ol>
			  </div>
			</div>
		  </div>
		</section>
				           <DataTable 
				            columns={columns} 
				            data={filtereCountries} 
				            fixedHeader 
				            pagination
				            fixedHeaderScrollHeight="450px"
				            selecttablesRow
				            selecttablesRowHighlight
						    actions={<Link to="/Modulo_administrador/PerfilEmpresa/RepartiodoresIndividuales/" className='btn btn-secondary mt-2 mb-2'>Regresar</Link>    }
				            highlightOnHover
				            subHeader
				            subHeaderComponent={<input 
				                                 type="text" 
									             placeholder="Buscar Referencia ..." 
									             className="w25 form-control" 
									             value={search}
									              onChange={(e)=>setSearch(e.target.value)}/>
									            }
				/>
		          
		           
		  	
		</div>
		<Mfooter/>
	  </div>
	</div>
	</>
	)     
	
	
}

export default VerReferencia