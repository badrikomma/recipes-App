import { Injectable } from '@angular/core';

import {  Recepie } from './recepie';

import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RecpiesService {
  
  
 
  private recipes : Recepie[] = [
    {
      id:'r1',
      title : 'Tamato rice',
      imageUrl : "assets/images/r1.jpg",
      ingredients: ['tamato','rice']
    },
    {
      id: 'r2',
      title: 'lemon rice',
      imageUrl : "assets/images/r2.jpg",
      ingredients : ['lemon','rice']

    }
  ];

  constructor(
    private router: Router
  ) { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return{
      ...this.recipes.find( recipe =>{
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe =>{
      return recipe.id !== recipeId;
    });
    this.router.navigate(['/recepies']);
  }
}
