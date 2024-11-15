//react
import React, { useEffect, useRef } from 'react';
//navegacion
import { Link } from 'react-router-dom';
//contexto
import { useTheme } from '../../../context/ContextProvider';

export const AsideBar = () => {
    const {toggleTheme, isDarkMode} = useTheme();

    const asideRef = useRef(null); //referencia que apunta a la barra lateral

    //manejador de clic que se ejecuta cuando se hace clic fuera de la barra lateral
    const handleClickOutside = (event) => {
        // si asideRef apunta al elemento aside y el clic no fue dentro de ese elemento
        if (asideRef.current && !asideRef.current.contains(event.target)) {
            //remueve la clase que mantiene abierto el sidebar
            document.body.classList.remove('sidebar-open');

            // Agrega la clase para colapsar el sidebar
            document.body.classList.add('sidebar-closed');
        }
    };

    //configura el evento al montar el componente y limpiarlo al desmontarlo
    useEffect(() => {
        //añade el evento 'mousedown' que detecta clics fuera del aside
        document.addEventListener('mousedown', handleClickOutside);

        //cleanup: remueve el evento 'mousedown' al desmontar el componente para evitar fugas de memoria
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    return (
        <aside 
            ref={asideRef} 
            className={`main-sidebar ${isDarkMode ? 'sidebar-dark-primary' : 'sidebar-light-primary'} elevation-4`}
            style={{ position: 'fixed', top: 0, bottom: 0, height: '100vh', overflowY: 'auto' }}
        >
        {/* <aside ref={asideRef} className="main-sidebar elevation-4 color-surface color-on-surface"> */}
            {/* Brand Logo */}
            <Link
                to="/"
                className="brand-link color-primary-container color-on-primary-container"
                style={{  fontSize: '1.1rem', fontWeight: 'bold' }}
                aria-label="Home"
            >
                <img
                    src="dist/img/AdminLTELogo.png"
                    alt="AdminLTE Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: '.8' }}
                />
                <span className="brand-text font-weight-light">Stocky's</span>
            </Link>

            {/* Sidebar */}
            < div className="sidebar" role="navigation">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex color-surface">
                    <div className="image">
                        <img 
                            src="dist/img/user2-160x160.jpg" 
                            className="img-circle elevation-2 color-outline" 
                            alt="User Image" 
                        />
                    </div>
                    <div className="info">
                        <Link 
                            to="/Profile" 
                            className="d-block color-on-surface"
                            style={{ fontSize: '1rem', fontWeight: '500' }}
                            aria-label="User Profile"
                        >
                            User
                        </Link>
                    </div>
                </div >

                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul 
                        className="nav nav-pills nav-sidebar flex-column" 
                        data-widget="treeview" 
                        role="menu" 
                        data-accordion="false"
                    >
                        <li className="nav-item menu-open">
                            <Link 
                                to="" 
                                className="nav-link active"
                                style={{ padding: '10px 15px', borderRadius: '5px' }}
                                aria-label="Dashboard"
                            >
                                <i 
                                    className="nav-icon fas fa-tachometer-alt" 
                                    aria-hidden="true"
                                />
                                <p>
                                    Dashboard
                                    <i className="right fas fa-angle-left" />
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <Link to="" className="nav-link color-secondary">
                                        <i className="far fa-circle nav-icon color-on-secondary" />
                                        <p>Dashboard v1</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-link color-secondary">
                                        <i className="far fa-circle nav-icon color-on-secondary" />
                                        <p>Dashboard v2</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="" className="nav-link active color-tertiary">
                                        <i className="far fa-circle nav-icon color-on-tertiary" />
                                        <p>Dashboard v3</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>
                                    Widgets
                                    <span className="right badge badge-danger">New</span>
                                </p>
                            </Link>
                        </li>

                        <li className="nav-header color-tertiary-container color-on-tertiary-container">EXAMPLES</li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                <i className="nav-icon fas fa-calendar-alt" />
                                <p>
                                    Calendar
                                    <span className="badge badge-info right">2</span>
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                <i className="nav-icon far fa-image" />
                                <p>
                                    Gallery
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav >
                {/* /.sidebar-menu */}
            </div >
            {/* /.sidebar */}
        </aside >
    )
}
