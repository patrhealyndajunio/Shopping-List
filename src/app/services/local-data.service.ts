import { Injectable } from "@angular/core";
import { Item } from "../shoppingList";

@Injectable({ providedIn: "root" })
export class LocalDataService {
  state = 'listing';
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

  updateItem(id: number, updatedItem: Partial<Item>) {
    this.shoppingItems = this.shoppingItems.map((item) => {
      if (item.itemID == id) {
        return {
          ...item,
          ...updatedItem,
          itemID: id,
        }
      }

      return item;
    });
  }

  getState() {
    return this.state;
  }

  getItemById(id: number): Item | undefined {
    return this.shoppingItems.find((item) => item.itemID == id);
  }

  getNextId() {
    if (this.shoppingItems.length <= 0) {
      return 1;
    }

    const lastItemById = this.shoppingItems.sort((item1, item2) => item1.itemID-item2.itemID);
    return lastItemById[0].itemID + 1;
  }

}