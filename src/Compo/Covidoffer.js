import React from 'react'

function Covidoffer(props) {
    return (
        <div onClick={props.onClick} style={{backgroundColor:'var(--button)',
                    color:'color',
                    padding:'0px 10px',
                    margin:'8px 0px'}}>
            Covid Relief Offer 11% OFF
        </div>
    )
}

export default Covidoffer
