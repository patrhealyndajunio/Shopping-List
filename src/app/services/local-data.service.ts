import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { catchError, from, Observable, tap } from "rxjs";
import { Items } from "../shoppingList";

@Injectable({ providedIn: "root" })
export class LocalDataService {

  private itemUrl = 'app/item-list';

  httpOtions = {
    Headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient,
    private localDataService: LocalDataService) { }

  deleteItem(itemID: number): Observable<Items[]> {
    const templateUrl = `$(this.itemUrl)/$(itemID)`;

    return this.http.delete<Items>(url, this.httpOtions).pipe(
      tap(_ => this.log(`deleted hero id=${itemID}`)),
      catchError(this.handleError<Items>(`deteleteItem`))
      );
  }

  map(arg0: (item: any) => any) {
    throw new Error('Method not implemented.');
  }
  shoppingItems = new Array<Items>();

  private log(message: string) {
    this.localDataService.add(`ItemService: ${message}`);
  }
}

