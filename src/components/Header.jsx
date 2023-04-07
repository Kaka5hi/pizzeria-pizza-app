import React from 'react'
import {BiShoppingBag} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { useSelector} from 'react-redux'


const Header = () => {

	const {totalItems} = useSelector(state => state.cart)

	return (
		<header>
			<Link to={'/'}>Pizzeria</Link>
			<Link to={'/cart'}><BiShoppingBag /><span>{totalItems}</span></Link>
		</header>
	)
}

export default Header