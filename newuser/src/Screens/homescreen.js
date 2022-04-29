import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions';
import Pizza from '../components/Pizza';

export default function HomeScreen() {

    const dispatch = useDispatch();

    const pizzasstate = useSelector((state) => state.getAllPizzasReducers);

    const { pizzas, error, loading } = pizzasstate;

    useEffect(() => {
        dispatch(getAllPizzas())
    },[]);

    console.log(typeof(pizzas));

    return (
        <div>
            <div className='row'>
                {loading ? (<h1>Loading...</h1>) : error ? (<h1>something went wrong</h1>) :(
                   
                     pizzas.map((pizza) => {
                        return( <div className='col-md-4' key={pizza._id}>
                            <div>
                                <Pizza pizza={pizza} />
                            </div>
                        </div>
                        );
                    })
                
              )}
            </div>
        </div>
    )


}