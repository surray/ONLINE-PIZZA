import React from 'react';
import {useSelector, useDispatch}  from 'react-redux';
import { addToCart, deleteFromCart } from '../actions/cartActions';



export default function CartScreen(){
const cartstate=useSelector((state)=>state.cartReducer);
const cartItems=cartstate.cartItems;
var subtotal=cartItems.reduce((x,items) => x +items.price,0);
const dispatch=useDispatch();
console.log(cartItems);
  return(
    <div>
      <div className='row justify-content-center'>
       <div className='col-md-6'>
         <h2 style={{fontsize:"30px"}}>My Cart</h2>

            {cartItems.map(item=>{
              console.log(item);
              return(
             <div className='flex-container w-100'>
               <div className='text-left m-1 w-100' >
                  <h1>{item.name} {item.varient}</h1>
                  
                  <h1>Price: {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                  
                  <h1 style={{display:'inline'}}>Quantity:</h1>
                    <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}></i>
                    <b>{item.quantity}</b>
                    <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity-1, item.varient))}} ></i>
                    <hr/>
                </div >
                  
                <div className='m-1 w-100'>
                  <img src={item.image} style={{height:"100px",width:"100px"}}/>
                </div>
                 
                <div className='m-1 w-100'>
                   <i className="fa fa-trash" style={{color:"red"}}aria-hidden="true" onClick={()=>dispatch(deleteFromCart(item))}></i>
                </div>
              </div>)
  
            })}

           </div>
        <div className='col-md-4 text-right'>

          <h2>Subtotal:RS.{subtotal}/-</h2>
          <button className='btn'  onClick={event =>  window.location.href='/bill'}>Check Out</button>
        </div>
      </div>
    </div>
  )


}

