import React from 'react'

function Allbookings(props) {
    return (
        <div style={{display:'flex',
                    flexDirection:'column',
                    padding:'0px 10px',
                    margin:'5px 0px',
                    border:'none',
                    borderRadius:'7px',
                    backgroundColor:'var(--primary)',
                    color:'var(--button)'}}>
            <div>customer Name:{props.customerName}</div>
            <div>Address:{props.address}</div>
            <div>phone: {props.phone}</div>
            <div>date:{props.date}</div>
            <div>email: {props.email}</div>
            <div>bedrooms: {props.bedrooms}</div>
            <div>bathrooms:{props.bathrooms}</div>
            <div>Carpet:{props.carpet}</div>
            <div>totalprice:{props.totalPrice}</div>

            
        </div>
    )
}

export default Allbookings
