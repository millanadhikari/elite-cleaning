import React from 'react'
import BuildControl from './BuildControl'

const controls=[
    {label:'Bedrooms', type: 'bedroom'},
    {label: 'BathRooms', type: 'bathroom'},
    {label: 'Others', type: 'other'}
]

function BuildControls(props) {
    return (
        <div>
             <div><h3 style={{color:'var(--button)'}}>Rooms</h3>
                <p>Other Rooms Should include any family, Study or dining rooms if any*</p>
            </div>

                 {controls.map(ctrl=>(
                    <BuildControl key={ctrl.label} label={ctrl.label}
                     added={() => props.ingredientAdded(ctrl.type)}
                     removed={() => props.ingredientRemoved(ctrl.type)} 
                     disabled={props.disabled[ctrl.type]}
                     counted={props.totalCount[ctrl.type]}
                     
                     />)
                )}
            
        </div>
    )
}

export default BuildControls
