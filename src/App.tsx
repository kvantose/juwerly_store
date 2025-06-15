import './App.css'
import Catalog from './components/Catalog/Catalog'
import Home from './components/Home/Home'
import Basket from './components/Basket/Basket'
import Profile from './components/Profile/Profile'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import AboutUs from './components/AboutUs/AboutUs'
function App() {
  const [open, setOpen] = useState(false);
  const [basket, setBasket] = useState<number[]>([])
  const [likes, setLikes] = useState<number[]>([]);

  return (
    <>
      <Routes>
        <Route path="/" element={
          <Home
            open={open}
            setOpen={setOpen}
          />} />
        <Route path='catalog' element={
          <Catalog
            open={open}
            setOpen={setOpen}
          />}
        />
        <Route path='basket' element={
          <Basket
            open={open}
            setOpen={setOpen}
          />}
        />
        <Route path='about' element={
          <AboutUs
            open={open}
            setOpen={setOpen}
            likes={likes}
            setLikes={setLikes}
            basket={basket}
            setBasket={setBasket} />} />
        <Route path='profile' element={
          <Profile
            open={open}
            setOpen={setOpen}
            likes={likes}
            setLikes={setLikes}
            basket={basket}
            setBasket={setBasket} />} />
      </Routes>
    </>
  )
}

export default App
