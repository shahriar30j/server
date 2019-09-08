const fs = require('fs');
const path = require('path');

// const products = [];

const pth = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = (cb) => {
    
    fs.readFile(pth, (err, fileContent) => {
        if (err) {
            return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(ttl) {
        this.title = ttl;
    }
    save() {
        // products.push(this);
        // const pth = path.join(
        //     path.dirname(process.mainModule.filename),
        //     'data',
        //     'products.json'
        // );
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(pth, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {

        getProductsFromFile(cb);
        // return products;
    }
};