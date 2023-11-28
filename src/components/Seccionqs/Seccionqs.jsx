import React, { useState } from 'react'
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'

import './Seccioqs.css'
import data from '../../utils/accordion';

const Seccionqs = () => {
  return (
    <section className="v-wrapper">
        <div className='paddings innerWidth flexCenter v-container'>
            {/*Lado izquierdo */}
            <div className="l-izquierdo">
                <div className="img-container">
                    <img src="./imgqs.jpg" alt="" />
                </div>

            </div>

             {/*Lado derecho */}

            <div className='flexColStart l-derecho'>
                <span className='yellowText'>Nuestro Valor</span>
                <span className='primaryText'>¿Quiénes somos?</span>
                <span className='secondaryText'>Un equipo formado con confianza, integridad y respeto para entregar <br />
                experiencias memorables a todos nuestros clientes.</span>
               
               <Accordion className='accordion' allowMultipleExpanded={false}
               preExpanded={[0]}
               >
               {
                data.map((item,i)=>{
                    const [className, setClassName]= useState(null)
                    return (
                        <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                            <AccordionItemHeading>
                                <AccordionItemButton className='flexCenter accordionButton'>

                                    <AccordionItemState>
                                        {({expanded}) => 
                                        expanded
                                        ? setClassName("expanded") 
                                        : setClassName ("collapsed")}

                                    </AccordionItemState>

                                    <div className="flexCenter icon">{item.icon}
                                    </div>
                                    <span className="primaryText">
                                        {item.heading}
                      
                                    </span>                  
                                    <div className='flexCenter icon'>
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>

                            <AccordionItemPanel>
                                <p className="secondaryText">
                                    {item.detail}
                                </p>

                            </AccordionItemPanel>


                        </AccordionItem>
                    )
                    
                   
                })

               }
                
                </Accordion> 

            </div>

        </div>

    </section>
  )
}

export default Seccionqs