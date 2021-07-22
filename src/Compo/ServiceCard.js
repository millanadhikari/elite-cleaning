import React from 'react'
import {  Link } from "react-router-dom";


function ServiceCard(props) {
    return (
        <div style={{
        height:'280px',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center'
                   }}>
            <Link style={{textDecoration:'none'}} to={props.path}>
            <div style={{backgroundImage:`url(${props.image})`,
                            width:'240px',
                            height:'245px',
                            backgroundSize:'cover',
                            backgroundPosition:'center',
                            borderRadius:'9px',
                            boxShadow:'0px 0px 3px 0px black'}}>
                <div style={{display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'var(--text)',
            padding:'5px 0px',
            borderRadius:'4px',
            position:'relative',
            top:'50px'}}>{props.price}</div>

            </div>
            <div style={{textDecoration:'none',
                         color:'var(--text)'}}>{props.title}</div>
            </Link>

            
        </div>
    )
}

export default ServiceCard
