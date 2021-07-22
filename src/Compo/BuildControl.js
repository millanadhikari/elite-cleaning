import React from 'react'
import './BuildControl.css'

function Buildcontrol(props) {
    return (
        <div>
             <div className="count">{props.counted}</div>
            <div className="Label">{props.label}</div>
            <div className="more_less_buttn">
                <button className="Less" onClick={props.removed} disabled={props.disabled}>-</button>
                <button className="More" onClick={props.added}>+</button>

            </div>
        </div>
    )
}

export default Buildcontrol
