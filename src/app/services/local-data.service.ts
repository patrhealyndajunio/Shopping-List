import { Injectable } from "@angular/core";
import { Items } from "../shoppingList";

@Injectable({providedIn: "root"})
export class LocalDataService {
    shoppingItems = new Array<Items>();
}

