document.addEventListener("DOMContentLoaded", function () {
    const filters = document.querySelectorAll('.filter');
    const products = document.querySelectorAll('.product');

    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault();

            const category = filter.getAttribute('data-category');

            products.forEach(product => {
                const productCategory = product.querySelector('.additional-info').innerText.toLowerCase();
                const productName = product.querySelector('h2').innerText.toLowerCase();

                // Aangepaste logica voor de filters
                if (
                    (category === 'computer-onderdelen' && (productName.includes('fan') || productName.includes('core'))) ||
                    (category === 'laptops' && (productName.includes('laptop') || productName.includes('imac'))) ||
                    (category === 'telefonie-tablets' && (productName.includes('iphone') || productName.includes('galaxy') || productName.includes('oneplus'))) ||
                    (category === 'accessoires' && productCategory.includes('usb'))
                ) {
                    product.style.display = 'flex';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    // Sorteerfunctie voor prijzen
    const sortByPrice = (direction) => {
        const sortedProducts = Array.from(products).sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));

            return direction === 'asc' ? priceA - priceB : priceB - priceA;
        });

        const productContainer = document.querySelector('.product-container');
        productContainer.innerHTML = '';

        sortedProducts.forEach(product => {
            productContainer.appendChild(product);
        });
    };

    // Event listeners voor sorteerfunctionaliteit
    document.getElementById('sort-ascending').addEventListener('click', () => sortByPrice('asc'));
    document.getElementById('sort-descending').addEventListener('click', () => sortByPrice('desc'));
});









