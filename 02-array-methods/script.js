// script.js
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 150, inStock: false },
    { id: 3, name: "The Great Gatsby", category: "Books", price: 15, inStock: true },
    { id: 4, name: "Coffee Maker", category: "Home Goods", price: 60, inStock: true },
    { id: 5, name: "To Kill a Mockingbird", category: "Books", price: 12, inStock: false },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 250, inStock: true },
];

// EASY............................
const inStockProducts = products.filter((product) => {
    return product.inStock
})
console.log("1. Products that are in stock:")
console.log(inStockProducts)

const bookProducts = products.filter((product) => {
    return product.category === "Books"
})
console.log("2. Products in category: books")
console.log(bookProducts)

// MEDIUM..........................
const productNames = products.map((product) => {
    return product.name
})
console.log("1. Product names:")
console.log(productNames)

const productPrices = products.map((product) => {
    return `${product.name} - $${product.price}`
})
console.log(`2. ${productPrices}`)

// HARD............................
const totalPrice = products.reduce((total, curr) => {
    return total + curr.price
}, 0)
console.log(`1. Total price of all products: ${totalPrice}`)


console.log("2. Names of in-stock products in ELectronics category:")
console.log(inStockProducts.filter((product) => {
    return product.category === "Electronics"
}).map((product) => {
    return product.name
}))
