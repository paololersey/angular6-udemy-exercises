import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app.routing-module';
import { CommonModule } from '@angular/common';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
    declarations: [HomeComponent, HeaderComponent],
    imports: [CommonModule, SharedModule, AppRoutingModule],
    providers: [ShoppingListService, RecipeService, DataStorageService, AuthService],
    exports: [AppRoutingModule, HomeComponent, HeaderComponent]
})
export class CoreModule { }
