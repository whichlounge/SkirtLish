
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import '../styles/product.css'
import { canPurchase } from '../utils/businessRules'

function ProductDetails() {
  const { id } = useParams()
  const product = products.find(item => item.id === id)
  const { addToCart } = useCart()

  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [message, setMessage] = useState('')

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>404 — ITEM NOT FOUND</h1>
        <p>This mini doesn't exist in our collection.</p>
        <Link to="/shop">BACK TO SHOP ↗</Link>
      </div>
    )
  }

  function handleAddToCart() {
    if (!canPurchase(product, selectedSize, selectedColor, quantity)) {
      setMessage('Please select valid options and check available stock.')
      return
    }

    addToCart(product, selectedSize, selectedColor, quantity)
    setMessage('Added to your bag successfully!')
  }

  return (
    <div className="product-details-page">
      <Link to="/shop" className="back-to-shop">
        ← BACK TO SHOP
      </Link>

      <div className="product-details-layout">

        <div className="product-detail-visual">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-photo"
          />

          {product.stock === 0 && (
            <strong>SOLD OUT</strong>
          )}
        </div>

        <div className="product-detail-info">
          <p className="detail-category">{product.category} COLLECTION</p>
          <h1>{product.name}</h1>

          <h2>Rs. {product.price.toLocaleString('en-PK')}</h2>

          <p className="detail-description">
            {product.description}
          </p>

          <p className="stock-message">
            {product.stock > 0
              ? `${product.stock} pieces available`
              : 'Currently sold out'}
          </p>

          <div className="option-group">
            <h3>SELECT SIZE</h3>
            <div className="option-buttons">
              {product.sizes.map(size => (
                <button
                  key={size}
                  className={selectedSize === size ? 'selected-option' : ''}
                  onClick={() => {
                    setSelectedSize(size)
                    setMessage('')
                  }}
                  disabled={product.stock === 0}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <h3>SELECT COLOUR</h3>
            <div className="option-buttons">
              {product.colors.map(color => (
                <button
                  key={color}
                  className={selectedColor === color ? 'selected-option' : ''}
                  onClick={() => {
                    setSelectedColor(color)
                    setMessage('')
                  }}
                  disabled={product.stock === 0}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="option-group">
            <h3>QUANTITY</h3>
            <div className="quantity-control">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={product.stock === 0}
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                disabled={product.stock === 0 || quantity >= product.stock}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <button
            className="add-to-bag"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'SOLD OUT' : 'ADD TO BAG ↗'}
          </button>

          {message && (
            <p className="product-feedback" role="status">
              {message}
            </p>
          )}

          <div className="product-extra-info">
            <p>✳ Available sizes: XS – XL</p>
            <p>✳ Free delivery on orders above Rs. 5,000</p>
            <p>✳ Islamabad & Rawalpindi delivery</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetails
