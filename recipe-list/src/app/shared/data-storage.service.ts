import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {


    constructor(private http: Http,
        private recipeService: RecipeService,
        private authService: AuthService) { }


    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://recipe-list-firebase.firebaseio.com/recipes.json?auth=' + token,
            this.recipeService.recipes);
    }

    getRecipes() {
        const token = this.authService.getToken();
        return this.http.get('https://recipe-list-firebase.firebaseio.com/recipes.json?auth=' + token);

    }

}
