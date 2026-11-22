

import { Link } from 'react-router-dom'
import products from '../data/products'
import '../styles/home.css'

function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-top">
          <span>EST. 2026</span>
          <span>Y2K STREETWEAR / ISLAMABAD</span>
        </div>

        <div className="hero-content">
          <p className="hero-label">YOUR WARDROBE NEEDS AN ATTITUDE.</p>
          <h1>
            NOT YOUR
            <span>BASIC MINI.</span>
          </h1>
          <p className="hero-description">
            Loud fits. Low rises. Zero apologies.
            <br />
            Your next favourite skirt starts here.
          </p>

          <Link to="/shop" className="shop-button">
            SHOP THE DROP ↗
          </Link>
        </div>

        <div className="hero-bottom">
          <span>BE BOLD. BE EXTRA.</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>

        <div className="hero-sticker">TOO<br />COOL<br />2 CARE!</div>
      </section>

      <div className="ticker">
        <div>
          NEW ATTITUDE ✳ NEW ATTITUDE ✳ NEW ATTITUDE ✳
          NEW ATTITUDE ✳ NEW ATTITUDE ✳
        </div>
      </div>

      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="section-label">THE GOOD STUFF</p>
            <h2>FRESH OFF<br />THE <span>RACK.</span></h2>
          </div>

          <Link to="/shop" className="view-all">
            VIEW ALL PRODUCTS ↗
          </Link>
        </div>

        <div className="featured-grid">
          {featuredProducts.map((product, index) => (
            <Link
              to={`/product/${product.id}`}
              className="featured-card"
              key={product.id}
            >
              <div className={`featured-visual visual-${index + 1}`}>
  <img
    src={product.image}
    alt={product.name}
    className="featured-photo"
  />

  <span className="product-number">0{index + 1}</span>

  {product.stock === 0 && (
    <span className="sold-out">SOLD OUT</span>
  )}
</div>

              <div className="featured-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
                <strong>Rs. {product.price.toLocaleString('en-PK')}</strong>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="attitude-section">
        <p>THIS IS NOT A PHASE.</p>
        <h2>MAKE<br />THEM <span>STARE.</span></h2>
        <Link to="/shop" className="attitude-button">
          FIND YOUR MINI ↗
        </Link>
        <span className="attitude-star">✳</span>
      </section>

      <section className="home-bottom">
        <h2>YOUR RULES.<br />YOUR <span>STYLE.</span></h2>
        <p>SKIRTLISH® — NOT MADE TO BLEND IN.</p>
      </section>

    </div>
  )
}

export default Home
