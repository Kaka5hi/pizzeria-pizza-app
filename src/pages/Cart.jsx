import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cartItems, total, amount} = useSelector(state => state.cart)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if(cartItems.length === 0) {
        return(
            <div className="cart" style={{height:'58vh'}}>
                <div className="cart-heading">
                    <h2>your order</h2>
                </div>

                <div style={{textAlign:'center', textTransform:'capitalize', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', padding:'20px', fontWeight:700, fontSize:'22px'}}>
                    <p>your cart is empty</p>
                    <Link style={{color:'tomato'}} to={'/'}>Go to main page to order</Link>
                </div>
            </div>            
        )
    }

    return (
        <div className="cart">
                <div className="cart-heading">
                    <h2>your order</h2>
                </div>

                <div className="cart-items">
                    {cartItems?.map(item => {
                        return (
                            <CartItem key={item?.id} data={item} />
                        )
                    })}
                </div>
                <div className="cart-total">
                    <span>total : Rs. {amount}</span>
                </div>
        </div>
    )
}

export default Cart