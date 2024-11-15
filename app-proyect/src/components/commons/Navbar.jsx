//navegacion
import { Link } from "react-router-dom"

//cotexto de tema
import { useTheme } from '../../context/ContextProvider'

//iconos
import SunIcon from '../../assets/svg/clear-day.svg';
import MoonIcon from '../../assets/svg/clear-night.svg';

export const Navbar = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <nav className="main-header navbar navbar-expand shadow color-surface">

      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link d-lg-none d-inline" data-widget="pushmenu" role="button">
            <i className="fas fa-bars color-primary"/>
          </button>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/" className="nav-link color-primary">Inicio</Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link href="/Profile" className="nav-link color-secondary">Perfil</Link>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Messages Dropdown Menu */}
        <li className="nav-item dropdown">
          <button className="nav-link color-tertiary" data-toggle="dropdown">
            <i className="far fa-comments" />
            <span className="badge badge-danger navbar-badge">3</span>
          </button>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right color-surface-variant">
            <button className="dropdown-item color-surface">
              {/* Message Start */}
              <div className="media">
                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                <div className="media-body">
                  <h3 className="dropdown-item-title color-primary">
                    Brad Diesel
                    <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="text-sm color-on-surface">Call me whenever you can...</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </button>
            <div className="dropdown-divider color-outline" />

            <button className="dropdown-item color-surface">
              {/* Message Start */}
              <div className="media">
                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title color-primary">
                    John Pierce
                    <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="text-sm color-on-surface">I got your message bro</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </button>
            <div className="dropdown-divider color-outline" />

            <button className="dropdown-item color-surface">
              {/* Message Start */}
              <div className="media">
                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title color-primary">
                    Nora Silvester
                    <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                  </h3>
                  <p className="text-sm color-on-surface">The subject goes here</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                </div>
              </div>
              {/* Message End */}
            </button>
            <div className="dropdown-divider color-outline" />

            <button className="dropdown-item dropdown-footer color-surface">Ver todos los mensajes</button>
          </div>
        </li>

        {/* Notifications Dropdown Menu */}
        <li className="nav-item dropdown">
          <button className="nav-link" data-toggle="dropdown">
            <i className="far fa-bell color-tertiary" />
            <span className="badge badge-warning navbar-badge">15</span>
          </button>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notificaciones</span>
            <div className="dropdown-divider color-outline" />

            <Link to="" className="dropdown-item color-on-surface">
              <i className="fas fa-envelope mr-2" /> 4 mensajes nuevos
              <span className="float-right text-muted text-sm">3 mins</span>
            </Link>
            <div className="dropdown-divider color-outline" />

            {/* <Link to="" className="dropdown-item color-on-surface">
              <i className="fas fa-users mr-2" /> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </Link>
            <div className="dropdown-divider" /> */}

            <Link to="" className="dropdown-item color-on-surface">
              <i className="fas fa-file mr-2" /> 3 nuevos reportes
              <span className="float-right text-muted text-sm">2 días</span>
            </Link>
            <div className="dropdown-divider color-outline" />
            <Link to="" className="dropdown-item dropdown-footer color-surface">Ver todas las notificaciones</Link>
          </div>
        </li>

        <li className="nav-item">
          <button className="nav-link" data-widget="fullscreen" role="button">
            <i className="fas fa-expand-arrows-alt color-primary" />
          </button>
        </li>
        
        <li className="nav-item">
          <button
            className="nav-link d-flex align-items-center justify-content-center p-0"
            onClick={toggleTheme}
            title="Cambiar tema"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '1px', // Espaciado alrededor del ícono
            }}
          >
            <img
              src={isDarkMode ? SunIcon : MoonIcon}
              width={24}
              height={24}
              alt="Theme Icon"
            />
          </button>
        </li>
      </ul>
    </nav>
  )
}
