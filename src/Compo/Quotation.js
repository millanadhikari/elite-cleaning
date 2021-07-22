import React,{useState}from 'react'
import Modal from 'react-modal'
import BuildControls from './BuildControls';
import Aminities from './Aminities';
import Extras from './Extras';
import QuotationFinal from './QuotationFinal';
import './Quotation.css'


const INGREDIENT_PRICES={
    bedroom:80,
    bathroom:70,
    other:70,
    carpet:35,
    balcony:25,
    laundry:25,
    garage:20,
    wall:50,
    blinds:15,
    windows:15


    }

function Quotation({customerName,email, date, address, phone, closeit}) {

    const [state , setstate] = useState({
        
        ingredients:{
            bedroom:0,
            bathroom:0,
            other:0,
            carpet:0,
            balcony:0,
            laundry:0,
            garage:0,
            wall:0,
            blinds:0,
            windows:0
        
                },
        totalPrice:99


    });
    const [open, setopen] = useState(false)
    const  addIngredientHandler=(type) =>{
         
        const oldCount=state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients={
            ...state.ingredients, 
            };
    
        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice= state.totalPrice;
        const newPrice= oldPrice + priceAddition;
        setstate({totalPrice:newPrice, ingredients:updatedIngredients,});
    
    
     }

     const  removeIngredientHandler=(type) =>{
        const oldCount= state.ingredients[type];
        if (oldCount <= 0){
            return;

        }
        const updatedCount = oldCount - 1;
        const updatedIngredients={
            ...state.ingredients, 
            };
    
        updatedIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice= state.totalPrice;
        const newPrice= oldPrice - priceDeduction;
        setstate({totalPrice:newPrice, ingredients:updatedIngredients, });
    
    
     
   }
   
   
   const disabledInfo={
    ...state.ingredients
    };
    for(let key in disabledInfo){
    disabledInfo[key] =disabledInfo[key] <=0
    } 

    return (
        <div className="Quotation">
             <div className="quote__title"><h2 style={{color:'var(--button)'}}>Get an Instant Quote</h2>
                            <p> Please provide your Property details to get an instant Quote for End of Lease CLeaning</p>
                        </div>
                        <div className="quote__zen">
                            <div className="Quote_property"><h3 style={{color:'var(--button)'}}>Property</h3>
                                 <p>All properties must be unfurnished.</p>
                                 <div>
                                     <form>
                                         <div><input type="radio" id="Studio" name="property"/>
                                         <label for ="Studio">Studio</label></div>
                                         <div><input type="radio" id="Apartment" name="property"/>
                                         <label for ="Apartment">Apartment</label></div>
                                         <div><input type="radio" id="House" name="property"/>
                                         <label for ="House">House</label></div>
                                         
                                         
                                         

                                     </form>
                                    
                                     
                                 </div>
                            </div>
                            <div className="button_control">
                            <BuildControls
                                 ingredientAdded={addIngredientHandler}
                                 ingredientRemoved={removeIngredientHandler}
                                 disabled={disabledInfo}
                                 totalCount={state.ingredients}/>
                           
                            </div>
                               
                            <div className="Quote_aminity">
                                <Aminities 
                                 ingredientAdded={addIngredientHandler}
                                 ingredientRemoved={removeIngredientHandler}
                                 disabled={disabledInfo}
                                 totalCount={state.ingredients}/>
                           
                               
            
                            </div>
                            <di className="Quote_extras">
                                <Extras ingredientAdded={addIngredientHandler}
                                 ingredientRemoved={removeIngredientHandler}
                                 disabled={disabledInfo}
                                 totalCount={state.ingredients}/>
                            </di>
                            <div className="Quote_request">
                                <button onClick={()=>setopen(true)}>Get Quote</button>
                                {open &&  <QuotationFinal 
                                   bedrooms={state.ingredients.bedroom}
                                   bathrooms={state.ingredients.bathroom}
                                   carpet={state.ingredients.carpet}
                                   totalPrice={state.totalPrice}
                                   closeit={closeit}
                                   customerName={customerName}
                                   address={address}
                                   phone={phone}
                                   email={email}
                                   date={date}/>}
                                   
                                   

                               
                            </div>
                        
                        </div>
        </div>
    )
}

export default Quotation
