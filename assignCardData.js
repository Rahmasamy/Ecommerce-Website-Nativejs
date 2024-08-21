// import CardOperations from './CardOperations.js';

// export function assignCardData(product) {
//     let Quantity;
//     const cardOps = CardOperations();
//     if (cardOps.getFinalNum() != 0) {
//        Quantity=cardOps.getFinalNum();
//     }
//     var obj= {};
//     const img = document.getElementById('imagecart');
//     const title = document.getElementById('titlecart');
//     const descrip = document.getElementById('descriptioncart');
//     const rate = document.getElementById('ratingcart');
//     const price = document.getElementById('pricecart');
//     const cart=document.getElementById('cart');
    
   
  
//     if(Quantity) {
//         img.src = product.img;
//         title.innerHTML = product.title;
//         descrip.innerHTML = product.description;
//         rate.innerHTML = `rating: ${product.rating}`;
//         price.innerHTML = `$${product.price}`;
//          obj = {
//             id:product.id,
//             img:product.img,
//             title:product.title,
//             desc:product.description,
//             rating:product.rating,
//             price:product.price,
//             quant:Quantity,
//             reviews:product.reviews
//         }
//     }
//     else {
//         cart.style.display='none';
//         console.error("the product is empty")
//     }
  

//       let products = JSON.parse(localStorage.getItem('products')) || [];  
      
//       if(Object.keys(obj).length !== 0){
//         products.push(obj);
//         localStorage.setItem('products', JSON.stringify(products));
//       }  
     
     
      

// }

import CardOperations from './CardOperations.js';

export function assignCardData(product) {
    let Quantity;
    const cardOps = CardOperations();
    if (cardOps.getFinalNum() != 0) {
        Quantity = cardOps.getFinalNum();
    }
    var obj = {};
    const img = document.getElementById('imagecart');
    const title = document.getElementById('titlecart');
    const descrip = document.getElementById('descriptioncart');
    const rate = document.getElementById('ratingcart');
    const price = document.getElementById('pricecart');
    const cart = document.getElementById('cart');

    if (Quantity) {
        img.src = product.img;
        title.innerHTML = product.title;
        descrip.innerHTML = product.description;
        rate.innerHTML = `rating: ${product.rating}`;
        price.innerHTML = `$${product.price}`;
        obj = {
            id: product.id,
            img: product.img,
            title: product.title,
            desc: product.description,
            rating: product.rating,
            price: product.price,
            quant: Quantity,
            reviews: product.reviews
        };
    } else {
        cart.style.display = 'none';
        console.error("the product is empty");
    }

    let products = JSON.parse(localStorage.getItem('products')) || [];

    if (Object.keys(obj).length !== 0) {
        // Check if the product already exists in the array
        const existingProductIndex = products.findIndex(p => p.id === product.id);
        if (existingProductIndex !== -1) {
            // Update the existing product's quantity
            products[existingProductIndex].quant += Quantity;
        } else {
            // Add the new product to the array
            products.push(obj);
        }
        localStorage.setItem('products', JSON.stringify(products));
    }
}
