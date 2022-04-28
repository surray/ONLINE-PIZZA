export const addToCart=(pizza, quantity,varient)=>(dispatch,getState)=>{

var cartItem={
    name:pizza.PizzaName,
    _id:pizza._id,
    image:pizza.PizzaImage,
    varient:varient,
    quantity: Number(quantity),
    prices:pizza.prices,
    price:pizza.prices[0][varient] * quantity

   }

if(cartItem.quantity>10)
{
    alert("More than 10 is bad for your health");
}
else{

    if(cartItem.quantity<0)
    {
        dispatch({type:'DELETE_FROM_CART',payload:pizza})
    }
    else
    {
        dispatch({type:'ADD_TO_CART',payload:cartItem})
    }
}


const cartItems=getState().cartReducer.cartItems
localStorage.setItem('cartItems',JSON.stringify(cartItems))

}

export const deleteFromCart=(pizza)=>(dispatch,getState)=>{

    dispatch({type:'DELETE_FROM_CART',payload:pizza})

    const cartItems=getState().cartReducer.cartItems
localStorage.setItem('cartItems',JSON.stringify(cartItems))
    
    }