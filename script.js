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


function getMenuItems(){
    const menuItems = [
        { "name": "Margherita", "ingredients": "ost", "category":"pizza"},
        { "name": "Pepperoni", "ingredients": "pepperoni, mozzarella", "category":"pizza" },
        { "name": "Veggie", "ingredients": "tomatoes, bell peppers, mushrooms", "category":"pizza" },
        { "name": "Hawaiian", "ingredients": "ham, pineapple, cheese", "category":"pizza" },
        { "name": "BBQ Chicken", "ingredients": "chicken, BBQ sauce, onions", "category":"other" },
        { "name": "Four Cheese", "ingredients": "mozzarella, parmesan, cheddar, blue cheese", "category":"pasta" },
        { "name": "Seafood", "ingredients": "shrimp, mussels, garlic", "category":"sallad" },
    ];
    return menuItems;
}