

const all = document.getElementById('all-productss');
const searchinput = document.getElementById('searching');
const singleProductContentId = document.getElementById('singlecontantid');
const cart = document.getElementById('cart');
const imgContent = document.getElementById('img-content');
const closeIcon=document.createElement('i');
closeIcon.classList.add('fas', 'fa-times');

closeIcon.classList.add('close-icon');
closeIcon.style.cursor = 'pointer';
let output = [];

searchinput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();
    output.forEach(matches => {
        const isVisible = matches.product_name.toLowerCase().includes(value);
        matches.Element.classList.toggle("hide", !isVisible);
    });
});

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        const allproductss = data.products;

        output = allproductss.map(product => {
         
            const allproductDiv = document.createElement('div');
            allproductDiv.className = 'productBox';
            all.appendChild(allproductDiv);

            
            const allimg = document.createElement('img');
            allimg.src = product.thumbnail;
            allimg.alt = product.title;
            allproductDiv.appendChild(allimg);

    
            const alltitle = document.createElement('h3');
            alltitle.className = 'title';
            alltitle.textContent = product.title;
            allproductDiv.appendChild(alltitle);

            const allprice = document.createElement('p');
            allprice.className = 'price';
            allprice.textContent = `$${product.price}`;
            

            const productDetais = document.createElement('button');
            productDetais.id = "addToCartAllproducts"
            productDetais.textContent = 'View Product Details';
            productDetais.classList.add('addtocartButton');

            const cartObj = {
                img: product.thumbnail,
                title: product.title,
                price: product.price,
                rating: product.rating,
                description: product.description
            }

            

            allproductDiv.appendChild(allprice);
            // allproductDiv.appendChild(addToCart);
            allproductDiv.appendChild(productDetais);

            // Display the mini cart for a single product.
            productDetais.addEventListener('click', () => {
                fetch(`https://dummyjson.com/products/${product.id}`)
                    .then(res => res.json())
                    .then(data => {
                        // create div container (parent)
                       
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
                        rating.innerHTML=`Rating : ${data.rating}`;

                          // create h1 see more
                          const SeeMoreicon = document.createElement('h1');
                          SeeMoreicon.innerHTML = `View Details <i class="fa-solid fa-arrow-right rightArrow"></i>`;
                          SeeMoreicon.className = "seeMore";

                        

                        singleProductDetailsContainer.appendChild(singleProductTitle);
                        singleProductDetailsContainer.appendChild(singleProductPrice);
                        singleProductDetailsContainer.appendChild(rating);
                        singleProductDetailsContainer.appendChild(SeeMoreicon)

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
            });
            return { product_img: product.thumbnail,product_category:product.category, product_name: product.title, product_price: `$${product.price}`, Element: allproductDiv };
        });

        const p = document.querySelector('.all-prod');
                p.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = true; 
                  product.Element.classList.toggle('hide', !isVisible);
                  });
                });
        const b = document.querySelector('.cbeauty');
                b.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = (product.product_category === 'beauty');
                  product.Element.classList.toggle('hide', !isVisible);
                  });
               });
        const f = document.querySelector('.cFragrance');
                f.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = (product.product_category === 'fragrances');
                  product.Element.classList.toggle('hide', !isVisible);
                  });
               });
        const fu = document.querySelector('.cFurniture');
                fu.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = (product.product_category === 'furniture');
                  product.Element.classList.toggle('hide', !isVisible);
                  });
               });
        const  g= document.querySelector('.cGroceries');
                g.addEventListener('click', () => {
                output.forEach(product => {
                  const isVisible = (product.product_category === 'groceries');
                  product.Element.classList.toggle('hide', !isVisible);
                  });
               });
    })

    .catch(error => console.error('Error fetching data:', error));


function showSidebar(){
        const Sidebar =document.querySelector('.sidebar');
        Sidebar.style.display='flex'
}
function hideSidebar(){
         const Sidebar =document.querySelector('.sidebar');
         Sidebar.style.display='none'
}            
function displaycat(){
    const Sidebar =document.querySelector('.dropdown1');
        Sidebar.style.display='block'
}
function displaycat2(){
    const Sidebar =document.querySelector('.dropdown1-1');
        Sidebar.style.display='block'
}
