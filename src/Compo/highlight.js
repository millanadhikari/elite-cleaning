import React from 'react'

function highlight(props) {
    return (
        <div className="highlight">
            <div style={{marginTop:'100px'}} className="highlight__title">
                <h4 style={{color:'var(--primary)'}}>{props.title}</h4>
                <h5>{props.heading}</h5>
            </div>
            <div className="highlight__detail">
                <div>
                    <p style={{padding:'0px 10px'}}>{props.parraA}</p>
                    <div style={{display:'flex',
                                flexDirection:'column',
                                justifyContent:'center',
                                alignItems:'center'}}>
                         <div style={{backgroundImage:`url(${props.image})`,
                                height:'250px',
                                width:'200px',
                                backgroundSize:'cover',
                                backgroundPosition:'center',
                                border:'none',
                                borderRadius:'6px'}}></div>
                        <div><p  style={{padding:'0px 10px'}}>{props.parraB}</p></div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default highlight
