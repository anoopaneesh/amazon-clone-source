import './Checkout.css'
import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../Providers/StateProvider'
import FlipMove from 'react-flip-move'

const Checkout = () => {
    // eslint-disable-next-line
    const [state,dispatch] = useStateValue()
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Laptops/INTEL/LFH_Work--Banner--1500x200.jpg" alt="amazon ad" />
                <div className="checkout__info">
                    {
                        state.user?<h3>Hello , {state.user?.email.split('@')[0]}</h3>:<h3>Please SignIn to proceed</h3>
                    }
                    <h2 className="checkout__title">Your Shopping Basket</h2> <hr/>
                    <div className="checkout__basket">
                    
                    
                        {state.basket?.map((product) => <CheckoutProduct key={product.id} id={product.id} title={product.title} image={product.image} rating={product.rating} price={product.price} />)}
            
                    </div>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
