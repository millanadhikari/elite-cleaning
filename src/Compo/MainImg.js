import React from 'react'
import './MainImg.css'
import Quote from './Quote'

function MainImg() {



    return (
        <div className="mainimg">
            <div style={{color:'var(--text)',
                         paddingTop:'40px'
        }}>
                <h3>Sydney`s Best Lease Cleaning Service</h3>
                <h4>100% Bond Back Guarantee</h4>
            </div>
            <div>
                <Quote/>
            </div>
        </div>
    )
}

export default MainImg
