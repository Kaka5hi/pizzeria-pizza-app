import { useDispatch } from 'react-redux'
import { increaseItem, decreaseItem, removeItem } from '../features/cart/cartSlice'

const CartItem = ({data}) => {

	const dispatch = useDispatch()

	return (
		<div className='single-cart-item'>
			<div className="item-detail">
				<div className="left">	
					<img src={data?.img_url} alt={data?.name} />
					<div className="description">
						<span>{data?.name}</span>
						<span>{data?.isVeg ? 'Veg' : 'Non-Veg'}</span>
						<div className="chips-container">
							{data?.topping?.map(item => <span className='chips' key={item}>{item}</span>)}
						</div>
					</div>
				</div>
				<div className="right">
					<div className="item-count">
						<button onClick={() => dispatch(increaseItem(data?.id))} >+</button>
						<span>quantity: {data?.count}</span>
						<button  onClick={() => {
							if(data?.count > 1) {
								dispatch(decreaseItem(data?.id))
								return
							} else {
								dispatch(removeItem(data?.id))
							}
						}} >-</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItem