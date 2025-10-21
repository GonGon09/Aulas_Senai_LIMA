document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.categoria-btn');
    const products = document.querySelectorAll('.produto');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Ativa/desativa o botão
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            products.forEach(product => {
                const category = product.getAttribute('data-category');
                if (filter === 'todos' || filter === category) {
                    product.classList.remove('hidden');
                } else {
                    product.classList.add('hidden');
                }
            });
        });
    });
});
