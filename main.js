Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <a :href="link" target="_blank"><img v-bind:src="image"></a>
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <div>Description: {{ description }}</div>
                <p v-if="inStock">In Stock</p>
                <p v-else :class="{ strikeThrough : !inStock }">Out of Stock</p>
                <p v-if="onSale">On Sale</p>
                
                <p>Shipping: {{ shipping }}</p>

                <product-details :details="details"></product-details>

                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>

                <div v-for="(variant, index) in variants"
                     :key="variant.variantId"
                     class="color-box"
                     :style="{ backgroundColor: variant.variantColor}"
                     @mouseover="updateProduct(index)">
                </div>

                <div class="actions">
                    <button v-on:click="addToCart"
                            :disabled="!inStock"
                            :class="{ disabledButton: !inStock }">Add to Cart</button>
                    <button v-on:click="removeFromCart">Remove from Cart</button>
                </div>

                <div class="cart">
                    <p>Cart({{ cart }})</p>
                </div>
            </div>
        </div>
    `,
    computed: {
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        title() {
            return this.brand + ' ' + this.product;
        },
        shipping() {
            if(this.premium) {
                return "Free"
            }

            return 2.99
        }
    },
    data() {
        return {
            brand: 'Vue Mastery',
            cart: 0,
            description: 'Silly White Whale\'s Playing',
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            selectedVariant: 0,
            inventory: 100,
            link: 'https://quasimatic.com',
            onSale: true,
            product: 'Socks',
            sizes: ['Small', 'Medium', 'Large'],
            variants: [
                {
                    variantId: 12345,
                    variantColor: 'green',
                    variantImage: './assets/vmSocks-green.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 67890,
                    variantColor: 'blue',
                    variantImage: './assets/vmSocks-blue.jpg',
                    variantQuantity: 0
                }
            ]
        }
    } ,
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            if(this.cart > 0)
                this.cart -= 1;
        },
        updateProduct(index) {
            this.selectedVariant = index;
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: false
    }
});