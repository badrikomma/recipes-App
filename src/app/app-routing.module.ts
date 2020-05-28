import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const newLocal = './recepies/recipe-detail/recipe-detail.module#RecipeDetailPageModule';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'recepies',
    pathMatch: 'full'
  },
  {
    path: 'recepies',
    children: [
      {
      path: '',
      loadChildren: './recepies/recepies.module#RecepiesPageModule'
      },
      {
        path: ':recepieId',
        loadChildren: './recepies/recipe-detail/recipe-detail.module#RecipeDetailPageModule'
      }
    ]
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
