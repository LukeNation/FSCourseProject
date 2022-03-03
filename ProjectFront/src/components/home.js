import React from 'react';
import Features from './Features';
import Instructions from './Instructions';


const Home = () => {
    return (
        <div>
            <div id='Encabezado' className='container-fluid'>
                <div className='col-md-5 title'>
                    <div className='divaider'></div>
                    <h1>ORGANIZA TUS PROYECTOS Y TAREAS</h1>
                    <div className='col-md-9'>
                    <p>PANA es una herramienta visual que te ayuda a gestionar cualquier tipo de proyecto. Los tableros y las listas te ayudan a tener las tareas ordenadas y se pueden personalizar según las necesidades del proyecto. Se pueden agregar colaboradores y así trabajar todos juntos en un mismo entorno. Regístrate ahora, es gratis.</p>
                    <button id='botonInicio' type='button' className='btn btn-dark m-2 btn-lg'>Empezar ahora</button>
                    </div>
                </div>
                </div>
            <Features />
            <Instructions />
        
        </div>
    )
}

export default Home;