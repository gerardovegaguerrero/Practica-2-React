import React, { Component } from 'react';
import './App.css';
import Body from './componentes/body';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Banner from './componentes/Banner';

class App extends Component 
{
  boton(){alert("hola mundo desde el boton")}
  render()
  {

    const temas=["Tipos de componentes",
"Contenedores",
"Usar mas de un componente",
"Funciones",
"Props",
"Prop-Types",
"DefaultProps"]

  return (
    <div className="App">
     <Banner
     texto1="Desarrollo de Aplicaciones para Dispositivos Móviles"
     />
     <Header/>
     <Banner
     texto1="8/Oct/2021"
     />
     <Body
     temas={temas}
     texto={"practica 1 - unidad 2"}
     mensaje={ ()=>this.boton()}
     
     />
     <Footer
     pie={<p>Copyright © Todos los derechos reservados </p>}
     />
    </div>
  )
  };
}

export default App;
