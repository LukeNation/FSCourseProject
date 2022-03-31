import React, {useState, useEffect} from 'react';
import Navbar2 from '../Navbar2';
import Feature_3 from '../Home/img/Feature_3.webp'; 
import {useNavigate} from 'react-router-dom';


const Logged = () => {

    const [name, setName] = useState ([{
        id: '',
        nombre: ''
    }]);
    const [board, setBoard] = useState ([{
        id:'0',
        title:'Tarea 1'
    }]);

    useEffect(()=> {
    const getName = () => {
        fetch('http://localhost:4000/user/info/:id')
        .then(res => res.json())
        .then(res => setName(res))
    }    
    const getBoard = () => {
        fetch('http://localhost:4000/:id')
        .then(res => res.json())
        .then(res => setBoard(res))
    }
    getName();
    getBoard();
    }, [])

    const navigate = useNavigate();
    
    const nuevoTablero = () => {
        navigate('/board');
    }

    return (
        <div>
            <Navbar2 />
            <div className="container-fluid" id="FondoTogged">
                <div className="tituloLogged text-center">
                    <h1 key={name.id}>¡Hola,{name.nombre}!</h1>
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
                                    {board.map(board =>
                                        <tr>
                                            <th key={board.id}>{board.titulo}</th>
                                        </tr>
                                    )}
                                </tbody>
                                <button onClick={nuevoTablero} type='button' className='btn btn-dark btn-lg'>Crear Tablero</button>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logged;

