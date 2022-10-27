import { Component } from '@angular/core';
import { LocalDataService } from './services/local-data.service';
import { Items } from './shoppingList';
import { enableProdMode } from '@angular/core';

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

  constructor(public localDataService: LocalDataService) {

  }

  onSubmit() { this.submitted = true; }

  showFormControls(list: any) {
    return list && list.controls.itemName &&
      list.controls.itemName.value;
  }
}

enableProdMode();
