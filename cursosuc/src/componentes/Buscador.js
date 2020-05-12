import React, {Component} from 'react';

class Buscador extends Component
{
    busquedaRef = React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault();
        //Se toma el valor del Input y se envía al componente principal
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino)
    }

    render()
    {
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">

                    <div className="form-group cold-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu curso Ej: Cálculo"></input>
                    </div>
                    <div className="form-group cold-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"></input>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;