import React from 'react'

import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logoBlanco from '../../assets/img/logos/logoBlancoVertical.png'


function Footer() {
  return (

        <div className='menu-footer'>
            <img src={logoBlanco} alt="" />

            <div className='nav-footer'>

                <ul>
                    <h4>Home</h4>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#ubicacion">Ubicación</a></li>
                    <li><a href="#fotos">Fotos</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>

                </div>
                <div className='contactos-footer'>

                    <ul>
                        <h4>Telefonos de contacto</h4>
                        <li><FaPhoneAlt className='icono-redes' />  <a href="tel: +5493468566009">+54 9 3468566009</a></li>
                        <li><FaPhoneAlt className='icono-redes' />  <a href="tel: +5493468566009">+54 9 3468566009</a></li>
                        <li><FaWhatsapp className='icono-redes' />  <a href="https://api.whatsapp.com/send?phone=+543468566009&text=¡Hola%20!%20Tengo%20la%20siguiente%20consulta:">+54 9 3468566009</a></li>
                        
                        <li>
                        <FaMapMarkerAlt className='icono-redes' /><a href="https://www.google.com/maps/place/RCH+carrocerias/@-33.3150668,-62.0433708,17z/data=!3m1!4b1!4m5!3m4!1s0x95c855137d31bb59:0x18e1e0a5a2620e28!8m2!3d-33.3150713!4d-62.0411821"> Ruta 93, Chañar Ladeado, Santa Fe,   Argentina </a>
                        </li>
                    </ul>

                </div>

                <div className='redes-footer'>
                    <ul>
                        <h4>Redes sociales</h4>
                        <li><FaFacebookF className='icono-redes' /><a href="#">Facebook</a></li>
                        <li><FaInstagram className='icono-redes' /><a href="#">Instagram</a></li>
                    </ul>
                </div>
        </div>

  )
}

export default Footer;
