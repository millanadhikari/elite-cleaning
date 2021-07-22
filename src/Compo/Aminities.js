import React from 'react'
import Aminity from './Aminity'



const controls=[
    {label:'Laundry', type: 'laundry'},
    {label: 'Garage', type: 'garage'},
    {label: 'Balcony', type: 'balcony'}
]

function Aminities(props) {
    return (
        <div className="aminities">
              <h2 style={{color:'var(--button)'}}>Aminities</h2>
            
            <div>
            {controls.map(ctrl=>(
                    <Aminity key={ctrl.label} label={ctrl.label}
                     added={() => props.ingredientAdded(ctrl.type)}
                     removed={() => props.ingredientRemoved(ctrl.type)} 
                     disabled={props.disabled[ctrl.type]}
                     counted={props.totalCount[ctrl.type]}
                     
                     />)
                )}
            </div>
            
        </div>
    )
}

export default Aminities
