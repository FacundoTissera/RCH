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
                <form action="facundotisserasorribas@gmail.com" method='POST'>
                    
                    <label htmlFor="Nombre"> </label>
                    <input type="text" name="Nombre" id="Nombre" placeholder="Ingresa tu nombre y apellido" />

                    <label htmlFor="Telefono"> </label>
                    <input type="text" name="Telefono" id="Telefono" placeholder="Ingresa tu telefono" />

                    <label htmlFor="Mail"></label>
                    <input type="text" name="Mail" id="Mail" placeholder="Ingresa tu mail" />

                    <label htmlFor="Consulta"></label>
                    <textarea name="Consulta" id="Consulta" cols="30" rows="10" placeholder="Ingresa tu consulta"></textarea>

                    <input className='boton-mail' type="submit" value="Enviar" />

                </form>
            </div>
    </div>
  )  
}
