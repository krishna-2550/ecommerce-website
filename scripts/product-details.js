// Product Details Page Functionality
let currentProduct = null;
let selectedColor = null;
let selectedStorage = null;
let currentImageIndex = 0;
let productImages = [];
let countdownInterval;

// Initialize the product details page
function initializeProductDetails() {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId) {
        showError('Product not found');
        return;
    }

    loadProductDetails(productId);
    initializeEventListeners();
}

// Load product details
function loadProductDetails(productId) {
    currentProduct = products.find(p => p.id === productId);
    
    if (!currentProduct) {
        showError('Product not found');
        return;
    }

    updateBreadcrumb();
    updateProductInfo();
    loadProductImages();
    loadProductHighlights();
    loadProductSpecs();
    loadReviews();
    loadFAQs();
    loadSimilarProducts();
    trackRecentlyViewed(productId);
    loadRecentlyViewed();
}

// Initialize event listeners
function initializeEventListeners() {
    // Quantity selector
    document.querySelector('.qty-btn.minus').addEventListener('click', decrementQuantity);
    document.querySelector('.qty-btn.plus').addEventListener('click', incrementQuantity);
    
    // Purchase buttons
    document.querySelector('.add-to-cart').addEventListener('click', addToCartFromDetails);
    document.querySelector('.buy-now').addEventListener('click', buyNow);
    
    // Share and wishlist
    document.querySelector('.share-btn').addEventListener('click', shareProduct);
    document.querySelector('.wishlist-btn').addEventListener('click', toggleWishlist);
    
    // Image zoom
    document.querySelector('.zoom-btn').addEventListener('click', () => openModal('imageModal'));
    
    // Tabs navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    
    // Review filters
    document.querySelector('.rating-filter').addEventListener('change', filterReviews);
    document.querySelector('.sort-filter').addEventListener('change', sortReviews);
    
    // Pincode checker
    document.querySelector('.delivery-input button').addEventListener('click', checkDelivery);
    
    // EMI calculator
    document.querySelector('.emi-details').addEventListener('click', () => openModal('emiModal'));
    
    // Close modals
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.closest('.modal').id));
    });
}

// Update breadcrumb
function updateBreadcrumb() {
    document.querySelector('.category-link').textContent = currentProduct.category;
    document.querySelector('.product-name').textContent = currentProduct.name;
}

// Update product information
function updateProductInfo() {
    // Update title and SKU
    document.querySelector('.product-title').textContent = currentProduct.name;
    document.querySelector('.sku-number').textContent = `SKU${currentProduct.id.toString().padStart(6, '0')}`;
    
    // Update pricing
    document.querySelector('.current-price').textContent = formatPriceINR(currentProduct.price);
    document.querySelector('.original-price').textContent = formatPriceINR(currentProduct.originalPrice);
    
    const discount = Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100);
    document.querySelector('.discount-badge').textContent = `${discount}% OFF`;
    
    // Update rating
    const rating = 4.5; // Replace with actual rating
    document.querySelector('.stars').innerHTML = generateStars(rating);
    document.querySelector('.rating-count').textContent = '(123 Reviews)';
    
    // Initialize options
    initializeColorOptions();
    initializeStorageOptions();
}

