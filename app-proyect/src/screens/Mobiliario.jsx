import { Menu } from "../components/commons/Main.jsx";
import {Navbar} from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer.jsx";
import { Title } from "../components/index.js";
import DataTable from 'react-data-table-component';
import QRCode from "react-qr-code";


const columnas = [
  {
    name: 'Identificador',
    selector: row => row.matricula
  },
  {
    name: 'Nombre',
    selector: row => row.nombre
  },
  {
    name: 'Tipo',
    selector: row => row.tipo
  },
  {
    name: 'Ubicacion',
    selector: row => row.ubicacion
  },
  {
    name: 'Opciones',
    cell: (props) => (
      <div>
        <button className="btn btn-info btn-sm" title="Editar" style={{ marginRight: '5px' }}>
          <i className="fas fa-pen"></i>
        </button>
        <button className="btn btn-danger btn-sm" title="Eliminar" style={{ marginRight: '5px' }}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }
];
const data = [
  {
    id:1,
    matricula:"1234",
    nombre:"Mesa",
    tipo:"Mesa de madera",
    ubicacion:"Edificio k4",
},
{
    id:2,
    matricula:"4321",
    nombre:"Banco de herreria",
    tipo:"Fierro",
    ubicacion:"Edificio d5",
}
  
]


const Mobiliario = ()=>{
    return(
        <>
        <Navbar/>
        <Menu nombre="InventariosSys" usuario="Ivancito"/>

        

  <div className="content-wrapper" >
<Title title="Mobiliario" breadcrums={["Mobiliario","Menu"]}/>
<section className="content">

        <div className="row">
              <div className="col-4"> 
                <div className="card-danger"> 
                  <div className="card-header"><h4 className="card-title">Agregar Mobliario</h4>
                  </div>

                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Matricula/Identificador/No. de Empleados</label>
                        <input className="form-control" placeholder="NX02145" />
                      </div>

                      <div className="form-group">
                        <label>Nombre del Mobiliario</label>
                        <input className="form-control" placeholder="Mesa de Crafteo" />
                      </div>

                      <div className="form-group">
                        <label>Tipo del Mobiliario</label>
                        <select className="form-control">
                          <option>Seleccione</option>
                          <option>Muebles</option>
                          <option>Equipo de computo</option>
                          <option>Equipo de laboratorio</option>
                          <option>Articulo de laboratorio</option>
                          <option>Articulo General</option>
                          <option>Otro</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Ubicacion</label>
                        <select className="form-control">
                          <option>Seleccione</option>
                          <option>EDIFICIO D5 211</option>
                          <option>EDIFICIO D5 208</option>
                          <option>EDIFICIO K4 108</option>
                          <option>EDIFICIO K4 112</option>
                          <option>EDIFICIO K4 111</option>
                          <option>Otro</option>
                        </select>
                      </div>


                    </form>
                  </div>
                  <div className="card-footer"><button className="btn btn-secondary">Cancelar</button><button className="btn btn-lg float-right btn-primary" data-toggle="modal"
                  data-target="#modal-default">Aceptar</button></div>
                    </div>
              </div> 

              <div className="col-8">
                  <div className="card card-success">
                    <div className="card-header">
                        <h4 className="card-title">Mobiliario</h4>
                    </div>
                  <div className="card-body">
                  <DataTable columns={columnas} data={data}/>
                  </div>
                  <div className="card-footer"><button className="btn btn-lg float-right btn-success" data-toggle="modal"
                  data-target="#modal-default">+ Agregar Nuevo</button></div>
                </div>

              </div>
        </div>
</section>

  </div>

  <Footer/>


  <div className="modal fade" id="modal-default">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
              <h4 className="modal-title">Codigo QR</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
          </div>
          <div className="modal-body">
            <QRCode value="Este es mi coigo qr"/>
          </div>
          <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>

        </>
    )
}

export default Mobiliario;