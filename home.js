const allProducts = document.getElementById('products');
const closeIcon=document.createElement('i');
closeIcon.classList.add('fas', 'fa-times');

closeIcon.classList.add('close-icon');
closeIcon.style.cursor = 'pointer';


function convertRatingToStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return '★'.repeat(fullStars) + '☆'.repeat(halfStar) + '☆'.repeat(emptyStars);
}


fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {

                let random;
                
             
              
              setInterval(() => {
                 allProducts.innerHTML='';
                 random = Math.floor(Math.random()*26);
            
                products=data.products.slice(random,random+3);

               
                
                //  products= products.slice(0,3);
                 products.forEach(product => {
                    // create productBox
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product shadow-div';
                    productDiv.id = `product-${product.id}`;
                    allProducts.appendChild(productDiv);

                    // create image
                    const img = document.createElement('img');
                    img.src = product.thumbnail;
                    img.alt = product.title;
                    productDiv.appendChild(img);

                    // create title
                    const title = document.createElement('h3');
                    title.className = 'title';
                    title.textContent = product.title;
                    productDiv.appendChild(title);

                    // create price
                    const price = document.createElement('p');
                    price.className = 'price';
                    price.textContent = `$${product.price}`;
                    productDiv.appendChild(price);

                    // Display the mini cart for a single product.
                    productDiv.addEventListener('click',() => {
                        fetch(`https://dummyjson.com/products/${product.id}`)
                        .then(res => res.json())
                        .then(data => {
                        
                        const popUpElementContainer = document.createElement('div');
                        popUpElementContainer.classList.add('popUpElementContainerStyle');

                        // create div container (child)
                        const popUpElement = document.createElement('div');
                        popUpElement.classList.add('popElementStyle');
                        popUpElementContainer.appendChild(popUpElement);

                        // create div singleProduct
                        const singleProductImgContainer = document.createElement('div');
                        singleProductImgContainer.classList.add('single-product-container');

                        // create img
                        const singleProductImg = document.createElement('img');
                        singleProductImg.setAttribute("src", `${data.images[0]}`);
                        singleProductImgContainer.appendChild(singleProductImg);

                        // create div for data of image
                        const singleProductDetailsContainer = document.createElement('div');

                        // create h2 title
                        const singleProductTitle=document.createElement('h2');
                        const singleProductPrice = document.createElement('h2');
                        singleProductPrice.className = "price";
                        singleProductTitle.innerHTML=data.title;
                        singleProductPrice.innerHTML = `Price : ${data.price}$`;

                        const rating=document.createElement('h2');
                        rating.className="Popuprating";

                        const starRating = convertRatingToStars(data.rating);
                        rating.innerHTML = starRating;

                         // create h1 see more
                         const SeeMoreicon = document.createElement('h1');
                         SeeMoreicon.innerHTML = `View Details <i class="fa-solid fa-arrow-right rightArrow"></i>`;
                         SeeMoreicon.className = "seeMore";
                        
                        singleProductDetailsContainer.classList.add('detailscontainer')
                        singleProductDetailsContainer.appendChild(singleProductTitle);
                        singleProductDetailsContainer.appendChild(singleProductPrice);
                        singleProductDetailsContainer.appendChild(rating);
                        singleProductDetailsContainer.appendChild(SeeMoreicon);
                        popUpElement.appendChild(singleProductImgContainer);
                        popUpElement.appendChild(singleProductDetailsContainer);


                       

                       
            
                        popUpElement.appendChild(closeIcon);
                       

                        SeeMoreicon.addEventListener('click', () => {
                            window.location.href = `singleProduct.html?id=${data.id}`;
                        });
                        closeIcon.addEventListener('click',() => {
                          popUpElement.style.display="none";
                          popUpElementContainer.style.display="none";
                        })

                        document.body.appendChild(popUpElementContainer);

                        });
                    })
                });
                    
                 
              },3000)

              


              
            })
            .catch(error => console.error('Error fetching data:', error));

