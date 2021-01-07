import React from 'react'
import { useStateValue } from '../Providers/StateProvider'
import './Product.css'
const Product = ({id,title,price,rating,image}) => {
    // eslint-disable-next-line
    const [state,dispatch] = useStateValue()
    const handleClick = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                price:price,
                rating:rating,
                image:image
            }
        })
    } 
    return (
        <div className="product__container">
            <div className="product__info">
                <p className="product__heading">
                {title}
                </p>
                <p className="product__price">
                    <small>₹ </small>{price}
                </p>
                <p className="product__rating">
                   {Array(rating).fill().map((e) => <p>🌟</p>)}
                </p>
            </div>
            <div className="product__content">
                <img className="product__image" src={image} alt=""/>
                <button onClick={handleClick} className="product__basket">Add to basket</button>
            </div>
        </div>
    )
}

export default Product
