import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private ingredients: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) { }

    private recipes: Recipe[] = [
        new Recipe('borlenghi', 'Ricetta per 3 persone',
            'https://i0.wp.com/www.acquaementa.com/wp-content/uploads/2016/02/DSC_0136.jpg?w=753&ssl=1',
            [new Ingredient('acqua', '1 litro di acqua fredda'), new Ingredient('farina', '250 g di tipo 0'),
            new Ingredient('sale', 'un pizzico')]),
        new Recipe('passatelli', 'Ricetta per 6 persone',
            'http://www.academiabarilla.it/anteprima_passatelli_1200.jpg?h=1ed9ff5e5fc3e76f4b733371e54e39826ba76e7d',
            [new Ingredient('uova', '(5)'), new Ingredient('parmigiano', '2 cucchiai per ogni uovo'),
            new Ingredient('pane grattugiato', '250gr o 18 cucchiai '), new Ingredient('noce moscata', '10 grattugiate')]),
        new Recipe('tigelle', 'Ricetta tigelle',
            'https://www.giallozafferano.it/images/ricette/8/887/foto_hd/hd292x195.jpg',
            [new Ingredient('farina', '500 gr'), new Ingredient('latte', '150 ml'),
            new Ingredient('panna', '200 gr'), new Ingredient('sale', '10 gr'), new Ingredient('lievito', '25 gr')])

    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredients(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredientsToShoppingList(ingredients);
    }

}
