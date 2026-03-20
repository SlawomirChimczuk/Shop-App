import { Route, Routes } from "react-router"
import './App.css'
import Nav from './components/nav/Nav'
import Search from "./components/search/Search"
import Home from "./pages/home/Home"
import { BasketItemsProvider } from "./context/BasketItemsProvider"

function App() {  

  return (
    <>
      <BasketItemsProvider>
        <Nav />
        <Search />
        <Routes>
            <Route index element={<Home />} /> 
        </Routes>
      </BasketItemsProvider>
    </>
  )
}

export default App
