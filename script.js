function hello_world(){
    alert("Hello, JavaScript!")
}

function renderMenuList() {
    const menuItems = getMenuItems()
    const listContainer = document.getElementById('item-list');
    listContainer.innerHTML = '';  // Clear any existing content
    
    // Loop through the array and create list items dynamically
    menuItems.forEach(item => {
        const listItemElement = document.createElement('li');
        listItemElement.className = "menu-item";
        listItemElement.setAttribute("filter",item.category)
        const nameElement = document.createElement('h3');
        nameElement.textContent = item.name;
        listItemElement.appendChild(nameElement);
        const ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = item.ingredients;
        listItemElement.appendChild(ingredientsElement);
        listContainer.appendChild(listItemElement);
    });
}


function getMenuItems() {
    const menuItems = [
        { "name": "Margherita", "ingredients": "ost", "category": "pizza" },
        { "name": "Vesuvio", "ingredients": "skinka", "category": "pizza" },
        { "name": "Bologna", "ingredients": "köttfärs", "category": "pizza" },
        { "name": "Calzone", "ingredients": "skinka", "category": "pizza" },
        { "name": "Tutti Frutti", "ingredients": "ananas, banan", "category": "pizza" },
        { "name": "Hawaii", "ingredients": "skinka, ananas", "category": "pizza" },
        { "name": "Capricciosa", "ingredients": "skinka, champinjoner", "category": "pizza" },
        { "name": "Venezia", "ingredients": "skinka, räkor", "category": "pizza" },
        { "name": "Paradiso", "ingredients": "räkor, champinjoner", "category": "pizza" },
        { "name": "Paesana", "ingredients": "bacon, lök", "category": "pizza" },
        { "name": "Cacciatorav", "ingredients": "salami, lök", "category": "pizza" },
        { "name": "Pescatore", "ingredients": "tonfisk, räkor", "category": "pizza" },

        { "name": "Vegetaria", "ingredients": "champinjoner, lök, paprika, ananas, kronärtskocka", "category": "pizza" },
        { "name": "Nino", "ingredients": "champinjoner, lök, köttfärssås, räkor", "category": "pizza" },
        { "name": "Long John", "ingredients": "skinka, tonfisk, räkor", "category": "pizza" },
        { "name": "Quattro Stagioni", "ingredients": "skinka, tonfisk, räkor, musslor, kronärtskocka", "category": "pizza" },
        { "name": "Kycklingpizza", "ingredients": "kyckling, ananas, curry, banan, lök", "category": "pizza" },
        { "name": "Grekisk special", "ingredients": "fetaost, feferoni, lök, oliver, tomater (färska)", "category": "pizza" },

        { "name": "Kebabpizza", "ingredients": "tomatsås, ost, kebabsås mild, feferoni, lök, tomater (färska), kebabkött", "category": "pizza" },
        { "name": "Kebabpizza special", "ingredients": "tomatsås, ost, kebabsås mild, feferoni, isbergssallad, lök, tomater (färska), kebabkött", "category": "pizza" },
        { "name": "Kebabpizza med pommes", "ingredients": "tomatsås, ost, kebabsås mild, feferoni, lök, tomater (färska), kebabkött, pommes", "category": "pizza" },
        { "name": "Viking kebab", "ingredients": "tomatsås, ost, kebabsås, feferoni, gurka, isbergssallad, lök, tomater (färska), kebabkött (fläskkarré)", "category": "pizza" },

        { "name": "Acapulco", "ingredients": "tacosås, tacokryddmix, jalapeño, oxfilé, vitlök, champinjoner, lök", "category": "pizza" },
        { "name": "Mexicana special", "ingredients": "köttfärs, tacosås, jalapeño, kryddmix, lök, paprika", "category": "pizza" },
        { "name": "Azteka", "ingredients": "skinka, tacosås, jalapeño, kryddmix, kebabsås", "category": "pizza" },

        { "name": "Black&white", "ingredients": "oxfilé, fläskfilé, bearnaisesås", "category": "pizza" },
        { "name": "De Chef", "ingredients": "oxfilé, champinjoner, bearnaisesås", "category": "pizza" },
        { "name": "Tropicana", "ingredients": "skinka, räkor, banan, fläskfile", "category": "pizza" },
        { "name": "Robban", "ingredients": "paprika, champinjoner, räkor, vitlök, oxfilé, bearnaisesås", "category": "pizza" },
        { "name": "Studente", "ingredients": "oxfilé, ädelost, lök, purjolök, paprika", "category": "oxfile/flaskfile pizza" },
        { "name": "Sandra", "ingredients": "purjolök, sparris, färska tomater, oxfilé, bearnaisesås", "category": "pizza" },

        { "name": "Pizza Parma", "ingredients": "parmaskinka, olivolja, mozzarellaost, ruccolasallad, vitlök (färsk), soltorkade tomater", "category": "pizza" },
        { "name": "Pizza Spenat", "ingredients": "bladspenat, olivolja, färska champinjoner, färska vitlök, fetaost", "category": "pizza" },
        { "name": "Mozzarella", "ingredients": "champinjoner (färska), olivolja, mozzarellaost, bladspenat, körsbärstomater, vitlök (färsk)", "category": "pizza" },
        { "name": "Daniella", "ingredients": "gorgonzola, körsbärstomater, ädelost, mozzarellaost, fetaost", "category": "lyx pizza" },

        { "name": "Vegan Kebabpizza", "ingredients": "veganost, vegankebab, färska tomater, feferoni, sås, lök", "category": "pizza" },
        { "name": "Vegan Kebabpizza Special", "ingredients": "veganost, vegankebab, färska tomater, feferoni, sås, lök, isbergssallad, gurka", "category": "pizza" },
        { "name": "Vegan Paesana", "ingredients": "cheezly (mozzarella), fejkon (bacon), champinjoner (färska), lök, vitlök (färsk)", "category": "pizza" },
        { "name": "Vegan Salami", "ingredients": "cheezly (mozzarella), champinjoner (färska), lök, vitlök (färsk), pepperoni (salami)", "category": "pizza" },
        { "name": "Celine", "ingredients": "zucchini, aubergine (grillad), tomater (soltorkade), mozzarellaost, paprika, ruccola", "category": "pizza" },

        { "name": "Kebabsallad", "ingredients": "kebabkött, isbergssallad, tomat, gurka, lök, paprika, pepperoni, majs, morot, rucola, kebabsås", "category": "salad" },
        { "name": "Kycklingsallad", "ingredients": "kyckling, isbergssallad, tomat, gurka, lök, paprika, ananas, majs, morot, rucola, rhode islandsås", "category": "salad" },
        { "name": "Skaldjur Sallad", "ingredients": "räkor, tonfisk, musslor, isbergssallad, tomat, gurka, lök, paprika, majs, citron, dill, morot, rucola, rhode islandsås", "category": "salad" },

        { "name": "Hamburger 90gr med Pommes", "ingredients": "", "category": "other" },
        { "name": "Hamburger 150gr med Pommes", "ingredients": "", "category": "other" },
        { "name": "Pasta med Bolognese", "ingredients": "", "category": "pasta" },
        { "name": "Pasta med Carbonara", "ingredients": "", "category": "pasta" },
        { "name": "Schnitzel med Pommes", "ingredients": "", "category": "other" },

        { "name": "Lasagne", "ingredients": "", "category": "pasta" }
    ];
    return menuItems;
}
