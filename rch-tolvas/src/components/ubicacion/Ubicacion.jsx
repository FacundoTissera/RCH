import React from 'react';


function Ubicacion() {

    const urlTolvas = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1667.0677284304313!2d-62.041129999999995!3d-33.315274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18e1e0a5a2620e28!2sRCH%20carrocerias!5e0!3m2!1ses!2smx!4v1676904662591!5m2!1ses!2smx";


    return (
        <div id='ubicacion'>
            <h2  className='titulo-ubicacion'>NUESTRA UBICACIÓN</h2>
            <div className="ubicacion">
                <div className="ubicacion-mapa">
                    <iframe src={urlTolvas}  width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="ubicacion-info">
                    <h3 className='ubicacion-info-titulo'>DONDE ESTAMOS</h3>
                    <p className='ubicacion-info-texto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, earum tenetur? Sunt autem unde beatae officiis nisi, quia illo alias enim odio optio blanditiis et ullam consectetur consequuntur! Totam, nemo.</p>
                </div>    

            </div>

                
        </div>
    )
}

export default Ubicacion;
