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
const product_lists = document.getElementById("product-list")
const product_names = products.map((product) => {
    return `<li>${product.name}</li>`
})
product_lists.innerHTML = product_names.join('')

// MEDIUM..........................
const inStockItems = products
  .filter((product) => {
    return product.inStock
}).map(product => `
    <li class="product-item">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
    </li>
  `)

product_lists.innerHTML = inStockItems.join('');

// HARD............................
product_lists.innerHTML = ""

products.forEach((product) => {
    const lst = document.createElement("li")

    const heading = document.createElement("h3");
    heading.textContent = product.name;
    lst.append(heading)

    const p1 = document.createElement("p");
    p1.textContent = `$${product.price}`;
    lst.append(p1);

    if (!product.inStock) {
        lst.classList.add("out-of-stock")
    }

    const add_class = `category-${product.category.toLowerCase()}`.replace(/ /, "-")
    lst.classList.add(add_class)

    product_lists.append(lst)
})

const totalValue = products
  .filter((product) => {
    return product.inStock
  })
  .reduce((total, product) => {
    return total + product.price
  }, 0)
console.log(totalValue)
const displayTotal = document.createElement("div");
displayTotal.textContent = `Total Value of In-Stock Items: $${totalValue}`

const main = document.getElementById("app-container")
main.appendChild(displayTotal)