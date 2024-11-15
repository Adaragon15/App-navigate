 # Proyecto en React integrando un template que permita el desarrollo de una aplicación web para la gestión de inventarios
 
# Aplicaion en React "Inventarios en Qr"

* Ejecucion de Proyecto

  $ npm create vite@latest
 - react
 - javascript
   

* Librería para Generar los códigos Qr con los siguientes Datos(id_Mobiliario, id_Personas, Ubicación)

npm i qrcode.react

* Librería para la Navegación entre pantallas "React Router"

npm install react-router-dom

```
/inventary-web
├── /public
├── /node_modules
├── /src
│   ├── /assets    
│   ├── /components
│   │   ├── /commons
│   │   │   ├── Footer.jsx
│   │   │   ├── AsideBar.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── BreadCumbs.js
│   │   ├── /datatable
│   │   │   ├── Datatable.jsx
│   │   ├── /echarts
│   │   │   ├── BarsCharts.jsx
│   │   │   ├── LineCharts.jsx
│   │   │   ├── PieCharts.jsx
│   │   ├── index.js
│   ├── /hooks
│   │   ├── useFetch.js
│   ├── /routers
│   │   ├── Routes.jsx
│   ├── /screens    #carpeta de pantallas principales (features)
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md
```