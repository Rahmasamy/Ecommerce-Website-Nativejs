import { removeData } from "./removeData.js";


// Function to convert rating to stars
function convertRatingToStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return '★'.repeat(fullStars) + '☆'.repeat(halfStar) + '☆'.repeat(emptyStars);
}



export function displayDataOfTable(products) {
    let productsContainer = document.querySelector('.CartsofCartPage .single-cart');
    const productsTable = document.getElementById('productsTable');
    let productsbody = document.querySelector('tbody');
    console.log(products);

    products.forEach(product => {
        // Create a table row for each product
        const productRow = document.createElement('tr');
       
        // Create and append the product image cell
        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.title;
        img.style.width = '50px'; // Adjust image size as needed
        imgCell.appendChild(img);
        productRow.appendChild(imgCell);

        // Create and append the product title cell
        const titleCell = document.createElement('td');
        titleCell.textContent = product.title;
        productRow.appendChild(titleCell);

        // Create and append the product description cell
        const descCell = document.createElement('td');
        descCell.textContent = product.desc;
        productRow.appendChild(descCell);

        // Fetch rating and convert to stars
        const ratingCell = document.createElement('td');
        const starRating = convertRatingToStars(product.rating);
        ratingCell.innerHTML = starRating;
        productRow.appendChild(ratingCell);

        // Create and append the product price cell
        const priceCell = document.createElement('td');
        priceCell.textContent = `$${product.price}`;
        productRow.appendChild(priceCell);

        // Create and append the product quantity cell
        const quantCell = document.createElement('td');
        quantCell.textContent = `${product.quant}X`;
        productRow.appendChild(quantCell);

        // Create and append the product delete
        const deleteCell = document.createElement('td');
        deleteCell.innerHTML = `<div class="trash"><i class="fas fa-trash"></i></div>`;
        deleteCell.addEventListener('click', () => {
            console.log("Deleting item...");
            removeData(product.id);
            const productsJson = localStorage.getItem('products');
            const products = JSON.parse(productsJson);
            let totalPrice = 0;
            products.forEach(product => {
            totalPrice += product.price * product.quant;

            });
            console.log(totalPrice);
            const totalSum = document.getElementById('totalSumAfterRemove');
            totalSum.style.color='white';
            const total=document.getElementById('totalSum')
            console.log(`Total Price: $${totalPrice.toFixed(2)}`);
    
            const totalPriceDiv = document.createElement('div');
            totalPriceDiv.id = 'total-price';
           
            totalPriceDiv.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
            totalSum.appendChild(totalPriceDiv);
            total.style.display='none';




        });
        productRow.appendChild(deleteCell);

        // // Create and append the product operations
        // const operationsCell = document.createElement('td');
        // operationsCell.textContent = `+  - `;
        // operationsCell.classList.add('takeremaining-width');
        // productRow.appendChild(operationsCell);

        // Append the product row to the table
        // productsTable.appendChild(productRow);
        if(productsbody != null){
            productsbody.appendChild(productRow);
        }
       



    });
    
   

}
