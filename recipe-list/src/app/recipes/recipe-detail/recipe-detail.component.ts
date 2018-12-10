import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';
import { RecipeService } from './../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = this.activatedRoute.snapshot.params.id;//not suitable
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id']; // + IS TO CAST TO A NUMBER
      this.recipeDetail = this.recipeService.getRecipe(this.id);
    });
  }

  recipeDetailSelect(recipeDetail: Recipe) {
    this.recipeService.addIngredients(recipeDetail.ingredients);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
     this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.activatedRoute });
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['recipes'])
  }
}
