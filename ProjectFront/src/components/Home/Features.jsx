import React from 'react';

const Features = () => {
    return (
        <>
        <div className="container-flui">
          <div className="row" id="Section-1">
              <div className="col-md-6 order-0" id="imgFeatures">
                <img src="https://img.freepik.com/vector-gratis/ilustracion-dibujado-mano-concepto-gestion-tiempo_23-2148832121.jpg?w=996" className="img-fluid" alt="Responsive image" style={{width:'700px'}} />
              </div>
              <div className="col-md-6 order-1 TitutloFeature" id="TitutloFeature">
                <h2>Es una herramienta sencilla</h2>
                <p>PANA es intuitiva y flexible. Te permite editar los tableros y las listas con un solo clic.</p>
              </div>
          </div>
          <div className="row" id="Section-1">
              <div className="col-md-6 order-1" id="imgFeatures">
                <img src="https://img.freepik.com/vector-gratis/ilustracion-concepto-equipo_114360-678.jpg?w=996" className="img-fluid" alt="Responsive image" style={{width:'700px'}} />
              </div>
              <div className="col-md-6 order-0 TitutloFeature" id="TitutloFeature">
              <h2>Gestiona equipos con facilidad</h2>
              <p>PANA te permite agregar miembros al tablero y organizar todo en un solo lugar.</p>
              </div>
          </div>
          <div className="row" id="Section-1">
              <div className="col-md-6 order-0" id="imgFeatures">
                <img src="https://img.freepik.com/vector-gratis/concepto-gestion-tiempo-ilustracion-plana_23-2148832034.jpg?w=996" className="img-fluid" alt="Responsive image"style={{width:'700px'}} />
              </div>
              <div className="col-md-6 order-1 TitutloFeature" id="TitutloFeature">
              <h2>Simplifica el trabajo</h2>
              <p>Los tableros y las listas facilitan la visualización de los datos lo que resulta práctico a la hora de trabajar.</p>
              </div>
          </div>
        </div>
        </>     
    );
  }
export default Features;