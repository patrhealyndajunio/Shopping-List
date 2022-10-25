import { Component } from '@angular/core';
import { LocalDataService } from './services/local-data.service';
import { Items } from './shoppingList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping-List';

  item: Items = {
    itemID: 1,
    itemName: 'Milk',
    itemQuantity: 7,
    itemPrice: 143,
    itemDescription: 'This is a evaporated milk.'
  }

  model = new Items(11, 'MILK', 'This is a evaporated milk.', 7, 143.25);

  submitted = false;

  constructor(private localDataService: LocalDataService) {

  }

  consoleLog() {
    console.log("storedShoppingList", this.localDataService.shoppingItems);
  }

  onSubmit() { this.submitted = true; }

  newItem() {
    this.model = new Items(0, '', '', 0, 0);
  }

  showFormControls(list: any) {
    return list && list.controls.itemName &&
      list.controls.itemName.value;
  }
}
