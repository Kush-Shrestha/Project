let products = []; // Store products globally

async function fetchProducts(){
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.log("Error Alert!", error);
    }
}

// Function to filter products based on price range
function filterProducts(priceRange) {
    let filteredProducts = [...products];
    
    if (priceRange !== 'all') {
        if (priceRange === '0-50') {
            filteredProducts = products.filter(prod => prod.price <= 50);
        } else if (priceRange === '50-100') {
            filteredProducts = products.filter(prod => prod.price > 50 && prod.price <= 100);
        } else if (priceRange === '100-200') {
            filteredProducts = products.filter(prod => prod.price > 100 && prod.price <= 200);
        } else if (priceRange === '200+') {
            filteredProducts = products.filter(prod => prod.price > 200);
        }
    }

    return filteredProducts;
}

// Function to display products
function displayProducts(productsToDisplay) {
    // Create filter section
    const filterSection = `
        <div class="filter-section">
            <h3>Filter by Price</h3>
            <select id="priceFilter">
                <option value="all">All Prices</option>
                <option value="0-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200+">Over $200</option>
            </select>
        </div>
    `;

    const productsHTML = productsToDisplay.map((prod)=>{
        return `
        <div class="card">
            <img src="${prod.image}" alt="${prod.title}" height="250px" width="200px">
            <h3>${prod.title}</h3>
            <p>$${prod.price.toFixed(2)}</p>
            <p>Fast Delivery</p>
            <button>Add to Cart</button>
        </div>` 
    }).join('');
    
    document.getElementById("main-content").innerHTML = filterSection + productsHTML;

    // Add event listener for price filter
    const priceFilter = document.getElementById("priceFilter");
    if (priceFilter) {
        priceFilter.addEventListener("change", (e) => {
            const filteredProducts = filterProducts(e.target.value);
            displayProducts(filteredProducts);
        });
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});