// Load product images
function loadProductImages() {
    // Simulate multiple product images
    productImages = [
        currentProduct.image,
        currentProduct.image.replace('250', '251'),
        currentProduct.image.replace('250', '252'),
        currentProduct.image.replace('250', '253')
    ];
    
    // Update main image
    document.getElementById('mainImage').src = productImages[0];
    
    // Update thumbnails
    const thumbnailsContainer = document.querySelector('.image-thumbnails');
    thumbnailsContainer.innerHTML = productImages.map((img, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" 
             onclick="changeImage(${index})">
            <img src="${img}" alt="${currentProduct.name} view ${index + 1}">
        </div>
    `).join('');
}

// Change main image
function changeImage(index) {
    currentImageIndex = index;
    document.getElementById('mainImage').src = productImages[index];
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Initialize color options
function initializeColorOptions() {
    const colorOptions = document.querySelector('.color-options');
    const colors = [
        { name: 'Midnight Black', code: '#000000' },
        { name: 'Arctic Silver', code: '#C0C0C0' },
        { name: 'Rose Gold', code: '#B76E79' },
        { name: 'Pacific Blue', code: '#1E4B6B' }
    ];
    
    colorOptions.innerHTML = colors.map(color => `
        <div class="color-option ${selectedColor === color.name ? 'selected' : ''}"
             data-color="${color.name}"
             style="background-color: ${color.code}"
             title="${color.name}">
        </div>
    `).join('');
    
    // Add click event listeners
    colorOptions.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', () => selectColor(option.dataset.color));
    });
}

// Initialize storage options
function initializeStorageOptions() {
    const storageOptions = document.querySelector('.storage-options');
    const options = [
        { size: '128GB', price: currentProduct.price },
        { size: '256GB', price: currentProduct.price + 100 },
        { size: '512GB', price: currentProduct.price + 200 },
        { size: '1TB', price: currentProduct.price + 400 }
    ];
    
    storageOptions.innerHTML = options.map(option => `
        <div class="storage-option ${selectedStorage === option.size ? 'selected' : ''}"
             data-storage="${option.size}"
             data-price="${option.price}">
            <span class="size">${option.size}</span>
            <span class="price">${formatPriceINR(option.price)}</span>
        </div>
    `).join('');
    
    // Add click event listeners
    storageOptions.querySelectorAll('.storage-option').forEach(option => {
        option.addEventListener('click', () => 
            selectStorage(option.dataset.storage, parseFloat(option.dataset.price)));
    });
}

// Select color
function selectColor(color) {
    selectedColor = color;
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.toggle('selected', option.dataset.color === color);
    });
}

// Select storage
function selectStorage(storage, price) {
    selectedStorage = storage;
    document.querySelectorAll('.storage-option').forEach(option => {
        option.classList.toggle('selected', option.dataset.storage === storage);
    });
    document.querySelector('.current-price').textContent = formatPriceINR(price);
}

// Quantity controls
function decrementQuantity() {
    const input = document.querySelector('.quantity-selector input');
    const newValue = Math.max(1, parseInt(input.value) - 1);
    input.value = newValue;
}

function incrementQuantity() {
    const input = document.querySelector('.quantity-selector input');
    const newValue = Math.min(10, parseInt(input.value) + 1);
    input.value = newValue;
}

// Switch tab
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.toggle('active', panel.id === tabId);
    });
}

// Check delivery
function checkDelivery() {
    const pincode = document.querySelector('.delivery-input input').value;
    if (pincode.length !== 6) {
        showNotification('Please enter a valid 6-digit pincode');
        return;
    }
    
    // Simulate delivery check
    setTimeout(() => {
        document.querySelector('.delivery-info').style.display = 'block';
        showNotification('Delivery available to this location');
    }, 500);
}

// Share product
function shareProduct() {
    if (navigator.share) {
        navigator.share({
            title: currentProduct.name,
            text: `Check out this amazing ${currentProduct.name} on TechHub!`,
            url: window.location.href
        });
    } else {
        openModal('shareModal');
    }
}

// Toggle wishlist
function toggleWishlist() {
    const btn = document.querySelector('.wishlist-btn');
    const isWishlisted = btn.classList.toggle('active');
    
    if (isWishlisted) {
        btn.querySelector('i').classList.replace('far', 'fas');
        showNotification('Added to wishlist');
    } else {
        btn.querySelector('i').classList.replace('fas', 'far');
        showNotification('Removed from wishlist');
    }
}

// Add to cart
function addToCartFromDetails() {
    if (!selectedColor || !selectedStorage) {
        showNotification('Please select color and storage options');
        return;
    }
    
    const quantity = parseInt(document.querySelector('.quantity-selector input').value);
    const variant = {
        ...currentProduct,
        color: selectedColor,
        storage: selectedStorage
    };
    
    for (let i = 0; i < quantity; i++) {
        addToCart(variant);
    }
    
    showNotification('Added to cart successfully');
}

// Buy now
function buyNow() {
    addToCartFromDetails();
    window.location.href = 'cart.html';
}

// Modal controls
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Show error
function showError(message) {
    const container = document.querySelector('.product-layout');
    container.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-circle"></i>
            <h2>Oops!</h2>
            <p>${message}</p>
            <button onclick="window.location.href='index.html'">Return to Homepage</button>
        </div>
    `;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    return `
        ${`<i class="fas fa-star"></i>`.repeat(fullStars)}
        ${hasHalfStar ? `<i class="fas fa-star-half-alt"></i>` : ''}
        ${`<i class="far fa-star"></i>`.repeat(emptyStars)}
    `;
}

// Track recently viewed
function trackRecentlyViewed(productId) {
    let recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
    recentlyViewed = [productId, ...recentlyViewed.filter(id => id !== productId)].slice(0, 4);
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
}

// Initialize page
document.addEventListener('DOMContentLoaded', initializeProductDetails); 