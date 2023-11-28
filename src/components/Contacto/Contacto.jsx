import React from 'react'
import './Contacto.css'
import {MdCall} from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contacto = () => {
  return (
    <section className="c-wrapper">
      <div className='paddings innerWidth flexCenter c-container'>
        {/*lado izquierdo*/}
        <div className="flexColStart c-izquierdo">
          <span className='yellowText'>Nuestro contacto</span>
          <span className='primaryText'>Contactanos</span>
          <span className='secondaryText'>Siempre estamos listos para ayudar brindándole los mejores servicios. <br />Cuenta con nosotros 7x24.</span>
          
          <div className="flexColStart contactoModos">
            {/*primera fila*/}
            <div className='flexStart row'>
              <div className='flexColCenter modo'>
                <div className='flexStart'>
                  <div className="flexCenter icon">
                    <MdCall size = {25}/>
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Llamar</span>
                    <span className='secondaryText'> 01 8000 518 555 </span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  Llama ahora

                </div>
              </div>

              {/*segunda cajita*/}

              <div className='flexColCenter modo'>
                <div className='flexStart'>
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size = {25}/>
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Chat</span>
                    <span className='secondaryText'>+57 312 454 3068</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  Chatea ahora

                </div>
              </div>

            </div>

            {/*Segunda fila */}
            <div className='flexStart row'>
              <div className='flexColCenter modo'>
                <div className='flexStart'>
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill  size = {25}/>
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Videollamada</span>
                    <span className='secondaryText'> +57 320 513 4517 </span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  Videollamada ahora

                </div>
              </div>

              {/*cuarta cajita*/}

              <div className='flexColCenter modo'>
                <div className='flexStart'>
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size = {25}/>
                  </div>
                  <div className='flexColStart detail'>
                    <span className='primaryText'>Mensaje</span>
                    <span className='secondaryText'>+57 312 454 3068</span>
                  </div>
                </div>
                <div className='flexCenter button'>
                  Mensaje ahora

                </div>
              </div>

            </div>


          </div>

        </div>

       {/*lado derecho*/}
      <div className="c-derecho">
        <div className="img-container">
          <img src="./contacto.png" alt="" />
        </div>

      </div>




      </div>
      

    </section>
  )
}

export default Contacto