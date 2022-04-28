import React from'react';
import { useState } from 'react';
import{Modal} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
export default function Pizza({pizza}){

const [varient,setVarient]=useState('Small');
const [quantity,setQuantity]=useState(1);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const dispatch=useDispatch()

function addtocart(){
 dispatch(addToCart(pizza,quantity,varient))
}
    return(
        
        <div style={{margin:'50px'}}className="shadow-lg p-3 mb-5 bg-white rounded">
          <div onClick={handleShow}><h1 className='heading'>{pizza.PizzaName}</h1>
          <img className='image'src={pizza.PizzaImage}style={{height:'200px', width:'150px'}}></img>
          </div>
          <div className='flex-container'>
              <div className='w-100 m-1'>
                  <p>Varient</p>
                  <select value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
                      {pizza.Varients.map(varient=>{
                      return<option value={varient}>{varient}</option>
                    })
                     
                  }</select>

              </div>
              <div className='w-100 m-1'>
                  <p>Quantity</p>
                  <select value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
                      {[...Array(10).keys()].map((x,i)=>{
                          return <option value={i+1}>{i+1}</option>
                      })}
                   </select>
              </div>
          </div>

          <div className='flex-container m-1'>
              <div className='w-100 '>
                  <h1>Price: Rs {pizza.prices[0][varient] * quantity}</h1>
                  
             </div> 
              <div className='w-100'>
                  <button className='btn' onClick={addtocart}>Add to cart</button>
              </div>
          </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.PizzaName}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <img src={pizza.PizzaImage}style={{height:'100px', width:'100px'}}></img>
                <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
            </Modal>
        </div>
        )
        
}

