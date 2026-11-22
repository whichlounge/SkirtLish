
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">SKIRTLISH<span>®</span></Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop All</Link>
        <Link to="/cart">Bag</Link>
      </div>

      <div className="nav-tag">NOT YOUR BASIC MINI.</div>
    </nav>
  )
}

export default Navbar
