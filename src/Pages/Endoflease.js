import React from 'react'
import MainImg from '../Compo/MainImg'
import { homeHighlightData } from '../Compo/Data'
import Highlight from '../Compo/highlight'
import './Endoflease.css'
import OurPromise from '../Compo/OurPromise'
import Accrodian from '../Compo/Accrodian'
import {endofleasefaq} from '../Compo/Data'


function Endoflease() {
    return (
        <div className="endoflease">
            <div style={{backgroundImage:`url(https://www.cleanercarpetcanberra.com.au/wp-content/uploads/2014/10/affordable-bond-cleaners.jpg)`,
                        backgroundSize:'cover',
                        backgroundPosition:'center',
                        height:'300px'}}>


            </div>
            <MainImg/>
            <>  {homeHighlightData.map(index =>(
                    <Highlight key={index}
                    image={index.image}
                    title={index.title}
                    heading={index.heading}
                    parraA={index.parraA}
                    parraB={index.parraB}/>
                ))}
            </>
            <div>
                <h4>What is Included in End of Lease Cleaning ??</h4>
                <div className="kitchen">
                     <div>Kitchen</div>
                    <div style={{backgroundImage:`url(https://assets.thehansindia.com/h-upload/2020/05/29/972833-cleaning.webp)`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                                height:'150px',
                                width:'120px',
                                borderRadius:'4px'}}></div>
                    <div><p style={{padding:'0px 15px'}}>Splashback – Wiped clean
Sinks / Taps  – Cleaned and polished
Cooktop, Stovetop and Grill – Degreased and Cleaned to remove any built up grime
Oven – Grills, Trays and Door cleaned
Range hood – Cleaned from outside and filter is degreased
Bench tops / drawers / shelving / Cabinets – Cleaned inside and outside
Dishwasher and appliances – Wiped clean from outside. Inside cleaning not included.
bathroom cleaning</p></div>

                </div>

                <div className="kitchen">
                     <div >Living Area</div>
                    <div  style={{backgroundImage:`url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/interior-of-living-room-with-sofa-3d-rendering-royalty-free-image-1584719367.jpg)`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                                height:'150px',
                                width:'120px',
                                borderRadius:'4px'}}></div>
                    <div><p style={{padding:'0px 15px'}}>Doors / Skirting – Doors and handles are wiped clean, while skirting board is dusted
Walls – Minor light marks are spot cleaned off walls. Major Spot cleaning or Complete sugar soap of walls can be done at additional cost. Refer to Extras.
Carpets – Vacuumed. For Steam Cleaning Carpets, please refer to Extras.
Light Switches – Wiped to Remove Stains
Power Points / Light Switches – Wiped clean
Air Vents – Heating and cooling vents are dusted
Interior Windows and Sills  – Wiped clean. For Outside Windows, please refer to Extras.
Mirrors & Cabinets – Cleaned
Hard Floors – Vacuumed and mopped
Cobwebs removed all over inside the house</p></div>

                </div>

                <div className="kitchen">
                     <div>Bedrooms</div>
                    <div style={{backgroundImage:`url(https://zumpermedia.s3.amazonaws.com/blog/wp-content/uploads/2020/06/03095216/move-out-cleaning-cover.jpg)`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                                height:'150px',
                                width:'120px',
                                borderRadius:'4px'}}></div>
                    <div><p></p></div>

                </div>
                <div className="kitchen">
                     <div>Toilets/Bathrooms</div>
                    <div style={{backgroundImage:`url(https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2010/4/15/1/Charalambous-Andreas-Glass-Bathroom.jpg.rend.hgtvcom.1280.960.suffix/1400952984730.jpeg)`,
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                                height:'150px',
                                width:'120px',
                                borderRadius:'4px'}}></div>
                    <div><p style={{padding:'0px 15px'}}>Basins / Taps / Plugs – Vanity / Plug Holes – Wiped, cleaned and polished
Shelves / Cupboards / Draws – Wiped and Cleaned with Cloth
Towel Rails – Dusted and Wiped
Shower – Shower screens washed and cleaned then sills and tiles scrubbed and cleaned
Bath – Washed and plug holes cleaned
Toilet – Toilet bowl and seat disinfected and thoroughly cleaned inside and outside
</p></div>

                </div>
                
            </div>
            <OurPromise/>
            <>
            <h3>Frequently Asked Questions</h3>
            {endofleasefaq.map(index=>(
                <Accrodian key={index}
                question={index.question}
                answer={index.answer}/>
            ))}
            </>

        </div>

    )
}

export default Endoflease
