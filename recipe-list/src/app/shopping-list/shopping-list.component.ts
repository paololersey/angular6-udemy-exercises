import { Component, OnInit } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

import { RecipeService } from './../recipes/recipe.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(public shoppingListService: ShoppingListService) { }
  ingredients: Ingredient[] = [];

  ngOnInit() {
    // this.ingredients = this.shoppingListService.getIngredients();
   /* this.shoppingListService.ingredientAdded.subscribe((ingredient: Ingredient) => {
      this.shoppingListService.ingredientAdd(ingredient);
    });
    this.shoppingListService.ingredientUpdated.subscribe((ingredient: Ingredient) => {
      this.shoppingListService.updateIngredient(ingredient);
    });*/
  }

  onEditItem(i: number) {
    this.shoppingListService.startedEditing.next(i);
  }
}
