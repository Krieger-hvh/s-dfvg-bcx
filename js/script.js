// ============================================
// 📦 PRODUKTE
// ============================================
const products = {
    "Streaming Accounts": [
        { id: 1, name: "Netflix Lifetime", price: 5.99, image: "images/netflix.jpg", stock: "Auf Lager", badge: null },
        { id: 2, name: "Disney+ Premium", price: 3.99, image: "images/disney+.jpg", stock: "Auf Lager", badge: null },
        { id: 4, name: "Paramount+ USA", price: 2.99, image: "images/paramount.png", stock: "Auf Lager", badge: null },
        { id: 877, name: "Paramount+ EU", price: 2.99, image: "images/paramount.png", stock: "Auf Lager", badge: null },
        { id: 5, name: "Crunchyroll", price: 4.99, image: "images/crunchroll.jpg", stock: "Auf Lager", badge: null },
        { id: 6, name: "HBO Max", price: 4.99, image: "images/hbo.jpg", stock: "Nur noch 5", badge: null },
        {
            id: 456,
            name: "DAZN Accounts",
            price: 1.5,
            image: "images/dazn.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "DAZN Spain", price: 1.5 },
                { name: "DAZN Italy", price: 2 },
                { name: "DAZN Uk", price: 2 },
                { name: "DAZN USA", price: 2.5 },
                { name: "DAZN France", price: 2.5 }
            ]
        }
    ],
    "Premium Accounts": [
        { id: 8, name: "Spotify Premium", price: 5.99, image: "images/spotify.jpg", stock: "Auf Lager", badge: "Bestseller" },
        { id: 9, name: "YouTube Premium", price: 3.99, image: "images/youtube.jpg", stock: "Auf Lager", badge: null },
        { id: 11, name: "Deezer Premium", price: 3.49, image: "images/deezer.jpg", stock: "Auf Lager", badge: null },
        { id: 1345324, name: "Capcut Pro Lifetime", price: 3.99, image: "images/capcut.jpg", stock: "Auf Lager", badge: null },
    ],
    "Social Media Accounts": [
        {
            id: 12342,
            name: "Instagram",
            price: 7.99,
            image: "images/instagram.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "1k+ Follower Acc", price: 7.99 },
                { name: "5k+ Follower Acc", price: 14.99 }
            ]
        },
        {
            id: 23244,
            name: "Discord Accounts",
            price: 0.49,
            image: "images/discord.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "Discord Nitro ACC", price: 8.99 },
                { name: "2016 ACC", price: 9.99 },
                { name: "2017 ACC", price: 5.99 },
                { name: "2018 ACC", price: 4.99 },
                { name: "2019 ACC", price: 3.99 },
                { name: "2020 ACC", price: 2.99 },
                { name: "2021 ACC", price: 2.49 },
                { name: "2023 ACC", price: 1.50 },
                { name: "3+ Months aged Email + Phone verified", price: 2.99 },
                { name: "1 Month Nitro + 2 Boost + Phoned verified", price: 3.99 },
                { name: "3 Months Nitro + 2 Boost + Phone verified", price: 6.99 },
                { name: "Email + Phone verified", price: 0.99 },
                { name: "Email verified", price: 0.49 }
            ]
        },
        {
            id: 12342,
            name: "Twitch Accounts",
            price: 0.5,
            image: "images/twitch.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "Fresh Acc", price: 0.5 },
                { name: "100+ Follower Acc", price: 2 },
                { name: "500+ Follower Acc", price: 5 },
                { name: "2000+ Follower Acc", price: 7 },
                { name: "5000+ Follower Acc", price: 10 },
                { name: "10k+ Follower Acc", price: 13 }
            ]
        },
        {
            id: 11232,
            name: "Tik Tok Accounts",
            price: 6,
            image: "images/tiktok.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "1k+ Follower Acc", price: 6 },
                { name: "10k+ Follower Acc", price: 22 },
                { name: "20k+ Follower Acc", price: 35 }
            ]
        },
        { id: 40, name: "Gmail 2022 - 2024 Accounts", price: 2.99, image: "images/gmail.jpg", stock: "Auf Lager", badge: null },
    ],
    "Tools & Services": [
        { id: 18, name: "NordVPN Lifetime", price: 3.99, image: "images/nordvpn.jpg", stock: "Auf Lager", badge: "Top" },
        { id: 28, name: "CyberGhost 1 Year", price: 2.99, image: "images/cyberghost.jpg", stock: "Auf Lager", badge: null },
        { id: 29, name: "TunnelBear Premium", price: 2.99, image: "images/tunnelbear.jpg", stock: "Auf Lager", badge: null },
        { id: 30, name: "IpVanish 1 Year", price: 2.49, image: "images/ipvanish.jpg", stock: "Auf Lager", badge: null },
        { id: 31, name: "Pure VPN Lifetime", price: 3.99, image: "images/purevpn.jpg", stock: "Auf Lager", badge: null },
        { id: 32, name: "Mullvad VPN", price: 6.99, image: "images/mullvad.jpg", stock: "Auf Lager", badge: null },
        { id: 33, name: "Hotspot Shield Premium", price: 4.99, image: "images/hotshield.jpg", stock: "Auf Lager", badge: null },
        { id: 34, name: "Express VPN", price: 2.99, image: "images/expressvpn.jpg", stock: "Auf Lager", badge: null },
        
       
    ],
    "KI Acc.": [
        {
            id: 1342532,
            name: "KI Accounts",
            price: 2,
            image: "images/gemini.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "Gemini Pro 4 Months", price: 2 },
                { name: "Pro + antigravity 2 Years", price: 7 },
                
            ]
        },

        
     { id: 41, name: "Chat GPT+", price: 8.99, image: "images/chatgpt.jpg", stock: "Auf Lager", badge: null }
        
    ],
    "Gaming Accounts": [
        { id: 22, name: "Steam Account | Ready | Fresh", price: 0.09, image: "images/steam.jpg", stock: "Auf Lager", badge: "Beliebt" },
        { id: 25, name: "Minecraft Account", price: 6.99, image: "images/minecraft.jpg", stock: "Auf Lager", badge: null },
    
        {
            id: 60,
            name: "Valorant Accounts",
            price: 5,
            image: "images/valorant.jpg",
            stock: "Auf Lager",
            badge: null,
            variants: [
                { name: "EU - Level 1-20 Ranked Ready", price: 5, description: "Fresh Account, ready for ranked", features: ["Level 1-20", "EU Server", "Ranked Ready"] },
                { name: "EU - Level 1-20 + Knife", price: 14.99, description: "Account mit Knife und Skins", features: ["Level 1-20", "Knife Skin", "1000-3000 VP", "EU Server"] },
                { name: "EU - Level 40-100 + Skins", price: 24.99, description: "High Level Account mit vielen Skins", features: ["Level 40-100", "+ Knives", "3000VP - 10000VP"] },
                { name: "EU - Level 50-200 + Skins", price: 34.99, description: "High Level Account mit vielen Skins", features: ["Level 50-200", "+ Knives", "5000VP - 20000VP"] },
                { name: "EU - Level 100-300 + Skins", price: 49.50, description: "High Level Account mit vielen Skins", features: ["Level 100-300", "+ Knives", "30000VP - 55000VP"] }
            ]
        },

        {
            id: 70,
            name: "Fortnite Accounts",
            price: 2.99,
            image: "images/fortnite.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "3-10 Skins", price: 2.99, description: "Account mit 3-10 verschiedenen Skins", features: ["3-10 Skins", "Sofort verfügbar"] },
                { name: "10-20 Skins", price: 5.99, description: "Account mit 10-20 verschiedenen Skins", features: ["10-20 Skins", "Sofort verfügbar"] },
                { name: "20-50 Skins", price: 6.99, description: "Account mit 20-50 verschiedenen Skins", features: ["20-50 Skins", "Sofort verfügbar"] },
                { name: "50-100 Skins", price: 9.99, description: "Account mit 50-100 verschiedenen Skins", features: ["50-100 Skins", "Sofort verfügbar"] },
                { name: "100-150 Skins", price: 15.99, description: "Account mit 100-150 verschiedenen Skins", features: ["100-150 Skins", "Sofort verfügbar"] },
                { name: "150-250 Skins", price: 19.99, description: "Account mit 150-250 verschiedenen Skins", features: ["150-250 Skins", "Sofort verfügbar"] },
                { name: "250-400 Skins", price: 24.99, description: "Account mit 250-400 verschiedenen Skins", features: ["250-400 Skins", "Sofort verfügbar"] },
                { name: "400-600 Skins", price: 54.99, description: "Account mit 400-600 verschiedenen Skins", features: ["400-600 Skins", "Sofort verfügbar"] },
                { name: "OG STW + 100-200 Skins", price: 19.99, description: "Account mit 100-200 verschiedenen Skins", features: ["100-200 Skins", "OG Account", "Save the World"] },
                { name: "Leviathan Axe + 100-200 Skins", price: 24.99, description: "Account mit Leviathan Axe Skin", features: ["100-200 Skins", "Leviathan Axe", "Rare Skin"] },
                { name: "Minty Axe + 100-250 Skins", price: 24.99, description: "Account mit Minty Axe Skin", features: ["100-250 Skins", "Minty Axe", "Rare Skin"] },
                { name: "350 Level + 14 + Tournament Ready", price: 24.99, description: "High-Level Account, bereit für Turniere", features: ["Level 350+", "Tournament Ready", "Competitive"] },
                { name: "Travis Scott + 100-250 Skins", price: 44.99, description: "Account mit Travis Scott Skin", features: ["100-250 Skins", "Travis Scott", "Rare Skin"] },
                { name: "Black Knight + 50-250 Skins", price: 85, description: "Account mit Black Knight Skin", features: ["50-250 Skins", "Black Knight", "OG Skin"] }
            ]
        },
        
        {
            id: 123,
            name: "Fortnite V-Bucks Accounts",
            price: 5,
            image: "images/fortnitevb.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "800-1200 V-Bucks", price: 5, description: "Account mit 800-1200 V-Bucks Guthaben", features: ["800-1200 V-Bucks", "Sofort verfügbar"] },
                { name: "1500-2800 V-Bucks", price: 8, description: "Account mit 1500-2800 V-Bucks Guthaben", features: ["1500-2800 V-Bucks", "Sofort verfügbar"] },
                { name: "5000-7000 V-Bucks", price: 20, description: "Account mit 5000-7000 V-Bucks Guthaben", features: ["5000-7000 V-Bucks", "Sofort verfügbar", "Bestes Preis-Leistungs-Verhältnis"] }
            ]
        },
    
        {
            id: 90,
            name: "Clash Royal Accounts",
            price: 3,
            image: "images/clashroyal.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "1000-2500 Trophies", price: 3 },
                { name: "2500-5000 Trophies", price: 7 },
                { name: "5000-7000 Trophies", price: 10 },
                { name: "7000-10000 Trophies", price: 13 },
                { name: "10000-12000 Trophies", price: 19 }
            ]
        },
        {
            id: 2345,
            name: "Roblox Accounts",
            price: 3,
            image: "images/roblox.jpg",
            stock: "Auf Lager",
            badge: "Top",
            variants: [
                { name: "1000-2500 Robox Acc", price: 4 },
                { name: "2500-5000 Robox Acc", price: 8 },
                { name: "5000-10000 Robox Acc", price: 14 },
                { name: "10000-15000 Robox Acc", price: 18 },
                { name: "15000-25000 Robox Acc", price: 21 },
                { name: "25000-50000 Robox Acc", price: 25 }
            ]
        }
    ]
};

