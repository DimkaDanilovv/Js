let product = "Socks";
let app = new Vue({
    el: '#app',
    data: {
    product: "Socks",
    image: "./assets/vmSocks-green-onWhite.jpg",
    altText: "A pair of socks",
    inStock: true,
    cart: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],

    variants: [
        {
            variantId: 2234,
            variantColor: 'green',
            variantImage: "./assets/vmSocks-green-onWhite.jpg",
        },
        {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: "./assets/vmSocks-blue-onWhite.jpg",
        }
    ],

    updateProduct(variantImage) {
        this.image = variantImage
    }
    },

    methods: {
        addToCart() {
            cart = 0
            this.cart += 1
        },
        deleteToCart() {
            cart = 0
            this.cart -= 1
        }
    },
})