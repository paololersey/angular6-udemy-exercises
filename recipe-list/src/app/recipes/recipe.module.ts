import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [RecipesComponent,
        RecipeStartComponent,
        RecipesListComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        RecipeItemComponent],
    imports: [CommonModule, ReactiveFormsModule, RecipesRoutingModule, SharedModule]
})
export class RecipesModule { }
