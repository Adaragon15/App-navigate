import { Menu } from "../components/commons/Main.jsx";
import {Navbar} from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer.jsx";
import { DTable, Title } from "../components/index.js";


const Personas = ()=>{
    return(
        <>
        <Navbar/>
        <Menu nombre="InventariosSys" usuario="Ivancito"/>

  <div className="content-wrapper" >
<Title title="Personas" breadcrums={["Personas","Menu"]}/>
<section className="content">

        <div className="row">
              <div className="col-4"> 
                <div className="card-danger"> 
                  <div className="card-header"><h4 className="card-title">Agregar Personas</h4>
                  </div>

                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Matricula/Identificador/No. de Empleados</label>
                        <input className="form-control" placeholder="NX02145" />
                      </div>

                      <div className="form-group">
                        <label>Nombre</label>
                        <input className="form-control" placeholder="Alfredo" />
                      </div>

                      <div className="form-group">
                        <label>Apellido Paterno</label>
                        <input className="form-control" placeholder="Adame" />
                      </div>

                      <div className="form-group">
                        <label>Apellido Materno</label>
                        <input className="form-control" placeholder="Buenrostro" />
                      </div>

                      <div className="form-group">
                        <label>Telefono</label>
                        <input className="form-control" placeholder="2223458999" />
                      </div>

                      <div className="form-group">
                        <label>Correo Electronico</label>
                        <input className="form-control" placeholder="juanelcastor@gmail.com" />
                      </div>


                    </form>
                  </div>
                  <div className="card-footer"><button className="btn btn-secondary">Cancelar</button><button className="btn btn-lg float-right btn-primary">Aceptar</button></div>
                    </div>
              </div> 

              <div className="col-8">
                  <div className="card card-primary">
                    <div className="card-header">
                        <h4 className="card-title">Personas Registradas</h4>
                    </div>
                  <div className="card-body">
                    <DTable />
                 </div>
                 <div className="card-footer"><button className="btn btn-lg float-right btn-success" data-toggle="modal"
                  data-target="#modal-default">+ Agregar Nuevo</button></div>
                </div>

              </div>
        </div>
</section>

  </div>

  <Footer/>
        </>
    )
}

export default Personas;