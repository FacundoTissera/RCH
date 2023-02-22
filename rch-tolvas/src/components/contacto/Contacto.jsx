import React from 'react';
import fotoContacto from '../../assets/img/logos/foto-contacto.png'

export default function Contacto() {
  return (
    <div id='contacto'>

        <img src={fotoContacto} alt="" className='foto-contacto' />

            {/* formulario de contacto via mail */}
            <div className='contenedor-contacto'>
                <div>
                    <h2>CONTACTO</h2>
                    <p>Si desea contactarse con nosotros, por favor complete el siguiente formulario y nos pondremos en contacto a la brevedad.</p>
                </div>
                <form action="https://formsubmit.co/facundotisserasorribas@gmail.com" method="POST">
                    
                    <label htmlFor="Nombre"> </label>
                    <input type="text" name="Nombre" id="Nombre" placeholder="Ingresa tu nombre y apellido" />

                    <label htmlFor="Telefono"> </label>
                    <input type="text" name="Telefono" id="Telefono" placeholder="Ingresa tu telefono" />

                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email" placeholder="Ingresa tu email" />

                    <label htmlFor="Consulta"></label>
                    <textarea name="Consulta" id="Consulta" cols="30" rows="10" placeholder="Ingresa tu consulta"></textarea>

                    <input className='boton-mail' type="submit" value="Enviar" />

                    <input type="hidden" name='_next' value='hhtp://localhost:3000' />
                    <input type="hidden" name='_captcha' value='false' />

                </form>
            </div>
    </div>
  )  
}
