import React from 'react'

function Aminity(props) {
    return (
        <div className="aminity">
             <div className="count">{props.counted}</div>
            <div className="Label">{props.label}</div>
            <div className="more_less_buttn">
                <button className="Less" onClick={props.removed} disabled={props.disabled}>-</button>
                <button className="More" onClick={props.added}>+</button>

            </div>
            
        </div>
    )
}

export default Aminity
