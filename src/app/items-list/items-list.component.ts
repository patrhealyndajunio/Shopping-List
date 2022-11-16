import { Component } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { Items } from '../shoppingList';


@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {

  title = 'Add Items';

  constructor(public localDataService: LocalDataService) {

  }


  model = new Items(1, 'MILK', 'This is an evaporated milk.', 7, 143.25);

  submitted = false;

  onSubmit() {
    this.localDataService.shoppingItems.push(
      new Items(
        this.model.itemID++,
        this.model.itemName,
        this.model.itemDescription,
        this.model.itemQuantity,
        this.model.itemPrice
      ));

    this.submitted = true;
  }

  newItem(): void {
    this.model = new Items(12, 'MILO', 'This is a energy drink.', 8, 70.25);
  }

  showFormControls(list: any) {
    return list && list.controls.itemName &&
      list.controls.itemName.value;
  }

  clearItem() {
    this.localDataService.shoppingItems = [];
    return this.newItem;
  }

  deleteItem(itemID: any) {
    let index = this.localDataService.shoppingItems.findIndex(item => item.itemID === itemID);

    if(index === -1){
      this.localDataService.shoppingItems.splice(index,1);
    }
    console.log(index);
  }

}

