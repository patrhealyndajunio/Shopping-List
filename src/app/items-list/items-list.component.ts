import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { LocalDataService } from '../services/local-data.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnDestroy {
  event$;
  url: string;

  constructor(
    public localDataService: LocalDataService,
    private router: Router
  ) {
    this.url = this.router.url;
    this.event$ = this.router.events.subscribe(
      (event: NavigationEvent) => {
        this.url = this.router.url;
      }
    );
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

  showFormControls(list: any) {
    return list && list.controls.itemName &&
      list.controls.itemName.value;
  }

  deleteItem(itemID: any) {
    const index = this.localDataService.shoppingItems.findIndex(item => item.itemID === itemID);
    this.localDataService.shoppingItems.splice(index, 1);
  }

}
