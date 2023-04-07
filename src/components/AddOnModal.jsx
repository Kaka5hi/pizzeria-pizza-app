import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const AddOnModal = ({setAddOn, pizzaData}) => {

	const dispatch = useDispatch()

	const [size, setSize] = useState('')
	const [topping, setTopping] = useState([])
	const [error, setError] = useState(false)

	const handleSizeSubmit = (e) => {
		const {name, value, checked} = e.target
		if(checked && name === 'size') {
			setSize(value)
		}
	}

	const handleToppingSubmit = (e) => {
		const {name, value, checked} = e.target
		setTopping(prev => {
			return (
				[...prev, value]
			)
		})
	}

	const handleAddOnSubmit = () => {
		const {id, name, price, rating, isVeg, img_url} = pizzaData
		if(size) {
			const cartItems = {id, name, price, rating, isVeg, size, topping, img_url}
			dispatch(addItem(cartItems))
			setAddOn(false)
			setSize('')
			setTopping([])
		} else {
			setError(true)
			setTimeout(() => {
				setError(false)
			}, 2000)
		}
	}

	useEffect(() => {
		window.scrollTo(0, 1550);
	}, [])

	return (
		<div className='add-on-modal'>
			<div className="add-on-modal-outer">
				<h2>add on's for {pizzaData.name}</h2>
				<div className="add-on-modal-inner">
					<div className="options">
						<h4>{pizzaData?.size[0]?.title}</h4>
						<div className="size-options">
							{
								pizzaData?.size[0]?.items?.map(item => {
									return (
										<div key={item?.size} className="single-option">
											<input type="radio" value={item?.size} name="size" id="size" onChange={handleSizeSubmit} />
											<label htmlFor="size">{item?.size}</label>
										</div>
									)
								})
							}
						</div>
					</div>
					<div className="options">
						<h4>{pizzaData?.toppings[0]?.title}</h4>
						<div className="topping-options">
							{
								pizzaData?.toppings[0]?.items?.map(item => {
									return (
										<div key={item?.name} className="single-option">
											<input type="checkbox" value={item?.name} name="toppings" id="toppings" onChange={handleToppingSubmit} />
											<label htmlFor="toppings">{item?.name}</label>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
				{
					error && <p style={{color:'tomato', textAlign:'center', paddingBottom:'10px', fontSize:'20px'}} >Please select size</p>
				}
				<div className="modal-btn-container">
					<button className="redirect" onClick={handleAddOnSubmit} >add</button>
					<button className="redirect" onClick={() => setAddOn(false)} >close</button>
				</div>
			</div>
		</div>
	)
}

export default AddOnModal