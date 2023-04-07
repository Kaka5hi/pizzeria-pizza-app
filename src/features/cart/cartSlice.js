import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cartItems:[],
	totalItems:0,
	amount:0,
}

const cartSlice = createSlice({
	name:'cart',
	initialState,
	reducers:{
		addItem:(state, action) => {
			const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
			if(itemIndex < 0) {
				const newItem = action.payload
				state.cartItems.push({...newItem, count: 1})
			} else {
				let newCountValue = state.cartItems[itemIndex]?.count + 1
				const newItem = {...action.payload, count: newCountValue}
				state.cartItems.splice(itemIndex, 1, newItem)
			}
		},
		removeItem:(state, action) => {
			const itemId = action.payload
			const filterItems =  state.cartItems.filter(item => item.id !== itemId)
			state.cartItems =filterItems
		},
		increaseItem:(state, action) => {
			const itemId = action.payload
			const cartItem = state.cartItems.find(item => item.id === itemId)
			cartItem.count = cartItem.count + 1
		},
		decreaseItem:(state, action) => {
			const itemId = action.payload
			const cartItem = state.cartItems.find(item => item.id === itemId)
			cartItem.count = cartItem.count - 1			
		},
		calculateTotal:(state) => {
			let total = 0
			let amount = 0
			state.cartItems.forEach(item => {
				total += item.count
				amount += item.count * Number(item.price)
			})
			state.totalItems = total
			state.amount = amount
		},
	}
})

export default cartSlice.reducer

export const {addItem, removeItem, increaseItem, decreaseItem, calculateTotal} = cartSlice.actions