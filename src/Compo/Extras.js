import React from 'react'
import Extra from './Extra'



const controls=[
    {label:'Carpet-Steam', type: 'carpet'},
    {label: 'Wall-Wash', type: 'wall'},
    {label: 'Blinds', type: 'blinds'},
    {label: 'External-Windows', type: 'windows'}
]


function Extras(props) {
    return (
        <div>
             <h2 style={{color:'var(--button)'}}>Extras</h2>
            <p>These Extra services might be in your Real-Estate Agent`s Checklist, Please add if there are any:</p>

            {controls.map(ctrl=>(
                    <Extra key={ctrl.label} label={ctrl.label}
                     added={() => props.ingredientAdded(ctrl.type)}
                     removed={() => props.ingredientRemoved(ctrl.type)} 
                     disabled={props.disabled[ctrl.type]}
                     counted={props.totalCount[ctrl.type]}
                     
                     />)
                )}
            
        </div>
    )
}

export default Extras
