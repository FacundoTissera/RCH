import React from 'react';

import rodamientos from './../../assets/img/servicios/ROD.png';
import pintor from './../../assets/img/servicios/PINTOR.png';
import engrace from './../../assets/img/servicios/rodamiento-de-bolitas-de-engrase-56193260.jpg';
import soldador from './../../assets/img/servicios/SOLDADOR.png';

function Service() {
    return (
        <div id='servicios'>
            <div className='container-titulo'>
                <h2>NUESTROS SERVICIOS</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, cum voluptates fugiat ab laborum, magni dolorum consectetur accusantium debitis veniam aliquid</p>
            </div>
            <div className='servicios'>
                <div className='caja-servicios'>
                    <h3>CAMBIO DE RODAMIENTOS</h3>
                        <div className='texto-imagen-servicio'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

                            <img src={rodamientos} alt="RODAMIENTOS" className='img-servicios'  />
                        </div>
                </div>
                <div className='caja-servicios'>
                    <h3>ACONDICIONAMIENTO DE USADOS</h3>
                        <div className='texto-imagen-servicio'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <img src={pintor} alt="" className='img-servicios' />
                        </div>
                </div>
                <div className='caja-servicios'>
                    <h3>SOLDADURAS EN GENERAL</h3>
                        <div className='texto-imagen-servicio'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <img src={soldador} alt="" className='img-servicios' />
                    </div>
                </div>
                <div className='caja-servicios'>
                    <h3>ENGRACE DE TOLVAS</h3>
                        <div className='texto-imagen-servicio'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                            <img src={engrace} alt="" className='img-servicios' />
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Service