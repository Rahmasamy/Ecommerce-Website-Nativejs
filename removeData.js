

// removeData.js

import { displayDataOfTable } from "./displayDataOfTable.js";

export function removeData(productId) {
      
        // Retrieve cart data from local storage
        const cart = JSON.parse(localStorage.getItem('products')) || [];
        let productsbody = document.querySelector('tbody');
        const retrievedCart = cart.filter((item) => item.id != productId);
        console.log(retrievedCart);
        productsbody.innerHTML='';
        displayDataOfTable(retrievedCart);
        localStorage.setItem("products", JSON.stringify(retrievedCart));
        
}
