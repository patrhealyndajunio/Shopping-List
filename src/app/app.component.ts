import { Component } from '@angular/core';
import { LocalDataService } from './services/local-data.service';
import { Item } from './shoppingList';
import { enableProdMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title = 'Shopping-List';

  count = 0;

  item: Item = {
    itemID: 1,
    itemName: 'Milk',
    itemQuantity: 7,
    itemPrice: 143,
    itemDescription: 'This is a evaporated milk.'
  }

  submitted = false;

  constructor(public localDataService: LocalDataService) {

  }

  thisDoesSomething(): void {
    this.count = 100;
  }

  getNumber(num: number): number {
    return 30 + num;
  }

  getSampleMultiParam(param1: number, param2: number) {
    return null;
  }

  onSubmit() { this.submitted = true; }

  showFormControls(list: any) {
    return list && list.controls.itemName &&
      list.controls.itemName.value;
  }

 

  addCount() {
    let scopedCount = 1;
    this.count += scopedCount;
    scopedCount = 100;

  }

  subtractCount() {
    this.count --;
  }
}

enableProdMode();
