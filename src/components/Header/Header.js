import React from 'react'
import logo from './logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../Providers/StateProvider'
import { auth } from '../../firebase'

const Header = () => {
    // eslint-disable-next-line
    const [state,dispatch] = useStateValue()
    function handleSignOut(){
        if(state.user){
            auth.signOut()
        }
    }
    return (
        <div className="header">

            <div class="header__logo">
                <Link to="/">
                    <img className="header_img" src={logo} alt="amazon logo"></img>
                </Link>
            </div>

            <div className="header__search">
                <input type="text"></input>
                <SearchIcon className="header__searchIcon" />
            </div>
        
            <div className="header__nav">
                <Link to={state.user || "/login"}>
                    <div onClick={handleSignOut} className="header__option">
                        <span className="header__lineOne">Hello {state.user ? state.user.email : 'Guest'}</span>
                        <span className="header__lineTwo">{state.user ? 'SignOut' : 'SignIn'}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__lineOne">Returns</span>
                    <span className="header__lineTwo">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__lineOne">Account</span>
                    <span className="header__lineTwo">& Lists</span>
                </div>
                    <Link to="/checkout">
                <div className="header__basket">
                        <ShoppingBasketIcon />
                    <span className="header__lineTwo header__basketCount">{state.basket.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
