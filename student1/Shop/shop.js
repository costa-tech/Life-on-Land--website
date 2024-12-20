/* banner */ 
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.banner-slide');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dotsContainer = document.querySelector('.dots-container');
    let currentSlide = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize
    goToSlide(0);
});





/* form*/



let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const purchaseForm = document.getElementById('purchase-form');
    const checkoutForm = document.getElementById('checkout-form');
    const cancelPurchaseBtn = document.getElementById('cancel-purchase');

    productCards.forEach(card => {
        const addToCartBtn = card.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', function() {
            const productName = card.querySelector('h3').textContent;
            const price = parseFloat(card.querySelector('.price').textContent.replace('LKR ', '').replace(',', ''));
            addToCart(productName, price);
        });
    });

    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty');
        } else {
            displayPurchaseForm();
        }
    });

    cancelPurchaseBtn.addEventListener('click', function() {
        purchaseForm.style.display = 'none';
    });

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your purchase! Your order has been received and is being processed.');
        purchaseForm.style.display = 'none';
        cart = [];
        updateCartDisplay();
    });

    function addToCart(name, price) {
        cart.push({ name, price });
        updateCartDisplay();
        alert(`Added to cart: ${name}`);
    }

    function updateCartDisplay() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - LKR ${item.price.toFixed(2)}`;
            const removeBtn = document.createElement('span');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-item';
            removeBtn.onclick = () => removeFromCart(index);
            li.appendChild(removeBtn);
            cartItems.appendChild(li);
            total += item.price;
        });
        cartTotal.textContent = `LKR ${total.toFixed(2)}`;
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCartDisplay();
    }

    function displayPurchaseForm() {
        purchaseForm.style.display = 'flex';
    }
});