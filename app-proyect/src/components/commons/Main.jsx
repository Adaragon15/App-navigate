import React from "react"
import { Link } from "react-router-dom"
import userImg from "../../../public/dist/img/user1-128x128.jpg"
import stockLogo from "../../../public/dist/img/AdminLTELogo.png"

export const Menu=({nombre,usuario})=>{

    return(
        <aside className="main-sidebar sidebar-light-primary elevation-4">
        <a href="../../index3.html" className="brand-link">
          <img src={stockLogo} alt="Logo de la Aplication" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">{nombre}</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={userImg}className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">{usuario}</a>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <a className="nav-link">
                  <i className="nav-icon fas fa-laptop-house" /> 
                  <Link to="/Mobiliario" >Mobiliario</Link>
                </a>

              </li>
              <li className="nav-item">
                <a className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <Link to="/" >Personas</Link>
                </a>
              </li>
              <li className="nav-item">
                <a  className="nav-link">
                  <i className="nav-icon fas fa-map-marker-alt" />   
                  <Link to="/Ubicaciones" >Ubicaciones</Link>
                </a>
              </li>
              <li className="nav-item">
                <a  className="nav-link">
                  <i className="nav-icon fas fa-info" />
                  <Link to="/Informes" >Informes</Link>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link">
                  <i className="nav-icon fas fa-qrcode" />  
                  <Link to="/Generar" >Generar Qr</Link>
                </a>
              </li>




            </ul>
          </nav>
        </div>
      </aside>
    )
    
}
