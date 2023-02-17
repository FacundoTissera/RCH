import React from 'react'

import tolvaRoja from '../../assets/img/productos/acoplado-rojo.jpg';
import tolvaVerde from '../../assets/img/productos/acoplado-verde.jpg';

function Productos() {
    return (
        <div id='productos' className='producto-titulo'>
            <h2>NUESTROS PRODUCTOS</h2>
                <p>En RCH Tolvas nos dedicamos a la fabricación de tolvas, silos, cintas transportadoras, estructuras metálicas, etc. para la industria alimenticia, química, farmacéutica, etc.</p>

            <div className='container-productos'>

                <div className='producto-1'>

                    <img src={tolvaRoja} alt="Tolva Roja" className='imagen-producto' />

                    {/* <h4>TOLVAS N° 1</h4> */}
                    <p className='texto-producto'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, laborum expedita. Debitis nobis expedita nemo praesentium odio reiciendis dolores, dolorem a aliquam vero aliquid impedit perferendis alias velit suscipit eius.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, laborum expedita. Debitis nobis expedita nemo praesentium odio reiciendis dolores, dolorem a aliquam vero aliquid impedit perferendis alias velit suscipit eius.
                    </p>

                </div>
                <div className='producto-2'>
                    <p className='texto-producto'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, laborum expedita. Debitis nobis expedita nemo praesentium odio reiciendis dolores, dolorem a aliquam vero aliquid impedit perferendis alias velit suscipit eius.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, laborum expedita. Debitis nobis expedita nemo praesentium odio reiciendis dolores, dolorem a aliquam vero aliquid impedit perferendis alias velit suscipit eius.
                    </p>
                    <img src={tolvaVerde} alt="Tolva Verde" className='imagen-producto' />

                </div>
            </div>    

        </div>
  )
}

export default Productos;
