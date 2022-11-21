import { Component } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { Item } from '../shoppingList';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent {
  constructor(public localDataService: LocalDataService) {}

  showFormControls(list: any) {
    return list && list.controls.itemName &&
      list.controls.itemName.value;
  }

  deleteItem(itemID: any) {
    const index = this.localDataService.shoppingItems.findIndex(item => item.itemID === itemID);
    this.localDataService.shoppingItems.splice(index, 1);
    console.log(this.localDataService.shoppingItems);
  }

}