// ============================================
// 🔐 DISCORD WEBHOOK
// ============================================
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1521820477168025652/QENM4rdm6PoX9qmmkE69SoU0HudD-NXYZh7Rw2s17yYw2-wFdOT_-AxNoSbfvnw1h9LX";
const PING_ROLE_ID = "1522544910916518008";

// ============================================
// 🛒 WARENKORB STATE
// ============================================
let cart = JSON.parse(localStorage.getItem('kriegerCart')) || [];
let isCheckingOut = false;
// ============================================
// 🎨 INITIALISIERUNG
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ KRIEGER Shop geladen');
    renderAllProducts();
    updateCartUI();
});

// ============================================
// 📦 PRODUKTE RENDERN
// ============================================
function renderAllProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    container.innerHTML = '';

    for (const [category, categoryProducts] of Object.entries(products)) {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';
        
        // Kategorie Header mit Linie
        const categoryHeader = document.createElement('div');
        categoryHeader.className = 'category-header text-center mb-12';
        categoryHeader.innerHTML = `
            <h3 class="font-display text-4xl md:text-5xl font-bold text-white inline-block px-8 tracking-widest relative z-10">${category.toUpperCase()}</h3>
        `;
        categorySection.appendChild(categoryHeader);

        const productGrid = document.createElement('div');
        productGrid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';

        categoryProducts.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });

        categorySection.appendChild(productGrid);
        container.appendChild(categorySection);
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card glass rounded-lg p-6 relative group';
    
    const badgeHTML = product.badge ? `<div class="product-badge">${product.badge.toUpperCase()}</div>` : '';
    
    const stockClass = product.stock.includes('Nur noch') ? 'stock-low' : 'stock-available';
    const stockBadge = `<span class="stock-badge ${stockClass}">${product.stock}</span>`;

    const hasVariants = product.variants && product.variants.length > 0;
    const buttonText = hasVariants ? 'AUSWÄHLEN' : 'KAUFEN';
    const buttonAction = hasVariants ? `openVariantModal(${product.id})` : `addToCart(${product.id})`;

    card.innerHTML = `
        ${badgeHTML}
        <div class="flex flex-col h-full">
            <div class="product-image-container mb-5">
                <img src="${product.image}" alt="${product.name}" 
                     class="w-full h-48 object-cover"
                     onerror="this.src='https://placehold.co/400x300/1a1a1a/ffffff?text=${encodeURIComponent(product.name)}'">
            </div>
            
            <div class="mb-4">
                ${stockBadge}
            </div>
            
            <h4 class="font-display text-xl font-bold text-white mb-3 tracking-wide leading-tight">${product.name}</h4>
            <p class="text-gray-400 text-sm mb-6 flex-grow">Premium Account mit voller Garantie und Support.</p>
            
            <div class="flex items-end justify-between mt-auto pt-4 border-t border-white/10">
                <div>
                    ${hasVariants ? `<span class="price-label">ab</span>` : ''}
                    <div class="price-tag">${product.price.toFixed(2)} €</div>
                </div>
                <button onclick="${buttonAction}" 
                        class="buy-button">
                    ${buttonText}
                </button>
            </div>
        </div>
    `;

    return card;
}

