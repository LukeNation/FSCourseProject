import React from 'react';
import Feature_1 from './img/Feature_1.webp';
import Feature_2 from './img/Feature_2.webp';
import Feature_3 from './img/Feature_3.webp';

const Features = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row" id="Section-1">
            <div className="col-md-6 order-0" id="imgFeatures">
              <img src={Feature_1} className="img-fluid" alt="Responsive image" style={{ width: '700px' }} />
            </div>
            <div className="col-md-6 order-1 TitutloFeature" id="TitutloFeature">
              <h2>Es una herramienta sencilla</h2>
              <p>PANA es intuitiva y flexible. Te permite editar los tableros y las listas con un solo clic.</p>
            </div>
          </div>
          <div className="row colum-2" id="Section-1">
            <div className="col-md-6 order-1" id="imgFeatures">
              <img src={Feature_2} className="img-fluid" alt="Responsive image" style={{ width: '700px' }} />
            </div>
            <div className="col-md-6 order-0 TitutloFeature" id="TitutloFeature">
              <h2>Gestiona equipos con facilidad</h2>
              <p>PANA te permite agregar miembros al tablero y organizar todo en un solo lugar.</p>
            </div>
          </div>
          <div className="row" id="Section-1">
            <div className="col-md-6 order-0" id="imgFeatures">
              <img src={Feature_3} className="img-fluid" alt="Responsive image" style={{ width: '700px' }} />
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