import React from 'react'
import './App.css'
import { Route } from 'react-router'
import HomePage from './Pages/homepage/homepage.component'
import ShopPage from './Pages/shop/shop.component'

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </div>
  )
}

export default App
