
export function calculateDeliveryFee(subtotal) {
  if (subtotal >= 5000) {
    return 0
  }

  return 250
}

export function canPurchase(product, size, color, quantity) {
  if (!product) {
    return false
  }

  if (!product.sizes.includes(size)) {
    return false
  }

  if (!product.colors.includes(color)) {
    return false
  }

  if (product.stock <= 0) {
    return false
  }

  if (quantity < 1 || quantity > product.stock) {
    return false
  }

  return true
}

export function calculateOrderTotal(subtotal) {
  const delivery = calculateDeliveryFee(subtotal)

  return subtotal + delivery
}
