function renderDailyMenuList() {
    const menuItems = getMenuItems()
    const listContainer = document.getElementById('dailiy-menu-list');
    listContainer.innerHTML = '';  // Clear any existing content
    
    // Loop through the array and create list items dynamically
    menuItems.forEach(item => {
        const listItemElement = document.createElement('li');

        const dayElement = document.createElement('h3');
        dayElement.textContent = item.day;
        listItemElement.appendChild(dayElement);
        
        const nameElement = document.createElement('h2');
        nameElement.textContent = item.name;
        listItemElement.appendChild(nameElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = item.description;
        listItemElement.appendChild(ingredientsElement);

        listContainer.appendChild(listItemElement);
    });
}

function getMenuItems(){
    const menuItems = [
        { "day":"Måndag", "name": "Kycklingspett", "description": "Med pommes och bearnaisesås" },
        { "day":"Tisdag", "name": "Panerad rödspetta", "description": "Med remouladsås och potatis" },
        { "day":"Onsdag", "name": "Pytt i pann", "description": "Med stekt ägg och rödbetor" },
        { "day":"Torsdag", "name": "Raggmunk", "description": "Med stekt fläsk och lingonsylt" },
        { "day":"Fredag", "name": "Hemlagad schnitzel", "description": "Med stekt potatis och bearnaisesås" }
    ];
    return menuItems;
}