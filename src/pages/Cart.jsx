
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/cart.css'
import { calculateDeliveryFee } from '../utils/businessRules'


function Cart() {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart()

const deliveryFee = calculateDeliveryFee(cartTotal)
const finalTotal = cartTotal + deliveryFee

  if (cartItems.length === 0) {
    return (
      <section className="cart-page">
        <h1>YOUR BAG IS EMPTY.</h1>
        <p>Looks like you need a new favourite.</p>
        <Link to="/shop" className="cart-shop-btn">SHOP NOW</Link>
      </section>
    )
  }

  return (
    <section className="cart-page">
      <h1>YOUR BAG<span>®</span></h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={`${item.id}-${item.size}-${item.color}`}>
<div className="cart-item-image">
  <img src={item.image} alt={item.name} />
</div>
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>Size: {item.size}</p>
                <p>Colour: {item.color}</p>
                <p>Rs. {item.price.toLocaleString('en-PK')}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(
                      item.id, item.size, item.color,
                      Math.max(1, item.quantity - 1)
                    )}
                  >−</button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(
                      item.id, item.size, item.color,
                      Math.min(item.stock, item.quantity + 1)
                    )}
                    disabled={item.quantity >= item.stock}
                  >+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.size, item.color)}
                >
                  REMOVE
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>ORDER SUMMARY</h2>
          <p>Subtotal: Rs. {cartTotal.toLocaleString('en-PK')}</p>
          <p>Delivery: {deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`}</p>
          <hr />
          <h3>Total: Rs. {finalTotal.toLocaleString('en-PK')}</h3>
          <p className="delivery-note">
            {cartTotal >= 5000
              ? 'You unlocked free delivery!'
              : `Spend Rs. ${5000 - cartTotal} more for free delivery.`}
          </p>
          <Link to="/checkout" className="checkout-btn">
            PROCEED TO CHECKOUT
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cart
