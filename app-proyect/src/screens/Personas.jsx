import { Menu } from "../components/commons/Main.jsx";
import {Navbar} from "../components/commons/Navbar";
import { Footer } from "../components/commons/Footer.jsx";
import { Title } from "../components/index.js";

const Personas = ()=>{
    return(
        <>
        <Navbar/>
        <Menu nombre="InventariosSys" usuario="Ivancito"/>

  <div className="content-wrapper" >
<Title title="Personas" breadcrums={["Personas","Menu"]}/>
<section className="content">

</section>

  </div>

  <Footer/>
        </>
    )
}

export default Personas;