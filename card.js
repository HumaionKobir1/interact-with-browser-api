const addProduct = () => {
    const productField = document.getElementById('product-name');
    const prodcutQuantity = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = prodcutQuantity.value;
    productField.value = '';
    prodcutQuantity.value = '';
    displayProduct(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}