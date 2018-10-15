import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientAdded = new EventEmitter<Ingredient>();
    private ingredients: Ingredient[] = [new Ingredient('Apples', '5'), new Ingredient('Tomatoes', '10')];


    getIngredients() {
        return this.ingredients;
    }

    ingredientAdd(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredients = [];
        this.ingredients.push(...ingredients);
    }
}
