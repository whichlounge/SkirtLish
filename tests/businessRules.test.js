import test from 'node:test'
import assert from 'node:assert/strict'
import {
  calculateDeliveryFee,
  canPurchase,
  calculateOrderTotal
} from '../src/utils/businessRules.js'

const product = {
  id: 'skirt-01',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  colors: ['Blue', 'Black'],
  stock: 5
}

test('Valid product selection can be purchased', () => {
  assert.equal(canPurchase(product, 'M', 'Blue', 2), true)
})

test('Unavailable stock cannot be purchased', () => {
  assert.equal(canPurchase({ ...product, stock: 0 }, 'M', 'Blue', 1), false)
})

test('Invalid size cannot be purchased', () => {
  assert.equal(canPurchase(product, 'XXL', 'Blue', 1), false)
})

test('Quantity cannot exceed available stock', () => {
  assert.equal(canPurchase(product, 'M', 'Blue', 6), false)
})

test('Delivery is free at exactly Rs. 5000', () => {
  assert.equal(calculateDeliveryFee(5000), 0)
})

test('Delivery costs Rs. 250 below Rs. 5000', () => {
  assert.equal(calculateDeliveryFee(4999), 250)
})

test('Order total includes delivery below Rs. 5000', () => {
  assert.equal(calculateOrderTotal(4999), 5249)
})