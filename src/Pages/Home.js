import React from 'react'
import MainImg from '../Compo/MainImg'
import OurServices from '../Compo/OurServices'
import OurPromise from '../Compo/OurPromise'
import Highlight from '../Compo/highlight'
import { homeHighlightData } from '../Compo/Data'
import Accrodian from '../Compo/Accrodian'

function Home() {
    return (
        <div>
     <MainImg/>
     <>  {homeHighlightData.map(index =>(
                    <Highlight key={index}
                    image={index.image}
                    title={index.title}
                    heading={index.heading}
                    parraA={index.parraA}
                    parraB={index.parraB}/>
                ))}</>
     <OurServices/>
     <OurPromise/>
    
            
        </div>
    )
}

export default Home
