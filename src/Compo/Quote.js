import React,{useState} from 'react'
import Quotation from './Quotation'
import './Quote.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {db} from '../firebase';
import firebase from '../firebase';
import { allbookingdata } from './Data';



function Quote() {



    const [openquote, setopenquote] = useState(false)
    const [customer, setcustomer] = useState({customername:'',
                                                email:'',
                                                phone:'',
                                                date:new Date(),
                                                address:''})


    function closeit(){
        setopenquote(false)
    }

  const  handleChange = (e) => {
        setcustomer({
            ...customer,
            [e.target.name]:e.target.value,
        })

        
    
    }
    function onsubmit(e){
        console.log(customer);
        e.preventDefault();
         setopenquote(true);
      
    }
    return (
        <>  {openquote ? (<Quotation closeit={closeit}
            customerName={customer.customername}
            address={customer.address}
            phone={customer.phone}
            email={customer.email}
            date={customer.date}
  />):( <div className="quote">
          
        <p>Please Enter your Detail for Quotation</p>
        <DatePicker 
                    selected={customer.date} 
                    onChange={(date) => setcustomer({date:date})}
                    dateFormat="Pp" />
        
        <form onSubmit={onsubmit} style={{display:'flex',
                    flexDirection:'column'}}
                    >
            <label>
            <input className="input__quote"  placeholder="Name" name='customername' value={customer.customername} onChange={handleChange}/>
            </label>
            <label>
            <input className="input__quote" type="email" placeholder="E-Mail" name='email' value={customer.email} onChange={handleChange}/>
            </label>
            <label>
            <input className="input__quote" type="number" placeholder="Phone" name='phone'value={customer.phone} onChange={handleChange}/>
            </label>
            <label>
             <textarea className="input__quote" placeholder="please enter your property address" name="address" value={customer.address} onChange={handleChange}></textarea>
             </label>
             <button  type="submit" onSubmit={onsubmit} style={{display:'flex',
                    padding:'6px 0px',
                    justifyContent:'center',
                    borderRadius:'7px',
                    backgroundColor:'var(--button)',
                    position:'relative',
                    top:'20px'}}>Get Quote</button>
           
        </form>
       
        
     
                    
    </div>)}
       
        </>
    )
}

export default Quote
