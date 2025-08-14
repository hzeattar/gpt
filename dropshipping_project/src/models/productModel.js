// src/models/productModel.js
const products = [
  // Example product list with base price and name
  { id: 1, name: 'Product 1', basePrice: 100, stock: 50 },
  { id: 2, name: 'Product 2', basePrice: 150, stock: 30 }
];

function getAllProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === id);
}

function addProduct(product) {
  products.push(product);
}

module.exports = {
  getAllProducts,
  getProductById,
  addProduct
};
