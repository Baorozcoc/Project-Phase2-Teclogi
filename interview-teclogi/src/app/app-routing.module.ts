import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'videogame', loadChildren: () => import('./pages/videogame/videogame.module').then(m => m.VideogameModule) },
  { path: '**', redirectTo: '', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
