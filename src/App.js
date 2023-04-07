import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import {calculateTotal} from './features/cart/cartSlice'
import { useEffect } from 'react'

const App = () => {

    const dispatch = useDispatch()

    const {cartItems} = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItems])

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={ <Home /> } />
                    <Route path='/cart' element={ <Cart /> } />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App