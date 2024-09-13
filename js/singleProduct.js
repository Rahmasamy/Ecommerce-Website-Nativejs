import { fetchProduct } from './fetchProduct.js';

import { displayProduct } from './assignDataOfUser.js';

import CreateReviews  from './Reviews.js';


const imgConatiner=document.getElementsByClassName('image')[0];

document.addEventListener('DOMContentLoaded', async (event) => {
    imgConatiner.style.display="block";
    // Check if we are on the singleProduct.html page
    if (window.location.pathname.includes('singleProduct.html')) {
        // Extract product ID from the query string
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        
        if (productId) {
            // Display the single product that was clicked.
            const product = await fetchProduct(productId);
            
            if (product) {
                displayProduct(product);
                CreateReviews(product);
            }
        } else {
            console.error('Product ID not found in the URL');
        }
    }
});



