
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img
          src={product.image}
          alt={product.name}
          className="product-photo"
        />

        <span className="product-badge">
          {product.stock > 0 ? 'SKIRTLISH PICK' : 'SOLD OUT'}
        </span>
      </Link>

      <div className="product-card-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>

        <strong>Rs. {product.price.toLocaleString('en-PK')}</strong>
      </div>

      <Link to={`/product/${product.id}`} className="product-view">
        VIEW PRODUCT ↗
      </Link>
    </div>
  )
}

export default ProductCard
