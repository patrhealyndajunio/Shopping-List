import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [
  { path: 'add-list', component: ItemFormComponent },
  { path: 'item-list', component: ItemsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
