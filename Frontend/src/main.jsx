import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './index.css'
import Navbar from './LandingPage/navbar.jsx'
import Fotter from './LandingPage/fotter.jsx'
import Homepage from './LandingPage/home/homepage.jsx'
import Signup from './LandingPage/signup/signup.jsx'
import AboutPage from './LandingPage/about/aboutpage.jsx'
import Hero2 from './LandingPage/support/hero.jsx'
import Productpage from './LandingPage/products/productspage.jsx'
import Pricingpage from './LandingPage/pricing/pricingpage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

  <Navbar></Navbar>
  <Routes>

    <Route path='/' element={<Homepage></Homepage>}></Route>
    <Route path='/signup' element={<Signup></Signup>}></Route>
    <Route path='/about' element={<AboutPage></AboutPage>}></Route>
    <Route path='/products' element={<Productpage></Productpage>}></Route>
    <Route path='/pricing' element={<Pricingpage></Pricingpage>}></Route>
    <Route path='/support' element={<Hero2></Hero2>}></Route>
    <Route path='*' element={<Homepage></Homepage>}></Route>
  </Routes>
  <Fotter></Fotter>
  </BrowserRouter>
)
