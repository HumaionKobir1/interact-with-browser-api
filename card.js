const addProduct = () => {
    const productField = document.getElementById('product-name');
    const prodcutQuantity = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = prodcutQuantity.value;
    productField.value = '';
    prodcutQuantity.value = '';
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}

const getStoredShoppingCard = () => {
    let cart = {};
    const storedCard = localStorage.getItem('cart');
    if(storedCard){
        cart = JSON.parse(storedCard);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCard();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    // console.log(cart);
}

const displayProductsFromLocalStorage = () => {
    const saveCard = getStoredShoppingCard();
    for(const product in saveCard){
        const quantity = saveCard[product];
        displayProduct(product, quantity);
        // console.log(product, quantity);
    }
    // console.log(saveCard);
}
displayProductsFromLocalStorage();