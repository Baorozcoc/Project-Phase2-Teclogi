import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CardVideogameComponent } from 'src/app/components/card-videogame/card-videogame.component';
import { MainService } from 'src/app/services/main.service';
import { MaterialModule } from 'src/app/components/material/material.module';

@NgModule({
  declarations: [
    MainComponent,
    CardVideogameComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ],
  providers: [
    MainService
  ]
})
export class MainModule { }
