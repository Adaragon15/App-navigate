import { Menu } from "../components/commons/Main.jsx";
import {Navbar} from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer.jsx";
import { PieCharts, Title } from "../components/index.js";
import DataTable from 'react-data-table-component';
import QRCode from "react-qr-code";
import { BarCharts } from "../components/echarts/BarsCharts.jsx";
import { LineCharts } from "../components/echarts/LineCharts.jsx";


const columnas=[
  {
    name:'Identificador',
    selector: row=> row.matricula
    },
    {
        name:'Empleados',
        selector: row=> row.nombre
    },

    {
        name:'Ubicaion',
        selector: row=> row.tipo
    },        
    {
        name:'tipo',
        selector: row=> row.ubicacion
    },
    {
      name:'fecha',
      selector: row=> row.fecha
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
    </div>       ),
    ignoreRowClick:true,
    allowOverflow:true,
    button:true
}      
]
const data = [
  {
    id:1,
    matricula:"1234",
    nombre:"Mesa",
    tipo:"Mesa de madera",
    ubicacion:"Edificio k4",
    fecha:"21/10/2024",
    cell:(props)=>(
      <button className="btn btn-info btn-sm" title="Editar Info">
        <i className="fas fa-pen"></i>
      </button>
    )

},
{
    id:2,
    matricula:"4321",
    nombre:"Banco de herreria",
    tipo:"Fierro",
    ubicacion:"Edificio d5",
    fecha:"22/11/2024",
    cell:(props)=>(
      <button className="btn btn-info btn-sm" title="Editar Info">
        <i className="fas fa-pen"></i>
      </button>
    )


}
  
]


const Informes = ()=>{
    return(
        <>
        <Navbar/>
        <Menu nombre="InventariosSys" usuario="Ivancito"/>

        

  <div className="content-wrapper" >
<Title title="Informes" breadcrums={["Informes","Menu"]}/>
<section className="content">

        <div className="row">
              <div className="col-4"> 
                <div className="card-danger"> 
                  <div className="card-header"><h4 className="card-title">Agregar Mobliario</h4>
                  </div>

                  <div className="card-body">
                    <form>
                    <div className="form-group">
                        <label>Empleados</label>
                        <select className="form-control">
                          <option>Seleccione</option>
                          <option>-Todos-</option>
                          <option>Juan Lopez</option>
                          <option>Laura Sanchez</option>
                          <option>Otro</option>
                        </select>
                      </div>



                      <div className="form-group">
                        <label>Ubicacion</label>
                        <select className="form-control">
                          <option>Seleccione</option>
                          <option>Todas</option>
                          <option>Administracion</option>
                          <option>Recepcion</option>
                          <option>Otro</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Tipo de articulo:</label>
                        <select className="form-control">
                          <option>Seleccione</option>
                          <option>Todos tipos</option>
                          <option>Muebles</option>
                          <option>Equipos de computo</option>
                          <option>Equipos de Lab</option>
                          <option>Articulo de lab</option>
                          <option>Articulo Gneral</option>
                          <option>Otro</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Fecha</label>
                        <input className="form-control" type="date" />
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
              <div className="col-8">
                 <div className="row">
                    <div className="col-12">
                      <div className="card-primary">
                          <div className="card-header">
                            <h4 className="card-title">Resultados</h4>
                          </div>
                        <div className="card-body">
                          <PieCharts/>
                        </div>
                      </div>
                    </div>
               </div>
             </div>

             <div className="col-8">
                 <div className="row">
                    <div className="col-12">
                      <div className="card-primary">
                          <div className="card-header">
                            <h4 className="card-title">Resultados</h4>
                          </div>
                        <div className="card-body"><BarCharts/></div>
                      </div>
                    </div>
               </div>
             </div>

             <div className="col-8">
                 <div className="row">
                    <div className="col-12">
                      <div className="card-primary">
                          <div className="card-header">
                            <h4 className="card-title">Resultados</h4>
                          </div>
                        <div className="card-body"><LineCharts/></div>
                      </div>
                    </div>
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

export default Informes;