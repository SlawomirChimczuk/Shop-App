import { Route, Routes } from "react-router"
import './App.css'
import Nav from './components/nav/Nav'
import Search from "./components/search/Search"
import Home from "./pages/home/Home"

function App() {

  return (
    <>
      <Nav />
      <Search />
      <Routes>
        <Route index element={<Home />} /> 
      </Routes>
    </>
  )
}

export default App
