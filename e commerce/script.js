// Exemple de script pour ajouter au panier
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.bg-white');
    
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            alert("Produit ajouté au panier !");
        });
    });
});
