const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuRayas = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoLogo = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('#shoppingCart');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseBoton = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuRayas.addEventListener('click', toggleMobileMenu);
carritoLogo.addEventListener('click', toggleCarritoMenu);
productDetailCloseBoton.addEventListener('click', CloseProductDetail);

function toggleDesktopMenu() {
    
    menuCarrito.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');

};

function toggleMobileMenu() {

    menuCarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');

};

function toggleCarritoMenu() {

    //menuCarrito.classList.toggle('inactive');  Primera solucion, pero hay problemas con los 2 menus

    
    /* //Segunda solucion
    
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
     if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    } 
        menuCarrito.classList.toggle('inactive'); */
    

    //Tercera Solucion
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    menuCarrito.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function openProductDetailAside(){
    productDetail.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    menuCarrito.classList.add('inactive');
}

function CloseProductDetail(){
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg',
    comment: "Bici nueva y buena."
});
productList.push({
    name: 'Rodilleras',
    price: 10,
    img: 'https://http2.mlstatic.com/D_NQ_NP_943740-MLV54013806303_022023-V.jpg',
    comment: "Rodilleras resistentes."
});
productList.push({
    name: 'Casco',
    price: 20,
    img: 'https://casco-shop.eu/media/image/a9/ef/13/CASCO_MTBE_2_Black_Matte_Side_rgb_800px_96dpi_04-1312.jpg',
    comment: "Casco fuerte y barato."
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
        <p>$120,00</p>
        <p>Bike</p>
        </div>
        <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div>
*/

function renderProducts(arrayOfProductos){

    for (let i = 0; i < arrayOfProductos.length; i++) {
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', arrayOfProductos[i].img);
        img.addEventListener('click', ()=>{
            if(productDetail.children.length>1){
                for (let j = 0; j < productDetail.children.length; j++) {
                    productDetail.removeChild(productDetail.lastChild);
                }
                renderProductsDetails(arrayOfProductos[i]);
                openProductDetailAside();
            }else{
            renderProductsDetails(arrayOfProductos[i]);
            openProductDetailAside();  
            }
        });
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + arrayOfProductos[i].price;
    
        const productName = document.createElement('p');
        productName.innerText = arrayOfProductos[i].name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);
        cardsContainer.appendChild(productCard);
    }

}

renderProducts(productList);

/*

<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
<div class="product-info">
    <p>$35,00</p>
    <p>Bike</p>
    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
    <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
    </button>
</div>
*/

function renderProductsDetails(product){
    
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productComment = document.createElement('p');
        productComment.innerText = product.comment;

        const productButton = document.createElement('button');
        productButton.classList.add('primary-button', 'add-to-cart-button');
        productButton.innerText = 'Add to cart';

        const buttonImg = document.createElement('img');
        buttonImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        buttonImg.setAttribute('alt', 'add to cart');
        
        productButton.appendChild(buttonImg);
        productInfo.append(productPrice, productName, productComment,productButton);
        productDetail.append(img, productInfo);
           
    }




