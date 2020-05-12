import React, {Component} from 'react';

class Cabecera extends Component
{
    render()
    {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Cursos UCentral</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        
                    </ul>
                    
                    

                    <button className="dropdown-toggle btn btn-primary my-0 my-sm-0" date-toggle="dropdown" href="#">Ingreso</button>
                    

                    <a href="#" data-toggle="modal" data-target="#modal">Ingreso </a>
                    
                    <button className="btn btn-secondary my-0 my-sm-0" type="submit">Registro</button>

                    <script src="http://code.jquery.com/jquery-lastest.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
                    
                </div>
            </nav>
        );
    }
}

export default Cabecera;