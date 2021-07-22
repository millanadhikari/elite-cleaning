import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css'
import {Link } from "react-router-dom";


function Footer() {
    return (
        <div className="footer">
            <div className="footer__main">
            <div>
                <div><Link style={{textDecoration:'none',
                                    color:'var(--primary)'}} to='/'>Home</Link></div>
                <div><Link style={{textDecoration:'none',
                                    color:'var(--primary)'}} to='/End-of-lease-cleaning'>End of Lease </Link></div>
                <div>Carpet Cleaning</div>
                <div>Tile and Grout Cleaning</div>
                <div><Link style={{textDecoration:'none',
                                    color:'var(--primary)'}} to='/about-us'>About Us</Link></div>
                
            </div>
            <div>
                <div>Follow us on:</div>
                <div>
                    <div><FacebookIcon/></div><div><InstagramIcon/></div>
                </div>
            </div>
            </div>
            <div>
                <p>2020 (c) all rights reserved by Elite Spotless Cleaning</p>
            </div>
        </div>
    )
}

export default Footer
