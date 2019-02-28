import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpRequest, HttpParams } from '@angular/common/http';
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
        /*const token = this.authService.getToken(); the token is now handled by auth interceptor */
        /*return this.http.put('https://recipe-list-firebase.firebaseio.com/recipes.json?auth=' + token,
            recipes);*/
        /* using HTTPRequest */
        const req = new HttpRequest('PUT', 'https://recipe-list-firebase.firebaseio.com/recipes.json',
            recipes, { reportProgress: true /*, params: new HttpParams().set('auth', token)*/ });
        return this.http.request(req);
    }

    getRecipes() {
        /* const token = this.authService.getToken(); the token is now handled by auth interceptor */
        /* return this.http.get<Recipe[]>('https://recipe-list-firebase.firebaseio.com/recipes.json?auth=' + token, {
            observe: 'response',
            responseType: 'json' // 'text', 'arrayBuffer'...
        });*/
        return this.http.get<Recipe[]>('https://recipe-list-firebase.firebaseio.com/recipes.json');
    }

}
