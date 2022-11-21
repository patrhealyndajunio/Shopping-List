import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataService } from '../services/local-data.service';
import { Item } from '../shoppingList';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  mode = 'create';
  id = 0;
  title = '';
  model?: Item;
  
  /**
   * Remove ngOnInit since we don't have to do anything with it at the moment
   */
  constructor(
    private localDataService: LocalDataService, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.mode = this.router.url === '/shopping-list/create' ? 'create' : 'edit';
    if (this.mode === 'create') {
      this.model = new Item(localDataService.getNextId());
      this.title = 'Create new Item';
    } else {
      this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0');
      const result = localDataService.getItemById(this.id);

      if (!this.id || !result) {
        this.router.navigateByUrl('/');
      } else {
        this.model = result;
        this.title = 'Update Item'
      }
    }
  }

  onSubmit(itemForm: NgForm) {
    if (this.model && this.mode === 'create') {
      this.localDataService.addItem(this.model);
    } else if (this.model && this.mode == 'edit') {
      this.localDataService.updateItem(this.id, this.model);
    }

   
    itemForm.reset();
  }
  

}
