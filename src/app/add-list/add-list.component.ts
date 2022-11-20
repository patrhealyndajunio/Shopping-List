import { Component } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { Items } from '../shoppingList';

@Component({
  selector: 'add-list',
  templateUrl: '././add-list.component.html',
  styleUrls: ['././add-list.component.scss']
})

export class AddListComponent {

  constructor(private localDataService: LocalDataService) {
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
    this.model = new Items(this.model.itemID++, 'MILO', 'This is a energy drink.', 8, 143.75);
  }

  showFormControls(list: any) {
    return list && list.controls.itemName &&
      list.controls.itemName.value;
  }
  title = 'Add Items';
}