import React from 'react'
import './Nav.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

const Nav = () => {
  return (
    <section className='nav-wrapper'>
        <div className='paddings innerWidth flexCenter nav-container'>

            {/*Lado izq */}

            <div className="flexColStart nav-left">
                <div className="nav-title">

                    <div className="red-cicle">

                    </div>
                    <h1>
                    En Terpel <br />
                    Tenemos<br /> 
                    Un propósito 

                    </h1>

                </div>

                <div className="flexColStart nav-des">
                    <span className='secondaryText'>Impulsar y movilizar a las personas,</span>
                    <span className='secondaryText'>A las empresas y al país con la mejor energía.</span>
                </div>

                <div className="flexCenter search-bar">
                    {/*Me hace el iconito de buscador */}
                    <HiLocationMarker color='var(--red)' size={25}/>
                    <input type="text" />
                    <button className='button'>
                        Buscar
                    </button>


                </div>

                <div className="flexCenter stats">
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={600} end={1200} duration={4}/>
                            <span>+</span>

                        </span>
                        <span className='secondaryText'>
                            Estaciones de Servicio

                        </span>

                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={100} end={244} duration={4}/>
                            <span>+</span>

                        </span>
                        <span className='secondaryText'>
                            Gazel

                        </span>

                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp end={120}/>
                            <span>+</span>

                        </span>
                        <span className='secondaryText'>
                            Tiendas Altoque

                        </span>

                    </div>




                </div>


            </div>

            {/*Lado derecho */}

            <div className="flexCenter nav-right">

                <div className="img-container">
                    <img src="./portada.png" alt="" />

                </div>

            </div>

        </div>

    </section>
  )
}

export default Nav