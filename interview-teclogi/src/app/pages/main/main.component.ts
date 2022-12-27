import { Component, OnInit } from '@angular/core';
import { Videogame } from 'src/app/models/videogame.interface';
import { GlobalService } from 'src/app/services/global.service';
import { MainService } from 'src/app/services/main.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit{
  videogames: Videogame[]=[];
  title: string='';

  constructor(private globalService: GlobalService, private mainService: MainService){}
  
  ngOnInit(): void {
    this.globalService.currentTitle.subscribe(
      title=>this.setLocalVariables(title)
    );
  }
  setLocalVariables(title:string):void{
    this.mainService.get10VideogamesByTitle(title).pipe(tap(
      (videogames:Videogame[])=>this.videogames=videogames
    )).subscribe();
    this.title=title;
  }
  mainScrolling(event:Event):void{
    this.globalService.internalScroll(event);
  }
}
