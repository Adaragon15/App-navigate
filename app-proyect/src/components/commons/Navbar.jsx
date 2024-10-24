import { Link } from "react-router-dom"
export const Navbar =()=>{

    return(
    
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/Mobiliario" className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/Mobiliario" href="../../index3.html" className="nav-link">Home</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/Mobiliario" href="#" className="nav-link">Mobiliario</Link>
      </li>

      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" href="#" className="nav-link">Personas</Link>
      </li>

      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/Ubicaciones" href="#" className="nav-link">Ubicaiones</Link>
      </li>

      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/Generar" href="#" className="nav-link">Generar qr</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">

      <li className="nav-item">
        <Link to="/Mobiliario" className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </Link>
      </li>
      
      <li className="nav-item">
        <Link to="/Mobiliario" className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i class="fas fa-sign-out-alt"/>       </Link>
      </li>

      

    </ul>
  </nav>
    
    
    )
}
