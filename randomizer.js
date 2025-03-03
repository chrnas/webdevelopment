function randomizeProduct(){
    products = ["Audi", "Volvo", "Saab", "Bmw", "Opel"
    ]
    productIndex = Math.floor(Math.random()*products.length);
    product = products[productIndex];
    document.getElementById("randomProduct").innerHTML = "Random product: "+ product;
}