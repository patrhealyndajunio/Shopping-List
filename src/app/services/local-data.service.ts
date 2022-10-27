import { Injectable } from "@angular/core";
import { Items } from "../shoppingList";

@Injectable({providedIn: "root"})
export class LocalDataService {
    map(arg0: (item: any) => any) {
      throw new Error('Method not implemented.');
    }
    shoppingItems = new Array<Items>();
}