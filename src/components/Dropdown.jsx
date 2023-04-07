
const Dropdown = ({sortLowPrice, sortHighPrice, sortLowRating, sortHighRating}) => {

	return (
		<div className="dropdown">
			<span onClick={sortLowPrice} >low price</span>
			<span onClick={sortHighPrice} >high price</span>
			<span onClick={sortLowRating} >low rating</span>
			<span onClick={sortHighRating} >high rating</span>
		</div>
	)
}

export default Dropdown