// ============================================
// 🎯 VARIANTEN MODAL
// ============================================
function openVariantModal(productId) {
    let product = null;
    for (const categoryProducts of Object.values(products)) {
        product = categoryProducts.find(p => p.id === productId);
        if (product) break;
    }

    if (!product || !product.variants) return;

    const modal = document.getElementById('variant-modal');
    const modalTitle = document.getElementById('variant-modal-title');
    const modalVariants = document.getElementById('modal-variants');

    if (!modal || !modalTitle || !modalVariants) return;

    modalTitle.innerText = product.name;
    modalVariants.innerHTML = '';
    
    product.variants.forEach((variant, index) => {
        const variantDiv = document.createElement('div');
        variantDiv.className = 'variant-option bg-krieger-gray/30 rounded-lg p-5 cursor-pointer';
        
        variantDiv.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <h4 class="font-display text-xl font-bold text-white tracking-wide">${variant.name}</h4>
                <span class="text-2xl font-bold text-white font-display">${variant.price.toFixed(2)} €</span>
            </div>
            ${variant.description ? `<p class="text-gray-400 text-sm mb-3">${variant.description}</p>` : ''}
            ${variant.features ? `
                <div class="flex gap-2 flex-wrap">
                    ${variant.features.map(feature => `
                        <span class="text-xs bg-white/10 text-white px-3 py-1 rounded border border-white/20 font-semibold">✓ ${feature}</span>
                    `).join('')}
                </div>
            ` : ''}
        `;
        
        variantDiv.addEventListener('click', () => {
            selectVariant(productId, index);
        });
        
        modalVariants.appendChild(variantDiv);
    });

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function selectVariant(productId, variantIndex) {
    let product = null;
    for (const categoryProducts of Object.values(products)) {
        product = categoryProducts.find(p => p.id === productId);
        if (product) break;
    }

    if (!product || !product.variants) return;

    const selectedVariant = product.variants[variantIndex];
    const cartId = `variant_${productId}_${variantIndex}`;
    
    cart.push({
        id: cartId,
        name: `${product.name} - ${selectedVariant.name}`,
        price: selectedVariant.price,
        image: product.image,
        stock: product.stock,
        quantity: 1,
        variant: selectedVariant.name
    });

    updateCartUI();
    showToast(`${product.name} (${selectedVariant.name}) wurde hinzugefügt.`);
    closeVariantModal();
}

function closeVariantModal() {
    const modal = document.getElementById('variant-modal');
    if (!modal) return;
    
    modal.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
}

// ============================================
// 🛒 WARENKORB FUNKTIONEN
// ============================================

function toggleCart() {
    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    
    if (!panel || !overlay) return;
    
    const isOpen = !panel.classList.contains('translate-x-full');

    if (isOpen) {
        panel.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
    } else {
        panel.classList.remove('translate-x-full');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        document.body.style.overflow = 'hidden';
    }
}

function addToCart(productId) {
    let product = null;
    for (const categoryProducts of Object.values(products)) {
        product = categoryProducts.find(p => p.id === productId);
        if (product) break;
    }

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ 
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            stock: product.stock,
            quantity: 1
        });
    }

    updateCartUI();
    showToast(`${product.name} wurde hinzugefügt.`);
}

function removeFromCart(itemId) {
    // itemId immer in die richtige Type umwandeln
    cart = cart.filter(item => {
        // Vergleiche als Strings
        return String(item.id) !== String(itemId);
    });
    updateCartUI();
}

function changeQuantity(itemId, delta) {
    // itemId immer in die richtige Type umwandeln
    const item = cart.find(item => String(item.id) === String(itemId));
    
    if (!item) {
        console.error('Item nicht gefunden:', itemId);
        return;
    }

    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');
    const cartCountBadge = document.getElementById('cart-count');
    const cartItemsCount = document.getElementById('cart-items-count');
    const cartTotal = document.getElementById('cart-total');

    if (!cartItemsContainer || !cartCountBadge) return;

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountBadge.innerText = totalItems;
    if (totalItems > 0) {
        cartCountBadge.classList.remove('scale-0');
    } else {
        cartCountBadge.classList.add('scale-0');
    }
    
    if (cartItemsCount) cartItemsCount.innerText = totalItems;

    if (cart.length === 0) {
        cartItemsContainer.classList.add('hidden');
        if (cartFooter) cartFooter.classList.add('hidden');
        if (cartEmpty) cartEmpty.classList.remove('hidden');
        if (cartTotal) cartTotal.innerText = '0,00 €';
        // WICHTIG: Auch bei leerem Warenkorb speichern!
        localStorage.setItem('kriegerCart', JSON.stringify(cart));
        return;
    }

    cartItemsContainer.classList.remove('hidden');
    if (cartFooter) cartFooter.classList.remove('hidden');
    if (cartEmpty) cartEmpty.classList.add('hidden');

    // Warenkorb-Items rendern
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.dataset.itemId = item.id;
        
        cartItemDiv.innerHTML = `
            <div class="flex gap-4 items-center">
                <img src="${item.image}" alt="${item.name}" 
                     class="w-20 h-20 rounded-lg object-cover border-2 border-white/10 flex-shrink-0"
                     onerror="this.src='https://placehold.co/100x100/1a1a1a/ffffff?text=${encodeURIComponent(item.name.substring(0,3))}'">
                
                <div class="flex-1 min-w-0">
                    <h4 class="font-display text-base font-bold text-white truncate tracking-wide">${item.name}</h4>
                    <div class="text-white font-bold text-lg mt-1 font-display">${item.price.toFixed(2)} €</div>
                    
                    <div class="qty-control mt-3 flex items-center gap-2">
                        <button class="qty-minus qty-btn" type="button" data-action="minus" data-id="${item.id}">−</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-plus qty-btn" type="button" data-action="plus" data-id="${item.id}">+</button>
                    </div>
                </div>

                <button class="remove-btn p-2 text-gray-400 hover:text-white flex-shrink-0 self-start" 
                        data-action="remove" 
                        data-id="${item.id}" 
                        title="Entfernen">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        `;
        
        cartItemsContainer.appendChild(cartItemDiv);
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) cartTotal.innerText = total.toFixed(2).replace('.', ',') + ' €';
    
    // ✅ WICHTIG: Warenkorb in localStorage speichern (für Cheat-Seite)
    localStorage.setItem('kriegerCart', JSON.stringify(cart));
}

// Event Delegation für Warenkorb - EINFACH & ZUVERLÄSSIG
// Event Delegation für Warenkorb - MIT closest()
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', function(e) {
            // Finde das nächste Elternelement mit data-action
            // (wichtig wenn man auf SVG/Icons klickt!)
            const button = e.target.closest('[data-action]');
            
            if (!button) return;
            
            const action = button.dataset.action;
            const itemId = button.dataset.id;
            
            if (!action || !itemId) return;
            
            e.preventDefault();
            e.stopPropagation();
            
            console.log(`Action: ${action}, Item ID: ${itemId}`);
            
            if (action === 'minus') {
                changeQuantity(itemId, -1);
            } else if (action === 'plus') {
                changeQuantity(itemId, 1);
            } else if (action === 'remove') {
                removeFromCart(itemId);
            }
        });
    }
});

// Event-Listener für Warenkorb-Buttons
function attachCartEventListeners() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    
    // Minus Buttons
    cartItemsContainer.querySelectorAll('.qty-minus').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const cartItem = this.closest('.cart-item');
            const itemId = cartItem.dataset.itemId;
            console.log('Minus geklickt:', itemId);
            changeQuantity(itemId, -1);
        });
    });
    
    // Plus Buttons
    cartItemsContainer.querySelectorAll('.qty-plus').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const cartItem = this.closest('.cart-item');
            const itemId = cartItem.dataset.itemId;
            console.log('Plus geklickt:', itemId);
            changeQuantity(itemId, 1);
        });
    });
    
    // Entfernen Buttons
    cartItemsContainer.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const cartItem = this.closest('.cart-item');
            const itemId = cartItem.dataset.itemId;
            console.log('Entfernen geklickt:', itemId);
            removeFromCart(itemId);
        });
    });
}

// ============================================
// 🔐 CHECKOUT & DISCORD
// ============================================
function checkout() {
    // Spam-Schutz: Verhindere Mehrfachklicks
    if (isCheckingOut) {
        console.log('⚠️ Checkout läuft bereits...');
        return;
    }
    
    const checkoutBtn = document.getElementById('checkout-btn');
    
    // Flag setzen
    isCheckingOut = true;
    
    // Button visuell deaktivieren
    if (checkoutBtn) {
        checkoutBtn.disabled = true;
        checkoutBtn.style.cursor = 'not-allowed';
        checkoutBtn.style.pointerEvents = 'none'; // Verhindert ALLE Klicks
        checkoutBtn.innerHTML = `
            <svg class="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            WIRD VERARBEITET...
        `;
    }
    
    console.log('🛒 Checkout gestartet...');
    
    if (cart.length === 0) {
        // Flag zurücksetzen
        isCheckingOut = false;
        
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.style.cursor = 'pointer';
            checkoutBtn.style.pointerEvents = 'auto';
            checkoutBtn.innerHTML = `
                ZUR KASSE
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            `;
        }
        alert('Warenkorb ist leer!');
        return;
    }

    const code = generateRandomCode();
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const checkoutData = {
        code: code,
        total: total,
        items: cart,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

    sendDiscordNotification(checkoutData)
        .then(() => {
            console.log('✅ Discord-Nachricht gesendet!');
            setTimeout(() => {
                window.location.href = 'checkout.html';
            }, 500); // Schnelle Weiterleitung
        })
        .catch(error => {
            console.error('❌ Fehler:', error);
            
            // Flag nur bei Fehler zurücksetzen
            isCheckingOut = false;
            
            if (checkoutBtn) {
                checkoutBtn.disabled = false;
                checkoutBtn.style.cursor = 'pointer';
                checkoutBtn.style.pointerEvents = 'auto';
                checkoutBtn.innerHTML = `
                    ZUR KASSE
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                `;
            }
            
            // Trotzdem weiterleiten
            setTimeout(() => {
                window.location.href = 'checkout.html';
            }, 500);
        });
}

function generateRandomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 12; i++) {
        if (i > 0 && i % 4 === 0) code += '-';
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

async function sendDiscordNotification(checkoutData) {
    if (!DISCORD_WEBHOOK_URL || DISCORD_WEBHOOK_URL.trim() === "") {
        throw new Error('Webhook URL nicht konfiguriert');
    }

    const itemsList = checkoutData.items.map(item => 
        `• **${item.name}** x${item.quantity} = ${(item.price * item.quantity).toFixed(2)} €`
    ).join('\n');

    const embed = {
        title: "🛒 Neue Bestellung eingegangen!",
        color: 0xffffff,
        fields: [
            { name: "🔑 Bestell-Code", value: `\`${checkoutData.code}\``, inline: true },
            { name: "💰 Gesamtpreis", value: `**${checkoutData.total.toFixed(2).replace('.', ',')} €**`, inline: true },
            { name: "📦 Artikel", value: itemsList || "Keine Artikel", inline: false },
            { name: "🕐 Zeitpunkt", value: new Date(checkoutData.timestamp).toLocaleString('de-DE'), inline: false }
        ],
        footer: { text: "KRIEGER Shop" },
        timestamp: checkoutData.timestamp
    };

    const payload = {
    content: `<@&1522544910916518008> 🔔 **Neue Bestellung!**`,
    embeds: [embed]
};

    const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    
    if (response.ok) {
        return true;
    } else {
        throw new Error(`Discord API Error: ${response.status}`);
    }
}

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    const toastMessage = document.getElementById('toast-message');
    if (toastMessage) toastMessage.innerText = message;
    
    toast.classList.remove('translate-y-24');
    
    setTimeout(() => {
        toast.classList.add('translate-y-24');
    }, 2500);
}