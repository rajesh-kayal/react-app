const Menu = [
    {
        id: 1,
        image: "images/KOl-food's (1).jpeg",
        name: "Macher Jhol",
        category: "lunch",
        price: 120,
        description: "A traditional Bengali fish curry served with rice."
    },
    {
        id: 2,
        image: "images/KOl-food's (2).jpeg",
        name: "Kosha Mangsho",
        category: "dinner",
        price: 180,
        description: "Slow-cooked spicy mutton curry, a delicacy from Kolkata."
    },
    {
        id: 3,
        image: "images/KOl-food's (3).jpeg",
        name: "Phuchka",
        category: "snack",
        price: 20,
        description: "Crispy hollow balls filled with spicy tamarind water, chickpeas, and potatoes."
    },
    {
        id: 4,
        image: "images/KOl-food's (4).jpeg",
        name: "Chingri Malai Curry",
        category: "lunch",
        price: 250,
        description: "Creamy prawn curry cooked with coconut milk and spices."
    },
    {
        id: 5,
        image: "images/KOl-food's (5).jpeg",
        name: "Aloo Posto",
        category: "lunch",
        price: 100,
        description: "Potatoes cooked with poppy seeds paste, a traditional Bengali dish."
    },
    // Add more menu items as needed
    // Continue adding Bengali food items found in Kolkata markets
    {
        id: 6,
        image: "images/KOl-food's (6).jpeg",
        name: "Shorshe Ilish",
        category: "dinner",
        price: 300,
        description: "Hilsa fish marinated in mustard paste, a seasonal delicacy."
    },
    {
        id: 7,
        image: "images/KOl-food's (7).jpeg",
        name: "Mishti Doi",
        category: "dessert",
        price: 50,
        description: "Sweetened yogurt, a popular Bengali dessert."
    },
    // Add more menu items as needed
];

// Repeat images with sequential IDs for more items
for (let i = 8; i <= 50; i++) {
    const id = i;
    const image = `images/KOl-food's (${i % 7 + 1}).jpeg`;
    const name = `Food Item ${i}`;
    const category = "miscellaneous";
    const price = Math.floor(Math.random() * 200) + 50;
    const description = "Description for food item.";
    Menu.push({ id, image, name, category, price, description });
}

export default Menu;
