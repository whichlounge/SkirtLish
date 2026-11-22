
# SKIRTLISH — Design Decisions

## 1. Product Discovery and Browsing

- **Problem:** Customers need an easy way to find specific products in a large catalogue.
- **Decision:** Added product search, category filtering, and sorting.
- **Alternative:** Display all products without search or filters.
- **Reason:** Makes product discovery faster and easier.
- **Trade-off:** Additional controls make the shop interface slightly more complex.
- **Code location:** `src/pages/Shop.jsx`
- **Evidence:** Shop page screenshots.

## 2. Product Selection and Cart Interaction

- **Problem:** Customers may try to purchase products without selecting required options or may exceed available stock.
- **Decision:** Added size and colour selection, quantity controls, and stock validation.
- **Alternative:** Allow customers to add products directly to the cart.
- **Reason:** Prevents invalid purchases and improves the shopping experience.
- **Trade-off:** Customers must complete selections before adding products.
- **Code location:** `src/pages/ProductDetails.jsx`, `src/utils/businessRules.js`
- **Evidence:** Product details and cart screenshots.

## 3. Checkout and Order Clarity

- **Problem:** Customers need to understand delivery charges and provide valid information before placing an order.
- **Decision:** Added a validated checkout form and automatically calculated delivery charges.
- **Alternative:** Use a basic checkout form without validation or a cost breakdown.
- **Reason:** Reduces incomplete information and makes the final order cost clear.
- **Trade-off:** Checkout requires additional customer input.
- **Code location:** `src/pages/Checkout.jsx`, `src/utils/businessRules.js`
- **Evidence:** Checkout and order confirmation screenshots.

## 4. Interaction and State Management

- React state manages product selections, search, filters, cart updates, and form inputs.
- Shared cart state is managed using React Context.
- Cart information is saved in localStorage so it remains available after refreshing.
- Loading and error states provide feedback while products are being loaded.

## 5. Information Hierarchy

- The Home page introduces the brand and highlights featured products.
- The Shop page prioritizes search, filters, sorting, and product cards.
- Product Details prioritizes product information and purchase options.
- The Cart and Checkout pages clearly display order information and totals.

## 6. Mobile and Responsive Design

- CSS media queries adapt layouts for smaller screens.
- Product grids and navigation adjust to available screen width.
- Interactive controls remain accessible on mobile.
- The layout was tested at 390px and 1280px viewport widths.
