import './Subtotal.css'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Providers/StateProvider'
const Subtotal = () => {
    // eslint-disable-next-line
    const [state,dispatch] = useStateValue()
    function calculateTotal(basket){
        let sum = 0;
        basket.forEach(element => {
          sum += element.price
        })
        return sum
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                        <> 
                            <p>Subtotal ({state.basket?.length || 0} items): <strong>{value}</strong></p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                                <p>This order contains a gift</p>
                            </small>
                            <button className="subtotal__button">Proceed to checkout</button>
                        </>
                    )} 
                value={calculateTotal(state.basket)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix='₹ ' />
        </div>
    )
}

export default Subtotal
