import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Checkout from "./pages/Checkout"
import Navbar from "./components/navbar"
import "./App.css"
import AuthProvider from "./context/AuthContext"
import ProductDetails from "./pages/ProductDetails"

function App() {
  return (
    <AuthProvider>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/auth' element={<Auth/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/products/:id' element={<ProductDetails/>}></Route>
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App

