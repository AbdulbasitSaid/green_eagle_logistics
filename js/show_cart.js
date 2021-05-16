let cartToggle = document.getElementById('cart_toggle');
let cartView = document.getElementById('cart_view');
cartView.classList.add('hidden');

cartToggle.addEventListener('click', () => {
    cartView.classList.toggle('hidden');
});