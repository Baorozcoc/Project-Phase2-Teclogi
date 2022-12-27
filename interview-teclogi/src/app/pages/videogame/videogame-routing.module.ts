import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideogameComponent } from './videogame.component';

const routes: Routes = [{ path: '', component: VideogameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideogameRoutingModule { }
