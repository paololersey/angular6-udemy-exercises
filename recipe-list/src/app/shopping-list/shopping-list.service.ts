import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientAdded = new EventEmitter<any>();
    ingredientUpdated = new EventEmitter<any>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [new Ingredient('Apples', 5, ''), new Ingredient('Tomatoes',10, '')];


    getIngredients() {
        return this.ingredients;
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }

    ingredientAdd(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredients = [];
        this.ingredients.push(...ingredients);
    }
    updateIngredient(newIngredient: Ingredient) {
        this.ingredients[newIngredient.index] = newIngredient;
    }
    deleteIngredient(index: number) {
        this.ingredients.splice(index ,1) ;
    }
}
