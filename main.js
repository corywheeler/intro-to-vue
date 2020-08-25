var app = new Vue({
    el: '#app',
    data: {
        cart: 0,
        description: 'Silly White Whale\'s Playing',
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        image: './assets/vmSocks-green.jpg',
        inStock: false,
        inventory: 0,
        link: 'https://quasimatic.com',
        onSale: true,
        product: 'Socks',
        sizes: ['Small', 'Medium', 'Large'],
        variants: [
            {
                variantId: 12345,
                variantColor: 'green',
                variantImage: './assets/vmSocks-green.jpg'
            },
            {
                variantId: 67890,
                variantColor: 'blue',
                variantImage: './assets/vmSocks-blue.jpg'
            }
        ]
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            if(this.cart > 0)
                this.cart -= 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
});