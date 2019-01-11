import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {


    constructor(private http: Http, private recipeService: RecipeService) { }


    storeRecipes() {
        return this.http.put('https://recipe-list-firebase.firebaseio.com/recipes.json',
            this.recipeService.recipes)
    }

    getRecipes() {
        return this.http.get('https://recipe-list-firebase.firebaseio.com/recipes.json')
       
    }
    
}