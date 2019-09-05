const products = [];

module.exports = class Product {
    constructor(ttl) {
        this.title = ttl;
    }
    save() {
        products.push(this);
    }

    static fetchAll() {
        return products;
    }
}