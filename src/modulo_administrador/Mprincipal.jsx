import { Link} from "react-router-dom";
import Mheader      from './Mheader'
import Maside       from './Maside'
import Mfooter      from './Mfooter'
import Vertical     from './Vertical'


const Mprincipal = () => {

  return (
       <div className="hold-transition sidebar-mini layout-fixed">
			  <div className="wrapper">
				<Mheader/>
				<Maside/>
				<div className="content-wrapper">
				
					<div className="content-header">
					  <div className="container-fluid">
						 <div className="row mb-2">
					<div className="col-sm-6">
					  <h1 className="m-0">Cpanel</h1>
					</div>{/* /.col */}
					<div className="col-sm-6">
					  <ol className="breadcrumb float-sm-right">
						<li className="breadcrumb-item">
						<Link to="/Moduloadministrador">Incio</Link></li>
						<li className="breadcrumb-item active">Cpanel</li>
					  </ol>
					</div>
				  </div>
					  </div>
				   <Vertical/>
			  
					</div> 
							
				</div>
				<Mfooter/>
			  </div>
			  </div>
			  
  );
};

export default Mprincipal;
