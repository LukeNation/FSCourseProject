import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <div id='Encabezado'>
                <div className='col-md-6 title'>
                    <h1>ORGANIZA TUS PROYECTOS Y TAREAS</h1>
                    <p>PANA es una herramienta visual que te ayuda a gestionar cualquier tipo de proyecto. Los tableros y las listas te ayudan a tener las tareas ordenadas y se pueden personalizar según las necesidades del proyecto. Regístrate ahora, es gratis.</p>
                    <Link to='/Register'><button id='botonInicio' type='button' className='btn btn-dark'>Empezar ahora</button></Link>
                </div>
            </div>
        </>
    )
}

export default Header;