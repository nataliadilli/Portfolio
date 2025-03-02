let products = [
    { id: 1, name: 'Curso 1', price: 10.99, image: './imagem_curso/imagem_curso.webp' },
    { id: 2, name: 'Curso 2', price: 15.99, image: './imagem_curso/imagem_curso.webp' },
    { id: 3, name: 'Curso 3', price: 18.99, image: './imagem_curso/imagem_curso.webp' },
    { id: 4, name: 'Curso 4', price: 75.99, image: './imagem_curso/imagem_curso.webp' },
    { id: 5, name: 'Curso 5', price: 38.99, image: './imagem_curso/imagem_curso.webp' },
    { id: 6, name: 'Curso 6', price: 20.99, image: './imagem_curso/imagem_curso.webp' }
];

let cart = [];

function renderProducts() {
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';

    products.forEach((product) => {
        let productDIV = document.createElement('div');
        productDIV.className = 'product';

        productDIV.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Preço: R$${product.price}</p>
            <button>Adicionar ao carrinho</button>
        `;
        
        let button = productDIV.querySelector('button');
        button.addEventListener('click', () => addToCart(product.id, button));

        productGrid.appendChild(productDIV);
    });
}

function addToCart(productId, button) {
    let product = products.find((product) => product.id === productId);
    cart.push(product);

  
    button.classList.add('added');
    setTimeout(() => button.classList.remove('added'), 1000);

    renderCart();
}

function renderCart() {
    let cartTable = document.querySelector('.cart-table tbody');
    cartTable.innerHTML = '';

    cart.forEach((product) => {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>1</td>
            <td>R$${product.price}</td>
            <td>R$${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });

    updateTotal();
}

function updateTotal() {
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `R$${total.toFixed(2)}`;
}

document.getElementById('checkout').addEventListener('click', () => { 
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Pedido realizado com sucesso!');
        cart = [];
        renderCart();
    }
});

renderProducts();