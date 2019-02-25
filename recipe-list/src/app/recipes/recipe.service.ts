import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();
    recipeSelected = new EventEmitter<Recipe>();
    recipesFetched: EventEmitter<Recipe[]> = new EventEmitter<Recipe[]>();
    private ingredients: Ingredient[];

    recipes: Recipe[];
    constructor(private shoppingListService: ShoppingListService) { }
    /*
        public recipes: Recipe[] = [
            new Recipe('borlenghi', 'Ricetta per 3 persone',
                'https://i0.wp.com/www.acquaementa.com/wp-content/uploads/2016/02/DSC_0136.jpg?w=753&ssl=1',
                [new Ingredient('acqua', 1, 'litro di acqua fredda'), new Ingredient('farina', 250, 'g di tipo 0'),
                new Ingredient('sale', 1, 'un pizzico')]),
            new Recipe('passatelli', 'Ricetta per 6 persone',
                'http://www.academiabarilla.it/anteprima_passatelli_1200.jpg?h=1ed9ff5e5fc3e76f4b733371e54e39826ba76e7d',
                [new Ingredient('uova', 5, ''), new Ingredient('parmigiano', 2, 'cucchiai per ogni uovo'),
                new Ingredient('pane grattugiato', 250, 'gr o 18 cucchiai '), new Ingredient('noce moscata', 10, 'grattugiate')]),
            new Recipe('tigelle', 'Ricetta tigelle',
                'https://www.giallozafferano.it/images/ricette/8/887/foto_hd/hd292x195.jpg',
                [new Ingredient('farina', 500, 'gr'), new Ingredient('latte', 15, 'ml'),
                new Ingredient('panna', 200, 'gr'), new Ingredient('sale', 10, ' gr'), new Ingredient('lievito', 25, 'gr')])

        ];*/

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        // this.recipesFetched.emit(this.recipes.slice())

    }
    getRecipes() {
        return this.recipes;
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredients(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsToShoppingList(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index);
        this.recipesChanged.next(this.recipes.slice());
    }
}
