import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./logoCompleto.png" alt="Logo Terpel" width={100} />

            <div className="flexCenter h-menu">
                <a href="">Productos</a>
                <a href="">Quienes somos</a>
                <a href="">Contactanos</a>
                <a href="">Encuentranos</a>

                <button className='button'>
                    <a href="">Contacto</a>

                </button>
                
            </div>
            <div className='menu-icon'>
              <BiMenuAltRight size={30}/>

            </div>



        </div>
    </section>





  )
}

export default Header