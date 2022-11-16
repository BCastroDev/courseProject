import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent} from './shopping-list/shopping-list.component'
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component'
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component'
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    ShoppingListComponent,
    RecipeDetailsComponent,
    ShoppingEditComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
