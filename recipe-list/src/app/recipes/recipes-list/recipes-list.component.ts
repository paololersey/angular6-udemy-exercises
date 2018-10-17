import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {


  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
    private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  selectRecipe(recipe: Recipe) {
    //this.recipeSelect.emit(recipe);
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.currentRoute });
  }

}
