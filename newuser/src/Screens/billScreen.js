import React from 'react';
import {useSelector, useDispatch}  from 'react-redux';


export default function BillScreen(){
const cartstate=useSelector((state)=>state.cartReducer);
const cartItems=cartstate.cartItems;
var subtotal=cartItems.reduce((x,items) => x +items.price,0);
const dispatch=useDispatch();
console.log(cartItems);
  return(
    <div>
      <div className='row justify-content-center'>
       <div className='col-md-6'>
       <h2 style={{fontsize:"30px"}}>SHARIA PIZZA'S</h2>
        <hr/>
         <p style={{fontsize:"20px"}}>Invoice is ready</p>

            {cartItems.map(item=>{
              console.log(item);
              return(

                
             <div className='flex-container w-100'>
               <div className='text-left m-1 w-100' >
                  <p>{item.name} -{item.varient} <spam style={{color:"red"}}>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</spam></p>
                  
                  
                   
                </div >
                  
                
                 
              
              </div>)
  
            })}

           </div>
        <div className='text-left m-1 w-100'>
        <hr/>
          <h3>Subtotal:RS.{subtotal}/-</h3>
         
          
        </div>
      </div>
    </div>
  )


}

