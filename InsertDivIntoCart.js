
// Function to convert rating to stars
import { displayDataOfTable } from './displayDataOfTable.js';
// import { removeData } from './removeData.js';
function convertRatingToStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return '★'.repeat(fullStars) + '☆'.repeat(halfStar) + '☆'.repeat(emptyStars);
}

document.addEventListener('DOMContentLoaded', (event) => {
    // Get the products from local storage
    let totalPrice = 0;
    const productsJson = localStorage.getItem('products');
    console.log(productsJson);
    if (productsJson) {
        try {
            // Parse the JSON string into an array of products
           
            const products = JSON.parse(productsJson);
           displayDataOfTable(products);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    } else {
        console.error('No products found in local storage');
    }
    const btnClear = document.getElementById('btn-clear');
    if (productsJson) {

        const products = JSON.parse(productsJson);


        
        products.forEach(product => {
            totalPrice += product.price * product.quant;
        });
         
        const totalSum = document.getElementById('totalSum');
        
        console.log(`Total Price: $${totalPrice.toFixed(2)}`);

        const totalPriceDiv = document.createElement('div');
        totalPriceDiv.id = 'total-price';
       
        totalPriceDiv.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        console.log(totalSum);
        if(totalSum){
            totalSum.appendChild(totalPriceDiv);
        }
        if(btnClear){
            btnClear.addEventListener('click', () => {
                totalPriceDiv.innerHTML = '';
            })
        }
       
       
    } else {
        console.error('No products found in local storage');
    }
    const cartsOfCartPage=document.querySelector('.CartsofCartPage');
   
    if (btnClear != null) {
      
        btnClear.addEventListener('click', () => {
            if (localStorage.getItem('products')) {
                localStorage.removeItem('products');
                console.log('Item "products" has been removed from localStorage.');
            } else {
                console.log('Item "products" does not exist in localStorage.');
            }
            if (cartsOfCartPage) {
                cartsOfCartPage.remove();
                totalPrice=0;
            }
        });
    }
});


