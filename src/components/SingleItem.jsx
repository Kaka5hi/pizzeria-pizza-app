import {useState} from 'react'
import AddOnModal from '../components/AddOnModal'


const SingleItem = ({pizzaData}) => {

	// add on pop modal
	const [addOn, setAddOn] = useState(false)
	
	return (
		<>
			<div id={pizzaData.id} className='single-item'>
				<div className="top">
					<img src={pizzaData.img_url} alt={pizzaData.name} />
					<p>{pizzaData.description}</p>
				</div>
				<div className="bottom">
					<h4>{pizzaData.name}<span>Rs. {pizzaData.price}</span></h4>
					<h5>{pizzaData.isVeg ? 'veg' : 'non-veg'}<span>Rating: {pizzaData.rating}</span></h5>
					<div className="btn-container">
						<button onClick={() => setAddOn(true)} >+</button>
						<button>-</button>
					</div>
				</div>
			</div>
			{
				addOn && <AddOnModal pizzaData={pizzaData} setAddOn={setAddOn} />
			}
		</>
	)
}

export default SingleItem