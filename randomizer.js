function randomizeProduct(){
    products = ["Audi", "Volvo", "Saab", "Bmw", "Opel"
    ]
    productElement = document.getElementById("randomProduct")
    productIndex = Math.floor(Math.random()*products.length);
    product = products[productIndex];
    productElement.getInnerHTML = "Random product: "+ product;
}