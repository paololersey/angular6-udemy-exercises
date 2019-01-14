import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit, OnDestroy {


  // recipes: Recipe[];
  // subscription: Subscription;
  constructor(public recipeService: RecipeService, private dataStorageService: DataStorageService,
    private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    /*this.subscription = this.recipeService.recipesChanged.subscribe((recipeList: Recipe[]) => {
       this.recipes = recipeList;
     });
     this.recipeService.recipesFetched.subscribe((recipeList: Recipe[]) => {
       this.recipes = recipeList;
     });
     this.recipes = this.recipeService.getRecipes();*/
  }

  selectRecipe(recipe: Recipe) {
    //this.recipeSelect.emit(recipe);
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.currentRoute });
  }

  refresh() {
    this.dataStorageService.getRecipes()
      .pipe(map((response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }))
      .subscribe((recipes: Recipe[]) => {

        this.recipeService.setRecipes(recipes);
      })
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
