import {useEffect, useState} from 'react'
import SingleItem from './SingleItem'
import Dropdown from './Dropdown'


const MenuSection = () => {

	// all category options for pizza
	const allCategory = ['all', 'veg', 'non-veg']

	// to toggle sort dropdown
	const [showDropdown, setShowDropdown] = useState(false)

	// state storing fetched data from api
	const [data, setData] = useState( JSON.parse(localStorage.getItem('pizza-data')) || [])

	// filtering data based on category which is All, veg and non-veg
	const [filterdData, setFilteredData] = useState(data)

	// function to fetch data
	const fetchData = async() => {
		const getData = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
		const resp = await getData.json()
		setData(resp)
		localStorage.setItem('pizza-data', JSON.stringify(resp))
	}

	// function to sort all veg based pizza
	const handleVegBasedSort = () => {
		const vegPizzas = data?.filter(item => item.isVeg === true)
		setFilteredData(vegPizzas);
	}

	// function to sort all veg based pizza
	const handleNonVegBasedSort = () => {
		const vegPizzas = data?.filter(item => item.isVeg !== true)
		setFilteredData(vegPizzas);
	}

	// function to sort based on low price
	const sortLowPrice = () => {
		// first filter out the prices with id so thta when sorted
		// we can use id to match with the data and position them accordingly
		const sortedPrices = filterdData?.map((item) => {
			return {id:item?.id , price:Number(item?.price)}
		}).sort((a, b) => a.price - b.price)

		// once price is sorted we matched the id with original data and position item accordingly
		const newSortedArray = sortedPrices?.map(item => {
			const matchingItem = filterdData?.filter(pizza => { 
				if(pizza.id === item.id) {
					return pizza
				}
			})
			return matchingItem
		})
		setFilteredData(newSortedArray.flat());
		setShowDropdown(false)
	}

	// function to sort based on high price
	const sortHighPrice = () => {
		// first filter out the prices with id so thta when sorted
		// we can use id to match with the data and position them accordingly
		const sortedPrices = filterdData?.map((item) => {
			return {id:item?.id , price:Number(item?.price)}
		}).sort((a, b) => b.price - a.price)

		// once price is sorted we matched the id with original data and position item accordingly
		const newSortedArray = sortedPrices?.map(item => {
			const matchingItem = filterdData?.filter(pizza => { 
				if(pizza.id === item.id) {
					return pizza
				}
			})
			return matchingItem
		})
		setFilteredData(newSortedArray.flat());
		setShowDropdown(false)
	}

	// function to sort based on low rating
	const sortLowRating = () => {
		// first filter out the rating with id so thta when sorted
		// we can use id to match with the data and position them accordingly
		const sortedPrices = filterdData?.map((item) => {
			return {id:item?.id , price:Number(item?.rating)}
		}).sort((a, b) => a.price - b.price)

		// once price is sorted we matched the id with original data and position item accordingly
		const newSortedArray = sortedPrices?.map(item => {
			const matchingItem = filterdData?.filter(pizza => { 
				if(pizza.id === item.id) {
					return pizza
				}
			})
			return matchingItem
		})
		setFilteredData(newSortedArray.flat());
		setShowDropdown(false)
	}

	// function to sort based on high rating
	const sortHighRating = () => {
		// first filter out the rating with id so thta when sorted
		// we can use id to match with the data and position them accordingly
		const sortedPrices = filterdData?.map((item) => {
			return {id:item?.id , price:Number(item?.rating)}
		}).sort((a, b) => b.price - a.price)

		// once price is sorted we matched the id with original data and position item accordingly
		const newSortedArray = sortedPrices?.map(item => {
			const matchingItem = filterdData?.filter(pizza => { 
				if(pizza.id === item.id) {
					return pizza
				}
			})
			return matchingItem
		})
		setFilteredData(newSortedArray.flat());
		setShowDropdown(false)
	}


	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div style={{position:'relative'}} className='container'>
			<h2>menu</h2>
			<div className="options-container">
				<div className="left">
					<span onClick={() => setFilteredData(data)} >all</span>
					<span onClick={handleVegBasedSort} >veg</span>
					<span onClick={handleNonVegBasedSort} >non-veg</span>
				</div>
				<div className="right">
					<span style={{cursor:'pointer'}} onClick={() => setShowDropdown(prev => !prev)} >sort</span>
					{
						showDropdown 
						&& 
						<Dropdown 
							sortLowPrice={sortLowPrice}
							sortHighPrice={sortHighPrice}
							sortLowRating={sortLowRating}
							sortHighRating={sortHighRating}
						/>
					}
				</div>
			</div>
			<div className="menu-items-container">
				{
					filterdData?.map(item => {
						return (
							<SingleItem key={item.id} pizzaData = {item} />
						)
					})
				}
			</div>
		</div>
	)
}

export default MenuSection