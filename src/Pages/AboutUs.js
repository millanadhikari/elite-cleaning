import React,{useState} from 'react'
import Allbookings from '../Compo/Allbookings'
import { allbookingdata } from '../Compo/Data'

function AboutUs() {
    const [aboutus, setaboutus] = useState(false)
    const [admin, setadmin] = useState({
        username:'',
        password:''
    })
    const  handleChange = (e) => {
        setadmin({
            ...admin,
            [e.target.name]:e.target.value,
        })
    }

    function handlesubmit(e){
        e.preventDefault();
      
        if (admin.username=== 'rajat', admin.password=== 'shree1234'){
                setaboutus(true)
        } else{
            alert('login failed!!')
        }
    }

    return (
        <>{aboutus? ( <div >{allbookingdata.map(index=>(<Allbookings key={index}
            bedrooms={index.bedrooms}
            bathrooms={index.bathrooms}
            carpet={index.carpet}
            totalPrice={index.totalprice}
            customerName={index.customerName}
            address={index.address}
            phone={index.phone}
            email={index.email}
            />))}
            </div>):( <div  style={{minHeight:'90vh'}}>
            <h3>adminlogin</h3>
            <form onSubmit={handlesubmit}>
            <label>
            <input placeholder="username" name="username" value={admin.username} onChange={handleChange}></input>

            </label>
            <label>
            <input placeholder="pasword" type="password"  name="password" value={admin.password} onChange={handleChange}></input>


            </label>
            <button type="submit">log-in</button>
            </form>
        </div>)}
       
        </>
    )
}

export default AboutUs
