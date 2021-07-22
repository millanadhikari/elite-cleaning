import React from 'react'
import { Link } from "react-router-dom";


function Menu() {
    return (
        <div style={{display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'var(--text)',
        color:'var(--button)',
        height:'350px',
        borderRadius:'0px 0px 3px 3px',
        boxShadow:'0px 0px 3px black'}}>
           <div>Home</div>
            <div>Services</div>
            <div>About Us</div> 
          <div>Book-Now</div>
            
        </div>
    )
}

export default Menu
