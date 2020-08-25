var app = new Vue({
    el: '#app',
    data: {
        description: 'Silly White Whale\'s Playing',
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        image: './assets/vmSocks-green.jpg',
        inStock: false,
        inventory: 8,
        link: 'https://quasimatic.com',
        onSale: true,
        product: 'Socks',
        sizes: ["Small", "Medium", "Large"],
        variants: [
            {
                variantId: 12345,
                variantColor: 'green'
            },
            {
                variantId: 67890,
                variantColor: 'blue'
            }
        ]
    }
});