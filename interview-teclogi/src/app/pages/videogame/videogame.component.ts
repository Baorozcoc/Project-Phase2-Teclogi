import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { VideogameInfo } from 'src/app/models/videogame-info.interface';
import { GlobalService } from 'src/app/services/global.service';
import { VideogameService } from 'src/app/services/videogame.service';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html'
})
export class VideogameComponent implements OnInit{
  videogameInfo:VideogameInfo={"deals": []};

  constructor(private globalService: GlobalService, private videogameService: VideogameService, private router:Router){}

  ngOnInit(): void {
    this.globalService.currentVideogame.subscribe(
      gameID=>this.setLocalVariables(gameID)
    );
  }
  setLocalVariables(gameID:number=0):void{
    this.videogameService.getVideogameByID(gameID).pipe(tap(
      (videogameInfo:VideogameInfo)=>this.videogameInfo=videogameInfo
    )).subscribe();
    gameID===0&&this.router.navigate(['']);
  }

  vgScrolling(event:Event):void{
    this.globalService.internalScroll(event);
  }
}
