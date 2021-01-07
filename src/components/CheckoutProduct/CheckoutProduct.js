import './CheckoutProduct.css'
import React from 'react'
import { useStateValue } from '../Providers/StateProvider'

const CheckoutProduct = ({id,title,image,rating,price}) => {
    // eslint-disable-next-line
    const [state,dispatch] = useStateValue()
    function handleClick(){
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="product"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <small>₹ </small>
                <strong>{price}</strong>
                <div className="checkoutProduct__rating">
                {Array(rating).fill().map((_,i) => <p>🌟</p>)}
                </div>
                <button onClick={handleClick} className="checkoutProduct__button">
                    Remove from basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
