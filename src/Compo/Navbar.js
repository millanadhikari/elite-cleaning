import React,{useState} from 'react'
import Logo from '../assets/logo.png'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';
import Modal from 'react-modal'
import Menu from './Menu';



function Navbar() {
    const [openmenu, setopenmenu] = useState(false)
    return (
        <div className="navbar">
            <div className="navbar__menu">
                <div><img style={{height:'50px'}}src={Logo}/></div>
                <div style={{display:'flex',
                            alignItems:'center',
                            color:'skyblue'}}><a style={{textDecoration:'none'}} href="tel:0455120847"><PhoneIcon/>0455120847</a></div>
                <div>
                {/* <div onClick={() =>setopenmenu(!openmenu)} style={{color:'skyblue'}}> <MenuIcon/></div> */}
                </div>
            </div>
            {/* {openmenu && (<Modal isOpen={openmenu} 
                               
                                ><Menu/>

            </Modal>)}
            */}
            
        </div>
    )
}

export default Navbar
