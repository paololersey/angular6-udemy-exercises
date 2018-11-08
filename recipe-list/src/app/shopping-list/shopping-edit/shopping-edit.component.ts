import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode: boolean;
  editedItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('f') shoppingListForm: NgForm;
  /* @ViewChild('nameInput') nameInputRef: ElementRef;
   @ViewChild('amountInput') amountInputRef: ElementRef;
   @ViewChild('descriptionInput') descriptionInputRef: ElementRef; */

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          description: this.editedItem.description,
          amount: this.editedItem.amount
        })
      }
     
    );
  }

  onSubmit(form: NgForm) {
    const newIngredient = new Ingredient(form.value.name, form.value.amount, form.value.description,
      this.editedItemIndex);
    /* const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
       this.descriptionInputRef.nativeElement.value);*/
    if (this.editMode) {
      this.shoppingListService.updateIngredient(newIngredient);
      // this.shoppingListService.ingredientUpdated.emit(newIngredient);
    } else {
      // this.shoppingListService.ingredientAdded.emit(newIngredient);
      this.shoppingListService.ingredientAdd(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  clear(){
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  delete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clear();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
