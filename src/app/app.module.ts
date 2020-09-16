import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './course-project/header/header.component';
import { RecipesComponent } from './course-project/recipes/recipes.component';
import { RecipesListComponent } from './course-project/recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './course-project/recipes/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './course-project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './course-project/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from './course-project/recipes/recipes-list/recipe-item/recipe-item.component';
import { ServerComponent } from './server/server.component';
import { ClicomponentComponent } from './clicomponent/clicomponent.component';
import { SecondAssignmentComponent } from './second-assignment/second-assignment.component';
import { ThirdAssignmentComponent } from './third-assignment/third-assignment.component';
import { GameControlComponent } from './fourth/game-control/game-control.component';
import { OddComponent } from './fourth/odd/odd.component';
import { EvenComponent } from './fourth/even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ClicomponentComponent,
    SecondAssignmentComponent,
    ThirdAssignmentComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
