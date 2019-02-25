import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private router: Router,
    private recipeService: RecipeService) { }
  editMode: Boolean = false;
  recipeForm: FormGroup;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm() {
    let { recipeName, recipeImagePath, recipeDescription, recipeIngredients } = initializeData();
    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe['ingredients']) {
          recipeIngredients.push(new FormGroup(
            {
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ]),
              'description': new FormControl(ingredient.description, Validators.required)
            })
          );
        }
      }
    }
    this.defineData(recipeName, recipeImagePath, recipeDescription, recipeIngredients);
  }

  private defineData(recipeName: string, recipeImagePath: string, recipeDescription: string, recipeIngredients: FormArray) {
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onSubmit() {
    /*const newRecipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );*/
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else {
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients'))
      .push(new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)]),
        'description': new FormControl(null, Validators.required)
      }));
  }

  delete(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  cancel() {
    /*  let { recipeName, recipeImagePath, recipeDescription, recipeIngredients } = initializeData();
      this.defineData(recipeName, recipeImagePath, recipeDescription, recipeIngredients);*/
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;

  }

}
function initializeData() {
  const recipeName = '';
  const recipeImagePath = '';
  const recipeDescription = '';
  const recipeIngredients = new FormArray([]);
  return { recipeName, recipeImagePath, recipeDescription, recipeIngredients };
}

