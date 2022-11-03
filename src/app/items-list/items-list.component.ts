import { Component, OnInit } from '@angular/core';
import { LocalDataService } from '../services/local-data.service';
import { Items } from '../shoppingList';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
   ngOnInit(): void {
  throw new Error('Method not implemented.');
}

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
  this.model = new Items(12, 'MILO', 'This is a energy drink.', 8, 143.75);
}

showFormControls(list: any) {
  return list && list.controls.itemName &&
    list.controls.itemName.value;
}
title = 'Add Items';
}