// ============================================
// 💳 CHECKOUT SEITE LOGIK
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Checkout-Daten aus localStorage laden
    const checkoutData = localStorage.getItem('checkoutData');
    
    if (!checkoutData) {
        // KEINE automatische Weiterleitung mehr!
        // Stattdessen leere Seite mit Hinweis anzeigen
        document.body.innerHTML = `
            <div class="min-h-screen flex items-center justify-center p-4">
                <div class="glass rounded-2xl p-8 max-w-md text-center">
                    <div class="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 class="text-2xl font-bold text-white mb-2">Keine Bestellung gefunden</h2>
                    <p class="text-slate-400 mb-6">Du hast noch keine Bestellung abgeschlossen.</p>
                    <a href="index.html" class="inline-block px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-colors">
                        Zurück zum Shop
                    </a>
                </div>
            </div>
        `;
        return;
    }

    const data = JSON.parse(checkoutData);
    
    // Code anzeigen
    document.getElementById('checkout-code').innerText = data.code;
    
    // Bestell-Items anzeigen
    const orderItemsContainer = document.getElementById('order-items');
    orderItemsContainer.innerHTML = data.items.map(item => `
        <div class="order-item flex justify-between items-center py-2 px-3 glass rounded-lg">
            <div class="flex items-center gap-3">
                <img src="${item.image}" alt="${item.name}" 
                     class="w-10 h-10 rounded-lg object-cover bg-slate-800"
                     onerror="this.src='https://placehold.co/50x50/1e293b/6366f1?text=${encodeURIComponent(item.name.substring(0,2))}'">
                <div>
                    <div class="text-white text-sm font-semibold">${item.name}</div>
                    <div class="text-slate-500 text-xs">Menge: ${item.quantity}</div>
                </div>
            </div>
            <div class="text-brand-accent font-bold text-sm">
                ${(item.price * item.quantity).toFixed(2).replace('.', ',')} €
            </div>
        </div>
    `).join('');

    // Gesamtpreis anzeigen
    document.getElementById('order-total').innerText = data.total.toFixed(2).replace('.', ',') + ' €';
});

// ============================================
// 📋 CODE KOPIEREN
// ============================================
window.copyCode = function() {
    const code = document.getElementById('checkout-code').innerText;
    
    navigator.clipboard.writeText(code).then(() => {
        const toast = document.getElementById('copy-toast');
        toast.classList.add('toast-show');
        
        const copyText = document.getElementById('copy-text');
        copyText.innerText = '✓ Kopiert!';
        
        setTimeout(() => {
            toast.classList.remove('toast-show');
            copyText.innerText = 'Code kopieren';
        }, 2500);
    }).catch(err => {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        alert('Code kopiert: ' + code);
    });
};