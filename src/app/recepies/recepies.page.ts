import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie';
import { RecpiesService } from './recpies.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {

  recipes: Recepie[];

  constructor( private recipeService : RecpiesService ) { }

  ngOnInit() {

    this.recipes = this.recipeService.getAllRecipes();

  }

}
