import React from 'react'

import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";


function NavBar() {
    return (
        <div className='nav-container'>
            <div className='nav-ubicacion'>
                <p> <FaMapMarkerAlt /> <span> <a href="https://www.google.com/maps/place/RCH+carrocerias/@-33.3150668,-62.0433708,17z/data=!3m1!4b1!4m5!3m4!1s0x95c855137d31bb59:0x18e1e0a5a2620e28!8m2!3d-33.3150713!4d-62.0411821"> Ruta 93, Chañar Ladeado, Santa Fe,   Argentina </a></span> </p>
            </div>
            <div className='nav-horarios'>
                <p> <FaClock /> Horarios: 08:00 a 18:00 </p>
            </div>
            <div className='nav-telefono'>
                <p> <FaPhoneAlt />  <span> <a href="tel: +5493468566009">+54 9 3468566009</a></span></p>
            </div>
        </div>
    )
}

export default NavBar;