import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  saveData() {
    this.dataStorageService.storeRecipes().subscribe((response: Response) => {
      console.log(response)
    })
  }

  fetchData() {
    this.dataStorageService.getRecipes().subscribe((response: Response) => {
      const recipes: Recipe[] = response.json();
      this.recipeService.setRecipes(recipes);
  })
  }


}
