import { Injectable } from "@angular/core";
import { Item } from "../shoppingList";

@Injectable({ providedIn: "root" })
export class LocalDataService {
  shoppingItems = new Array<Item>();

  addItem(item: Partial<Item>) {
    this.shoppingItems.push({
      itemName: '',
      itemDescription: '',
      itemQuantity: 0,
      itemPrice: 0,
      ...item,
      itemID: this.getNextId(),
    });
  }

  getNextId() {
    if (this.shoppingItems.length <= 0) {
      return 1;
    }

    const lastItemById = this.shoppingItems.sort((item1, item2) => item1.itemID-item2.itemID);
    return lastItemById[0].itemID + 1;
  }

}