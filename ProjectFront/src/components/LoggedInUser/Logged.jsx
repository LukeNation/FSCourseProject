import React, {useState, useEffect} from 'react';
import Navbar2 from '../Navbar2';
import Feature_3 from '../Home/img/Feature_3.webp'; 


const Logged = () => {

    const [name, setName] = useState ('Agustin');
    const [table, setTable] = useState (['table 1', 'table 2', 'table 3']);

    useEffect(()=> {
    const getName = () => {
        fetch('http://localhost:4000/User/:id')
        .then(res => res.json())
        .then(res => setName(res))
    }    
    const getTable = () => {
        fetch('http://localhost:4000/tables')
        .then(res => res.json())
        .then(res => setTable(res))
    }
    getName();
    getTable();
    }, [])

    return (
        <div>
            <Navbar2 />
            <div className="container-fluid" id="FondoTogged">
                <div className="tituloLogged text-center">
                    <h1>¡Hola, {name}!</h1>
                    <p>Qué bueno que llegaste. </p>
                    <p>¿Estás listx para crear un nuevo tablero o seguir trabajando en un proyecto anterior?</p>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 img">
                            <img class="img-fluid" src={Feature_3} alt="" style={{width:"600px"}}/>
                        </div>
                        <div className="col-md-5" id="Tableros">
                            <table className="table text-center">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Mis Tableros</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{table[0]}</td>
                                    </tr>
                                    <tr>
                                        <td>{table[1]}</td>
                                    </tr>
                                    <tr>
                                        <td>{table[2]}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logged;

{/* <tbody>
{table.map(
    <tr>
        <th>{table.id}</th>
        <th>{table.nombre}</th>
    </tr>
)}
</tbody> */}