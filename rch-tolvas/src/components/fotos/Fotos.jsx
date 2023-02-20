import React from 'react';
import { Carousel } from "react-bootstrap";

import foto2 from '../../assets/img/productos/carousel-2.jpg';  
import foto3 from '../../assets/img/productos/carousel-3.jpg';  


function Fotos() {
  return (
<div className='fotos-contenedor'>
        <h3 id='fotos' className='fotos-titulo' >FOTOS</h3>
       
    <div className='fotos-carousel row justify-content-center' >
        {/* centrado de bootstrap */}
           <Carousel  className='w-75'>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={foto2}
                alt="First slide"
                />
              <Carousel.Caption>
                {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={foto2}
                alt="Second slide"
                />
              <Carousel.Caption>
                {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                {/* <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={foto3}
                alt="Third slide"
                />
              <Carousel.Caption>
                {/* Aca se le puede poner texto que puede aparecer en las imagenes */}
                {/* <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

    </div>
</div>
  )
}

export default Fotos;
