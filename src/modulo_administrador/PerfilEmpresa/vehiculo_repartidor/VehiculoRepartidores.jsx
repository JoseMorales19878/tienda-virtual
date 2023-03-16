import React,{useState,useEffect}from 'react'
import {Link}      from 'react-router-dom'
import {collection,
        getDocs,
		getDoc,
		deleteDoc,
		doc} from 'firebase/firestore'
import {db} from '../../../firebaseConfig/conexion_firebase'
import DataTable from 'react-data-table-component'
import Swal  from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Mheader    from '../../Mheader'
import Maside     from '../../Maside'
import Mfooter    from '../../Mfooter'

const MySwal = withReactContent(Swal)

const VehiculoRepartidores = () => {
  	

  
  //1.configuramos los hooks
  const [search,setSearch ]=useState([])
  const [empresas,setEmpresas ]=useState([])
  const [filtereCountries,setfiltereCountries]=useState([])

 //2. referencia a la bd
  const  categoriaCollection=collection(db,"repartidor")
//3. mostrar todos los documentos
  const getCategorias=async ()   => {
  const data=await getDocs(categoriaCollection)
   //console.log(data.docs)
   setEmpresas(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
   setfiltereCountries(
       data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
   )
     }//fin del getcategoria

//4 - Funcion para eliminar un doc

  
  const columns= [
  
  {
	name:"Repartidor ",
	selector:(row)=>row.nombre_repartidor,
	sortable:true
	
  },
  
  {
	name:"Foto Repartidor",
	selector:(row)=><img src={row.url_imagen} width="100" height="100"/>
  },
  
  {
	name:"Vehiculo",
	selector:(row)=>row.vehiculo
  },
  
  {
	name:"Color Vehiculo",
	selector:(row)=>row.color_vehiculo
  },
  
  {
	name:"Caracteristicas_vehiculo",
	selector:(row)=>row.caracteristicas_vehiculo
  },
  
  
   {
	name:"Foto Vehiculo",
	selector:(row)=><img src={row.foto_vehiculo} width="100" height="100"/>
  },

  {
	name:"Registrar",
	cell:(row)=><Link to={`/Modulo_administrador/PerfilEmpresa/RegistroVehiculoRepartidor/${row.id}`} className="btn btn-light">Registrar</Link>
  },
  {
	name:"Editar",
	cell:(row)=><Link to={`/Modulo_administrador/PerfilEmpresa/EditarVehiculoRepartidor/${row.id}`} className="btn btn-light">Editar</Link>
  }
  ]
//6 - usamos useEffect
  useEffect( () => {
    getCategorias()
    // eslint-disable-next-line
  }, [] )

  useEffect( () => {
    const result=empresas.filter((country)=>{
	  return country.nombre_repartidor.toLowerCase().match(search.toLowerCase())
	})
	setfiltereCountries(result)
    // eslint-disable-next-line
  }, [search] ) 

	
	 return (
	<div className="hold-transition sidebar-mini layout-fixed">
  <div className="wrapper">
  <Mheader />
  <Maside />
  <div className="content-wrapper">
	  <section className="content-header">
		  <div className="container-fluid">
			<div className="row mb-2">
			  <div className="col-sm-6">
				<h1>Modulo Vehículo Repartidores</h1>
			  </div>
			  <div className="col-sm-6">
				<ol className="breadcrumb float-sm-right">
				  <li className="breadcrumb-item">
				   <Link to="/Moduloadministrador">Inicio</Link>
				  </li>
				  <li className="breadcrumb-item active"> 
				  Listado  Vehículo Repartidores
				  </li>
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
							highlightOnHover
							subHeader
							subHeaderComponent={<input 
												type="text" 
												placeholder="Buscar Repartidor ..." 
												className="w25 form-control" 
												value={search}
												onChange={(e)=>setSearch(e.target.value)}/>
												}
				          />
				      		
		</div>
		<Mfooter/>
	  </div>
	</div>
  )
  
}

export default VehiculoRepartidores




