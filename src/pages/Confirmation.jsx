
import { Link, Navigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/checkout.css'

function Confirmation() {
  const { clearCart } = useCart()

  const savedOrder = localStorage.getItem('skirtlish-order')

  if (!savedOrder) {
    return <Navigate to="/shop" replace />
  }

  const order = JSON.parse(savedOrder)

  function finishOrder() {
    clearCart()
    localStorage.removeItem('skirtlish-order')
  }

  return (
    <section className="checkout-page confirmation-page">
      <div className="confirmation-box">
        <h1>ORDER CONFIRMED<span>!</span></h1>
        <h2>YOU'VE GOT GREAT TASTE.</h2>
        <p>Thank you, {order.customer.name}!</p>
        <p>Your SKIRTLISH order has been placed successfully.</p>

        <h2>ORDER SUMMARY</h2>

        {order.items.map(item => (
          <p key={`${item.id}-${item.size}-${item.color}`}>
            {item.name} × {item.quantity} — Rs. {(item.price * item.quantity).toLocaleString('en-PK')}
          </p>
        ))}

        <hr />

        <p>Subtotal: Rs. {order.subtotal.toLocaleString('en-PK')}</p>
        <p>Delivery: {order.delivery === 0 ? 'FREE' : `Rs. ${order.delivery}`}</p>
        <h2>Total: Rs. {order.total.toLocaleString('en-PK')}</h2>

        <p>Delivery Address: {order.customer.address}</p>
        <p className="confirmation-note">
          This is a demonstration order. No real payment or delivery has been processed.
        </p>

        <Link to="/" className="checkout-btn" onClick={finishOrder}>
          BACK TO HOME
        </Link>
      </div>
    </section>
  )
}

export default Confirmation
