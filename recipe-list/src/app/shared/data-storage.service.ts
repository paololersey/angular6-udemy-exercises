import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    recipes: Recipe[];
    constructor(/*private http: Http*/ private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {
    }


    storeRecipes(recipes) {
        const token = this.authService.getToken();
        return this.http.put('https://recipe-list-firebase.firebaseio.com/recipes.json?auth=' + token,
            recipes);
    }

    getRecipes() {
        const token = this.authService.getToken();
        return this.http.get<Recipe[]>('https://recipe-list-firebase.firebaseio.com/recipes.json?auth=' + token);
        /* return this.http.get<Recipe[]>('https://recipe-list-firebase.firebaseio.com/recipes.json?auth=' + token, {
            observe: 'response',
            responseType: 'json' // 'text', 'arrayBuffer'...
        });*/
    }

}
