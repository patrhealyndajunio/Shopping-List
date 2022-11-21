import { Injectable } from "@angular/core";
import { Item } from "../shoppingList";

@Injectable({ providedIn: "root" })
export class LocalDataService {

  shoppingItems = new Array<Item>();
}

