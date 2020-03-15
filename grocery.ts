// John Zaiss (GitHub id jzaiss1)
// SWDV 665: ADV TOPICS: SOFTWARE DVLPMNT 1W 20/SP2
// Week 1 | TypeScript Assignment

class Groceries {
    fullItemName: string;
    constructor(
      public itemName: string,
      public quantity: number,
      public price: number
    ) {
      this.fullItemName = itemName;
    }
  }
  
  interface Item {
    itemName: string;
    quantity: number;
    price: number;
  }
  
  function groceryItem(item: Item) {
    return "<td>" + item.itemName + "</td><td>" + item.quantity + "</td><td> $" + item.price + "</td>"
  }
  
  let groceryList = [
      groceryItem(new Groceries("Milk", 4, 3.15)), 
      groceryItem(new Groceries("Bread", 2, 3.75)),
      groceryItem(new Groceries("Apples", 8, 0.75)), 
      groceryItem(new Groceries("Eggs", 3, 1.75)),
      groceryItem(new Groceries("Cereal", 3, 4.15)), 
      groceryItem(new Groceries("Juice", 1, 3.75))
  ]

  let listTable = "<table>";

  for (let i of groceryList) {
        listTable += "<tr>" + i + "</tr>";
  }

  listTable += "</table>"
  document.body.innerHTML = listTable;