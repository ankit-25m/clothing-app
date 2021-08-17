import React from 'react'
import './App.css'
import { Route } from 'react-router'
import HomePage from './Pages/homepage/homepage.component'
import ShopPage from './Pages/shop/shop.component'
import Header from './components/header/header.component'
function App() {
  return (
    <div>
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  )
}

export default App
