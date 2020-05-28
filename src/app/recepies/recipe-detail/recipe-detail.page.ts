import { Component, OnInit } from '@angular/core';
import { RecpiesService } from '../recpies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recepie } from "../recepie";

import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe : Recepie;



  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecpiesService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recepieId')){
        return;
      }

      const recepieId = paramMap.get('recepieId');
      this.loadedRecipe= this.recipeService.getRecipe(recepieId);
    });
  }

  onDeleteRecipe(){
    this.alertController.create({
      header:'Are You Sure?', 
      message: 'Do you really want to delete this recipe?',
      buttons: [{
        text: 'cancel',
        role: 'cancel'
      },
      {
        text: 'Delete',
        handler: () => {
          this.recipeService.deleteRecipe(this.loadedRecipe.id);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })
    
  }

}
