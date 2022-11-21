import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { UpdateListComponent } from './update-list/update-list.component';
import { DeleteListComponent } from './delete-list/delete-list.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    UpdateListComponent,
    DeleteListComponent,
    ItemsListComponent,
    TestComponent,
    ItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'add-list', component: AddListComponent },
      { path: 'item-list', component: ItemsListComponent },
      { path: 'delete-list', component: DeleteListComponent },
      { path: 'update-list/:id', component: UpdateListComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
