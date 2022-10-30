import React from "react";
import ComponenteAPi from "./componentes/ComponenteApi/ComponenteApi";
import ComponenteAxios from "./componentes/ComponenteAxios/ComponentesAxios";
import Formulario from "./componentes/Formulario/Formulario";
import MiPrimerComponente from "./componentes/MiPrimerComponente/MiPrimerComponente";
import MiPrimerComponenteFunsional from "./componentes/MiPrimerComponenteFunsional/MiPrimerComponenteFunsional";
import PersonCard from "./componentes/PersonCard/PersonCard";
import PersonCardFunsional from "./componentes/PersonCardFunsional/PersonCardFunsional";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import ComponenteApiAxiosPokemon from "./componentes/ComponenteApiAxiosPokemon/ComponenteApiAxiosPokemon";
import ComponenteApiPokemon from "./componentes/ComponenteApiPokemon/ComonenteApiPokemon";



/*
Inicializamos proyecto: npm start
Detener el proyecto: ctrl+c
*/

// AplicacionSegundaPalabra -> este es mi PascalCase
// onClick -> camelCase


/*
Para crear un nuevo proyecto lo haces desde el CMD o el git bash

colocando este codigo => npx create-react-app (Cualquier nombre)

*/

/*  intalar react route dom  => npm install react-router-dom@5.3.0
*/

/*  intalar Axios => npm install axios
*/
class App extends React.Component {


 

  constructor(props) {
    super(props);
    this.state = {
      personas: [
        {
          firstName: "Andres",
          lastName: "Berrio",
          age: 25,
          city: "Medellin"
        },
        {
          firstName: "Felipe",
          lastName: "Zapata",
          age: 30,
          city: "Bogota"
        },
        {
          firstName: "Jorge",
          lastName: "Ladilla",
          age: 28,
          city: "Cali"
        }
        
      ]
    }
  }

  
  render(){
    return (
        <div className="container">

            <h2>Mi primer aplicacion con React</h2>

            <BrowserRouter>

                <Link to="/" className="btn btn-success">Home</Link>
                <Link to="/funcional" className="btn btn-info">Componente Funsional</Link>
                <Link to="/formulario" className="btn btn-primary">Formulario</Link>
                <Link to="/api" className="btn btn-warning">Componente Api</Link>
                <Link to="/apiaxios" className="btn btn-danger">Componente ApiAxios</Link>

                <Switch>
                    <Route path="/" exact render={() => <MiPrimerComponente/>}/>
                    <Route path="/funcional/:texto" exact render={(routeProps) => <MiPrimerComponenteFunsional {...routeProps}/>} />
                    <Route path="/formulario" render={() =>  <Formulario />}/>
                    <Route path="/api" render={() =>  <ComponenteAPi/>}/>
                    <Route path="/apiaxios" render={() => <ComponenteAxios/>}/>
                </Switch>
          
            </BrowserRouter>

          
          
          { /*<PersonCard firstName="Elena" LastName= "De troya" age={38} city="Medellin"/>
          <PersonCard firstName="Juana" LastName= "De troya" age={20} city="Roma"/>
          <PersonCard firstName="Andres" LastName= "De Melena" age={40} city="italia"/>
          <PersonCardFunsional firstName="Carlos" lastName="picasso" age={50} city="colombia" hairColor="green"/>*/
          }

          {

            //this.state.personas.map( persona =>
            //  <PersonCardFunsional firstName={persona.firstName} lastName={persona.lastName} age={persona.age} city={persona.city} />
            //  
            //)

          }

          <ComponenteApiAxiosPokemon/>
          <ComponenteApiPokemon/>

        </div>
    );
  }
}

export default App;

