
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { loadProducts } from '../utils/mockLoader'
import '../styles/shop.css'

function Shop() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('default')
  const [demoFailure, setDemoFailure] = useState(false)

  async function getProducts() {
    setLoading(true)
    setError('')

    try {
      const data = await loadProducts(demoFailure)
      setProducts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [demoFailure])

  const categories = [
    'All',
    ...new Set(products.map(product => product.category))
  ]

 let filteredProducts = products.filter(product =>
  (
    (product.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (product.category || '').toLowerCase().includes(search.toLowerCase())
  ) &&
  (category === 'All' || product.category === category)
)

  if (sort === 'low') {
    filteredProducts.sort((a, b) => a.price - b.price)
  } else if (sort === 'high') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (sort === 'name') {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
  }

  if (loading) {
    return (
      <section className="shop-page shop-empty">
        <h2>LOADING THE DROP...</h2>
      </section>
    )
  }
if (error) {
  return (
    <section className="shop-page shop-empty">
      <h2>OOPS! SOMETHING WENT WRONG.</h2>
      <p>{error}</p>

      <button onClick={getProducts}>TRY AGAIN</button>

      <button onClick={() => setDemoFailure(false)}>
        TURN DEMO FAILURE OFF
      </button>
    </section>
  )
}
  return (
    <section className="shop-page">

      <div className="shop-banner">
        <p>THE SKIRTLISH COLLECTION</p>
        <h1>SHOP ALL SKIRTS<span>®</span></h1>
        <p>Loud fits. Low rises. Zero apologies.</p>
      </div>

      <div className="shop-content">

        <button
          onClick={() => setDemoFailure(!demoFailure)}
          className="demo-failure-btn"
        >
          {demoFailure
            ? 'TURN DEMO FAILURE OFF'
            : 'DEMO: SIMULATE LOAD FAILURE'}
        </button>

        <div className="shop-toolbar">
          <div>
            <p className="shop-count">THE LATEST DROP</p>
            <h2>FIND YOUR FIT.</h2>
          </div>

          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="default">Sort: Default</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>

        <input
          className="shop-search"
          type="text"
          placeholder="SEARCH YOUR NEXT FAVOURITE..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="category-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={category === cat ? 'active-filter' : ''}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="shop-empty">
            <h2>NO SKIRTS FOUND.</h2>
            <p>Try another search or category.</p>

            <button onClick={() => {
              setSearch('')
              setCategory('All')
              setSort('default')
            }}>
              CLEAR FILTERS
            </button>
          </div>
        ) : (
          <div className="shop-grid">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Shop
