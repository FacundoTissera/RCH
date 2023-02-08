import React from 'react'
import principal from '../../assets/img/home/fondo.png'

function Nosotros() {
    return (
        <div id='nosotros' className='main-container' >
            <div className='main-titulo'>
                <h1>RCH - CARROCERIAS</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem neque magnam ea quaerat fuga, quos earum eius, aliquam labore quibusdam error eveniet. Eos quasi aliquam, voluptas ullam saepe nisi.</p>
                <button className='button-contacto'> VER MAS  </button>
            </div>
            <div className='main-imagen'>
                <img src={principal} alt="carrocerias- RCH" className='img-principal' />
            </div>
        </div>
        
    )
}
export default Nosotros;