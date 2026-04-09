import { Route, Routes } from "react-router"
import './App.css'
import Nav from './components/nav/Nav'
import Search from "./components/search/Search"
import Home from "./pages/home/Home"
import { BasketItemsProvider } from "./context/BasketItemsProvider"
import Basket from "./pages/basket/Basket"
import Orders from "./pages/orders/Orders"
import Form from "./pages/form/Form"

function App() {  

  return (
    <>
      <BasketItemsProvider>
        <Nav />
        <Routes>
            <Route index element={<Home />} /> 
            <Route path="basket" element={<Basket />} />
            <Route path="form" element={<Form />} />
            <Route path="orders" element={<Orders />} />
        </Routes>
      </BasketItemsProvider>
    </>
  )
}

export default App
