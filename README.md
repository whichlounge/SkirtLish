
# SKIRTLISH — Not Your Basic Mini.

A Y2K-inspired online mini-skirt boutique built using React and Vite.

## Live Website
https://skirt-lish.vercel.app/

## GitHub Repository
https://github.com/whichlounge/SkirtLish

## Business Overview
SKIRTLISH is an online fashion boutique focused on edgy Y2K and 2000s-inspired mini skirts.

- Target audience: Ages 18–30
- Operating area: Islamabad and Rawalpindi, Pakistan
- Product catalogue: 12 mini skirts
- Main user task: Browse products, select options, add items to cart, and complete a simulated checkout.

## Technologies Used
- React
- JavaScript
- Vite
- React Router DOM
- HTML
- CSS
- Browser localStorage
- Node.js test runner

## Main Features
- Home page and product catalogue
- Product search, filtering, and sorting
- Individual product detail pages
- Size and colour selection
- Shopping cart with quantity controls
- Checkout form with validation
- Order confirmation page
- Persistent cart using localStorage
- Loading, error, retry, and empty-result states
- Responsive layout for mobile and desktop

## Business Rules
1. Customers cannot purchase more than the available stock.
2. Customers must select a valid size and colour before adding a product to the cart.
3. Orders of Rs. 5,000 or more receive free delivery. Orders below Rs. 5,000 have a Rs. 250 delivery fee.

## Testing
Business rules are tested using:
- `node:test`
- `node:assert/strict`

Run tests using:

```bash
node --test
```

Build the production version using:

```bash
npm run build
```

## Installation and Setup

Clone the repository:

```bash
git clone https://github.com/whichlounge/SkirtLish.git
```

Move into the project folder:

```bash
cd SkirtLish
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Checkout Notice
This project uses a simulated checkout process for academic purposes. It does not process real payments.

## Deployment
The website is deployed using Vercel.

https://skirt-lish.vercel.app/
