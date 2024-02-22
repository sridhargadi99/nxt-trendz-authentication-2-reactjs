// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Cart extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        <div className="cart-container">
          <img
            className="cart-image-style"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
          />
        </div>
      </>
    )
  }
}

export default Cart
