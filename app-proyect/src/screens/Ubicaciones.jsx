import { Menu } from "../components/commons/Main.jsx";
import {Navbar} from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer.jsx";
import { Title } from "../components/index.js";
import DataTable from 'react-data-table-component';
import QRCode from "react-qr-code";


const columnas=[
  {
    name:'Identificador',
    selector: row=> row.matricula
    },
    {
        name:'Ubicacion',
        selector: row=> row.nombre
    },

    {
        name:'Opciones',
        selector: row=> row.action,
        cell:(props)=>(
          <div>
          <button className="btn btn-info btn-sm" title="Editar" style={{ marginRight: '5px' }}>
            <i className="fas fa-pen"></i>
          </button>
          <button className="btn btn-danger btn-sm" title="Eliminar" style={{ marginRight: '5px' }}>
            <i className="fas fa-trash"></i>
          </button>
        </div>        ),
        ignoreRowClick:true,
        allowOverflow:true,
        button:true
    }       
];
const data = [
  {
    id:1,
    matricula:"1234",
    nombre:"Mesa",
    cell:(props)=>(
      <button className="btn btn-info btn-sm" title="Editar Ubicacion">
        <i className="fas fa-pen"></i>
      </button>
    )

},
{
    id:2,
    matricula:"4321",
    nombre:"Banco de herreria",
    cell:(props)=>(
      <button className="btn btn-info btn-sm" title="Editar Ubicacion">
        <i className="fas fa-pen"></i>
      </button>    )

}
  
]


const Ubicaciones = ()=>{
    return(
        <>
        <Navbar/>
        <Menu nombre="InventariosSys" usuario="Ivancito"/>

        

  <div className="content-wrapper" >
<Title title="Ubicaciones" breadcrums={["Ubicaiones","Menu"]}/>
<section className="content">

        <div className="row">
              <div className="col-4"> 
                <div className="card-danger"> 
                  <div className="card-header"><h4 className="card-title">Agregar Ubicacion</h4>
                  </div>

                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label>Nombre de la ubicacion</label>
                        <input className="form-control" placeholder="NX02145" />
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
              <h4 className="modal-title">Default Modal</h4>
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

export default Ubicaciones;