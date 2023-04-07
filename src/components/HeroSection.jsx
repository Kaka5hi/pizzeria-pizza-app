import React from 'react'
import {MdOutlineMenuBook, MdOutlineStorefront, MdLocalOffer} from 'react-icons/md'
import {FaBirthdayCake} from 'react-icons/fa'

const HeroSection = () => {
	return (
		<div className="container">

			<div className="img-container">
				<img src="./img/pizza-bg.avif" alt="banner" />
				<div className="img-inner-container">
					<h2>Slice into Savings and Satisfy your Cravings with Pizzeria - <span>Order Now!</span></h2>
					<p>Pizzeria makes it easy and convenient to order your favorite pizza with just a few taps on your phone. Browse through our mouth-watering menu, customize your pizza just the way you like it, and enjoy quick delivery straight to your door. Plus, take advantage of exclusive deals and discounts, start satisfying your pizza cravings!</p>
				</div>
			</div>

			<h2>Explore</h2>
			<div className="cards-container">
				<div className="cards">
					<MdOutlineMenuBook />
					<span className="heading">our menu</span>
					<span className="description">explore our range of delicious Pizzas!</span>
					<span className="redirect">discover pizza</span>
				</div>
				<div className="cards">
					<MdOutlineStorefront />
					<span className="heading">nearby stores</span>
					<span className="description">find a pizza shop near you</span>
					<span className="redirect">find pizza shop</span>
				</div>
				<div className="cards">
					<FaBirthdayCake />
					<span className="heading">birthday parties</span>
					<span className="description">celebrate birthday's with fresh pizza</span>
					<span className="redirect">book now</span>
				</div>
				<div className="cards">
					<MdLocalOffer />
					<span className="heading">exciting offer</span>
					<span className="description">check all the offer and get discount</span>
					<span className="redirect">check offers</span>
				</div>
			</div>
		</div>
	)
}

export default HeroSection