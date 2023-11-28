import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className='f-wrapper'>
      <div className='paddings innerWidth flexCenter f-container'>

        {/*izquird*/}
        <div className='flexColStart f-izquierdo'>
          <img src="./logoCompleto.png" alt="" width={120} />
          <span className='secondaryText'>
            ¿Necesitas ayuda? <br />
            Manejo de datos personales web <br />
            Términos y condiciones

          </span>

        </div>

        <div className='flexColStart f-derecho'>
          <span className='primaryText'>Información</span>
          <span className='secondaryText'>Oficina Coorporativa <br />Carrera 7 No. 75 - 51 <br />
             Bogotá - Colombia.</span>
             <div className='flexCenter f-menu'>
              <span>Servicios</span>
              <span>Trabaja con nosotros</span>
              <span>Terminos y condiciones</span>
              

             </div>
        </div>

      </div>

    </section>
  )
}

export default Footer