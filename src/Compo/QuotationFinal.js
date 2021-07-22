import React,{useState} from 'react'
import { Link} from "react-router-dom";
import Covidoffer from './Covidoffer';
import Covidofferapply from './Covidofferapply';
import Allbookings from './Allbookings';
import { allbookingdata } from './Data'


  
function QuotationFinal(props) {
 const [netprice, setnetprice] = useState(props.totalPrice+0.10*props.totalPrice)
 const [gst, setgst] = useState(props.totalPrice*0.10)
 const [covidoff, setcovidoff] = useState(false)
 const [offer, setOffer] = useState(props.totalPrice-0.11*props.totalPrice)


 function covidofferfn(){
     setcovidoff(true)
 }
 function handlesubmit(e){
     e.preventDefault();
  console.log(props);
    allbookingdata.push({
        customerName:props.customerName,
        address:props.address,
        phone:props.phone,
        email:props.email,
        date:props.date,
        bedrooms:props.bedrooms,
        bathrooms:props.bathrooms,
        carpet:props.carpet,
       totalprice:`${covidoff ? offer:netprice}`,
       
    });
 }
 
    return (
        <div >
            <h>End of lease CLeaning</h>
            <div className="quote_detail">
           
            <div>
                <div></div><div>Total Gross Price: ${props.totalPrice}</div>
                <div>GST :${gst}</div>
               <> {covidoff ? (<Covidofferapply/>):(<div><Covidoffer onClick={covidofferfn} /></div>)}</>

                <div>Total  Price: ${covidoff ? offer:netprice}</div>
            </div>
            <div style={{display:'flex',
                        justifyContent:'space-between'}}>
                <div><button onClick={props.closeit}>Cancel</button></div><div><button type="submit" onClick={handlesubmit}><Link style={{textDecoration:'none'}} to='/booking'>Book-Now</Link></button></div>
            </div>
            <div style={{display:'none'}}></div>
            </div>
        </div>
    )
}

export default QuotationFinal
