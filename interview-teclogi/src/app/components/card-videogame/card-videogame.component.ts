import { Component, Input, OnInit } from '@angular/core';
import { Videogame } from 'src/app/models/videogame.interface';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-card-videogame',
  templateUrl: './card-videogame.component.html',
  styleUrls: ['./card-videogame.component.scss']
})
export class CardVideogameComponent implements OnInit{
  @Input() videogame!:Videogame;

  constructor(private globalService: GlobalService){}

  ngOnInit(): void {
    this.globalService.currentVideogame.subscribe();
  }
  sendVideogame(gameID:number):void{
    this.globalService.updateVideogame(gameID);
  }
}
