import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { LocalDataService } from '../services/local-data.service';
import { Item } from '../shoppingList';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {

  title = 'To be changed';
  model = new Item(1);

  itemID = 0;
  itemName = '';
  itemDescription = '';
  itemQuantity = '';
  itemPrice = '';
  
  /**
   * Remove ngOnInit since we don't have to do anything with it at the moment
   */
  constructor(private localDataService: LocalDataService) {
    this.itemID = localDataService.getNextId();
  }

  onSubmit(itemForm: NgForm) {
    this.localDataService.addItem({
      itemName: this.itemName,
      itemDescription: this.itemDescription,
      itemQuantity: parseInt(this.itemQuantity),
      itemPrice: parseFloat(this.itemPrice),
    });

    itemForm.reset();
  }

  newItem(): void {
    this.model = new Item(this.model.itemID++, 'MILO', 'This is a energy drink.', 8, 143.75);
  }

}
