// script.js
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
});








