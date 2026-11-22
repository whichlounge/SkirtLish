
import products from '../data/products'

export function loadProducts(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Unable to load products. Please try again.'))
      } else {
        resolve(products)
      }
    }, 1000)
  })
}
