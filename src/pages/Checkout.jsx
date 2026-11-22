
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/checkout.css'
import { calculateDeliveryFee } from '../utils/businessRules'

function Checkout() {
  const { cartItems, cartTotal } = useCart()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const [errors, setErrors] = useState({})

const deliveryFee = calculateDeliveryFee(cartTotal)
const finalTotal = cartTotal + deliveryFee

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newErrors = {}

    if (form.name.trim().length < 3) {
      newErrors.name = 'Name must contain at least 3 characters.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (!/^[0-9]{11}$/.test(form.phone)) {
      newErrors.phone = 'Phone number must contain 11 digits.'
    }

    if (form.address.trim().length < 10) {
      newErrors.address = 'Please enter a complete delivery address.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem('skirtlish-order', JSON.stringify({
        customer: form,
        items: cartItems,
        subtotal: cartTotal,
        delivery: deliveryFee,
        total: finalTotal
      }))

      navigate('/confirmation')
    }
  }

  if (cartItems.length === 0) {
    return (
      <section className="checkout-page">
        <h1>YOUR BAG IS EMPTY.</h1>
        <Link to="/shop">GO SHOPPING</Link>
      </section>
    )
  }

  return (
    <section className="checkout-page">
      <h1>CHECKOUT<span>®</span></h1>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>DELIVERY DETAILS</h2>

          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <p className="form-error">{errors.name}</p>}

          <label>Email Address</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <p className="form-error">{errors.email}</p>}

          <label>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <p className="form-error">{errors.phone}</p>}

          <label>Delivery Address</label>
          <textarea name="address" value={form.address} onChange={handleChange} />
          {errors.address && <p className="form-error">{errors.address}</p>}

          <button type="submit">PLACE MY ORDER</button>
        </form>

        <div className="checkout-summary">
          <h2>YOUR ORDER</h2>

          {cartItems.map(item => (
            <p key={`${item.id}-${item.size}-${item.color}`}>
              {item.name} × {item.quantity}
              <br />
              <small>{item.size} / {item.color}</small>
            </p>
          ))}

          <hr />
          <p>Subtotal: Rs. {cartTotal.toLocaleString('en-PK')}</p>
          <p>Delivery: {deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}</p>
          <h3>Total: Rs. {finalTotal.toLocaleString('en-PK')}</h3>
        </div>
      </div>
    </section>
  )
}

export default Checkout
