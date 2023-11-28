import React from 'react'
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Productos.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/acordeon';
const Productos = () => {
  return (
    <section className='r-wrapper'>

        <div className='paddings innerWidth r-container'>

            <div className="r-head flexColStart" >
                <span className='yellowText'>Mas calidad</span>
                <span className='primaryText'>Productos Populares</span>
            </div>
            
            <Swiper {...sliderSettings}>
                {
                   data.map((card,i)=>(
                    <SwiperSlide key={i}>
                        <div className='flexColStart r-card'>
                            <img className='imagen' src={card.image} alt="" />

                            <span className='secondaryText r-price'>
                                <span style={{color:"yellow"}}>$</span>
                                <span>{card.price}</span>
                            </span>
                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.detail}</span>


                        </div>
                    </SwiperSlide>

                   
                   
                    )

                   ) 
                }
            </Swiper>
        </div>

    </section>
  
  )
}

export default Productos