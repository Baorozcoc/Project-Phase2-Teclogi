import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameRoutingModule } from './videogame-routing.module';
import { VideogameComponent } from './videogame.component';
import { CardDealComponent } from 'src/app/components/card-deal/card-deal.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { MaterialModule } from 'src/app/components/material/material.module';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

@NgModule({
  declarations: [
    VideogameComponent,
    CardDealComponent,
    HeroComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    VideogameRoutingModule,
    MaterialModule
  ]
})
export class VideogameModule { }
