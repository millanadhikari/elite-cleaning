import React from 'react'
import TodayIcon from '@material-ui/icons/Today';
import ExploreIcon from '@material-ui/icons/Explore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MoneyIcon from '@material-ui/icons/Money';
import './OurPromise.css'

function OurPromise() {
    return (
        <div className="ourpromise">
            <div><h3  style={{display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        color:'var(--button)',
                        padding:'10px 0px'
                        }}>Our Promise</h3>
                        </div>
            <div className="promises">
                <div className="icon__promise"><MoneyIcon /></div>
                <div style={{color:'var(--button)',
                             fontWeight:'bold'}}>100% Bond Back Guarantee</div>
                <div><p>we provide 100% Bond Back Guarantee within the 72nd hour of our service.your satisfaction is our success.</p></div>
            </div>
            <div  className="promises">
                <div className="icon__promise"><LocalHospitalIcon/></div>
                <div>Insurance Cover</div>
                <div><p>We are protected with public Liability insurance. if anything goes wrong just in case, you are completely insured.</p></div>
            </div>
            <div  className="promises">
                <div className="icon__promise"><ExploreIcon/></div>
                <div>Available all accross Sydney</div>
                <div><p>We provide end of lease cleaning service trought all Sydney Suburbs.</p></div>
            </div>
            <div  className="promises">
                <div className="icon__promise"><TodayIcon/></div>
                <div>Same Day Service Available*</div>
                <div><p>If you are able to get in touch before 12pm everyday, we might be able to provide an urgent Same day service.</p></div>
            </div>
        </div>
    )
}

export default OurPromise
