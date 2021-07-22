import React from 'react'
import { servicedata } from './Data'
import ServiceCard from './ServiceCard'

function OurServices() {
    return (
        <div >
            <div>  <h3 style={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        color:'var(--button)',
                        padding:'10px 0px'
                        }}>Our Service</h3></div>
           
             {servicedata.map(index =>(
                    <ServiceCard key={index}
                    image={index.img}
                    title={index.title}
                    price={index.price}
                    path={index.path}/>
                ))}
            
        </div>
    )
}

export default OurServices
