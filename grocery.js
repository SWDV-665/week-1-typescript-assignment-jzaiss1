// John Zaiss (GitHub id jzaiss1)
// SWDV 665: ADV TOPICS: SOFTWARE DVLPMNT 1W 20/SP2
// Week 1 | TypeScript Assignment
var Groceries = /** @class */ (function () {
    function Groceries(itemName, quantity, price) {
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
        this.fullItemName = itemName;
    }
    return Groceries;
}());
function groceryItem(item) {
    return "<td>" + item.itemName + "</td><td>" + item.quantity + "</td><td> $" + item.price + "</td>";
}
var groceryList = [
    groceryItem(new Groceries("Milk", 4, 3.15)),
    groceryItem(new Groceries("Bread", 2, 3.75)),
    groceryItem(new Groceries("Apples", 8, 0.75)),
    groceryItem(new Groceries("Eggs", 3, 1.75)),
    groceryItem(new Groceries("Cereal", 3, 4.15)),
    groceryItem(new Groceries("Juice", 1, 3.75))
];
var listTable = "<table>";
for (var _i = 0, groceryList_1 = groceryList; _i < groceryList_1.length; _i++) {
    var i = groceryList_1[_i];
    listTable += "<tr>" + i + "</tr>";
}
listTable += "</table>";
document.body.innerHTML = listTable;
