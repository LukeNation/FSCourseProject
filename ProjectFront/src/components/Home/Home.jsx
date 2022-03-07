import React from 'react';
import Features from '../Home/Features';
import Instructions from '../Home/Instructions';


const Home = () => {
    return (
        <>
            <div id='Encabezado' className='container-fluid'>
                <div className='col-md-8 title'>
                    <h1>ORGANIZA TUS PROYECTOS Y TAREAS</h1>
                    <p>PANA es una herramienta visual que te ayuda a gestionar cualquier tipo de proyecto. Los tableros y las listas te ayudan a tener las tareas ordenadas y se pueden personalizar según las necesidades del proyecto. Se pueden agregar colaboradores y así trabajar todos juntos en un mismo entorno. Regístrate ahora, es gratis.</p>
                    <button id='botonInicio' type='button' className='btn btn-dark'>Empezar ahora</button>
                </div>
                </div>
            <Features />
            <Instructions />
        </>
    )
}

export default Home;