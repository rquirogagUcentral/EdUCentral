import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Cabecera from './componentes/Cabecera';
import Formulario from './componentes/Formulario';


class App extends Component {

  state = {
    termino : ''
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url=`https://pixabay.com/api/?key=16509570-3787c8f95f1bc69151a150209&q=${termino}`;
    console.log(url);

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => console.log(resultado.hits))
  }

  datosBusqueda = (termino) => {
    console.log(termino);
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="App">
        <Cabecera />
        
        <div className="app container">
          
          <div className="jumbotron">
            <p className="lead text-center">Cursos Ucentral</p>
            <Buscador 
              datosBusqueda={this.datosBusqueda}
            />
          </div>
          {this.state.termino}
        </div>
      </div>
    );
  }
}

export default App;
