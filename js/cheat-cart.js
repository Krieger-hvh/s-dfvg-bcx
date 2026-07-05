// ============================================
// 🔐 DISCORD WEBHOOK & PING SETTINGS
// ============================================
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1513950453140815984/-Ev1AQvMw4SrWDfCoBmHCo9y4SQ1IC5N1sM12LhsQQ7FfwymK2RyDtyq4r9I3kdOtzec";
const PING_ROLE_ID = "1522544910916518008";

// ============================================
// 🛒 GETEILTER WARENKORB (localStorage)
// ============================================
let cart = JSON.parse(localStorage.getItem('kriegerCart')) || [];
let isCheckingOut = false;

// ============================================
//  INITIALISIERUNG
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ KRIEGER Cheat Seite geladen');
    console.log('🛒 Warenkorb geladen:', cart);
    console.log('📡 Webhook URL:', DISCORD_WEBHOOK_URL ? '✅ Vorhanden' : '❌ Fehlt');
    console.log('🔔 Rolle ID:', PING_ROLE_ID ? '✅ Vorhanden' : ' Fehlt');
    updateCartUI();
});

// ============================================
// 🛒 WARENKORB FUNKTIONEN
// ============================================

// Cheat-Produkt zum Warenkorb hinzufügen
window.addCheatToCart = function(name, price, image) {
    console.log('➕ Produkt hinzufügen:', name, price);
    const cartId = 'cheat_' + name.replace(/\s+/g, '_').toLowerCase();
    
    const existingItem = cart.find(item => item.id === cartId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: cartId,
            name: name,
            price: price,
            image: image,
            stock: 'Auf Lager',
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${name} wurde hinzugefügt.`);
};

// Warenkorb öffnen/schließen
window.toggleCart = function() {
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
};

// Produkt aus Warenkorb entfernen
window.removeFromCart = function(itemId) {
    console.log('️ Entfernen:', itemId);
    cart = cart.filter(item => String(item.id) !== String(itemId));
    saveCart();
    updateCartUI();
};

// Menge ändern
window.changeQuantity = function(itemId, delta) {
    console.log(' Menge ändern:', itemId, delta);
    const item = cart.find(item => String(item.id) === String(itemId));
    if (!item) return;

    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(itemId);
    } else {
        saveCart();
        updateCartUI();
    }
};

// Warenkorb in localStorage speichern
function saveCart() {
    localStorage.setItem('kriegerCart', JSON.stringify(cart));
    console.log('💾 Warenkorb gespeichert:', cart);
}

// Warenkorb UI aktualisieren
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
        localStorage.setItem('kriegerCart', JSON.stringify(cart));
        return;
    }

    cartItemsContainer.classList.remove('hidden');
    if (cartFooter) cartFooter.classList.remove('hidden');
    if (cartEmpty) cartEmpty.classList.add('hidden');

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
    
    localStorage.setItem('kriegerCart', JSON.stringify(cart));
}

// Event Delegation für Warenkorb-Buttons
document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', function(e) {
            const button = e.target.closest('[data-action]');
            
            if (!button) return;
            
            const action = button.dataset.action;
            const itemId = button.dataset.id;
            
            if (!action || !itemId) return;
            
            e.preventDefault();
            e.stopPropagation();
            
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

// ============================================
// 🔐 CHECKOUT MIT DISCORD WEBHOOK
// ============================================
window.checkout = function() {
    console.log(' Checkout wurde aufgerufen!');
    console.log('🛒 Warenkorb:', cart);
    console.log('📡 Webhook URL:', DISCORD_WEBHOOK_URL);
    console.log('🔔 Rolle ID:', PING_ROLE_ID);
    
    if (isCheckingOut) {
        console.log('⚠️ Checkout läuft bereits!');
        return;
    }
    
    const checkoutBtn = document.getElementById('checkout-btn');
    isCheckingOut = true;
    
    if (checkoutBtn) {
        checkoutBtn.disabled = true;
        checkoutBtn.style.cursor = 'not-allowed';
        checkoutBtn.style.pointerEvents = 'none';
        checkoutBtn.innerHTML = `
            <svg class="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            WIRD VERARBEITET...
        `;
    }
    
    if (cart.length === 0) {
        console.log('❌ Warenkorb ist leer!');
        isCheckingOut = false;
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.style.cursor = 'pointer';
            checkoutBtn.style.pointerEvents = 'auto';
            checkoutBtn.innerHTML = `
                ZUR KASSE
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
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
    
    console.log('📦 Checkout Daten:', checkoutData);
    
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));

    // Discord Webhook senden
    sendDiscordNotification(checkoutData)
        .then(() => {
            console.log('✅ Discord-Nachricht gesendet!');
            setTimeout(() => {
                window.location.href = 'checkout.html';
            }, 500);
        })
        .catch(error => {
            console.error('❌ Fehler beim Discord Webhook:', error);
            isCheckingOut = false;
            
            if (checkoutBtn) {
                checkoutBtn.disabled = false;
                checkoutBtn.style.cursor = 'pointer';
                checkoutBtn.style.pointerEvents = 'auto';
                checkoutBtn.innerHTML = `
                    ZUR KASSE
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                `;
            }
            
            setTimeout(() => {
                window.location.href = 'checkout.html';
            }, 500);
        });
};

function generateRandomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 12; i++) {
        if (i > 0 && i % 4 === 0) code += '-';
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// ============================================
// 📢 DISCORD WEBHOOK MIT ROLLEN-PING
// ============================================
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
            { name: " Bestell-Code", value: `\`${checkoutData.code}\``, inline: true },
            { name: "💰 Gesamtpreis", value: `**${checkoutData.total.toFixed(2).replace('.', ',')} €**`, inline: true },
            { name: " Artikel", value: itemsList || "Keine Artikel", inline: false },
            { name: "🕐 Zeitpunkt", value: new Date(checkoutData.timestamp).toLocaleString('de-DE'), inline: false }
        ],
        footer: { text: "KRIEGER Shop" },
        timestamp: checkoutData.timestamp
    };

    const payload = {
        content: `<@&${PING_ROLE_ID}>  **Neue Bestellung!** Bitte Ticket öffnen und Code einlösen.`,
        embeds: [embed]
    };

    console.log('📤 Sende Payload an Discord:', JSON.stringify(payload, null, 2));

    const response = await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    
    if (response.ok) {
        console.log('✅ Discord-Nachricht mit Rollen-Ping gesendet!');
        return true;
    } else {
        const errorText = await response.text();
        console.error('❌ Discord API Error:', response.status, errorText);
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