
import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('skirtlish-cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('skirtlish-cart', JSON.stringify(cartItems))
  }, [cartItems])

  function addToCart(product, size, color, quantity) {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(
        item =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
      )

      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id &&
          item.size === size &&
          item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [
        ...currentItems,
        {
          ...product,
          size,
          color,
          quantity
        }
      ]
    })
  }

  function removeFromCart(id, size, color) {
    setCartItems(currentItems =>
      currentItems.filter(
        item =>
          !(item.id === id && item.size === size && item.color === color)
      )
    )
  }

  function updateQuantity(id, size, color, quantity) {
    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity }
          : item
      )
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
