import { Component } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { Item } from '../shoppingList';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  title = 'To be changed';
  model = new Item(1, 'MILK', 'This is an evaporated milk.', 7, 143.25);

  /**
   * Remove ngOnInit since we don't have to do anything with it at the moment
   */
  constructor(private localDataService: LocalDataService) {  }

  onSubmit() {
    this.localDataService.shoppingItems.push(
      new Item(
        this.model.itemID++,
        this.model.itemName,
        this.model.itemDescription,
        this.model.itemQuantity,
        this.model.itemPrice
      ));

      // this.submitted = true;
  }

  newItem(): void {
    this.model = new Item(this.model.itemID++, 'MILO', 'This is a energy drink.', 8, 143.75);
  }

}
