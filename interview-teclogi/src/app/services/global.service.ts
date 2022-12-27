import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private title= new BehaviorSubject('');
  currentTitle= this.title.asObservable();
  private videogame= new BehaviorSubject(0);
  currentVideogame= this.videogame.asObservable();
  private scrollValue= new BehaviorSubject(0);
  currentScrollValue= this.scrollValue.asObservable();

  updateTitle(title:string):void{
      this.title.next(title);
  }
  updateVideogame(gameID:number):void{
      this.videogame.next(gameID);
  }
  updateScrollValue(value:number):void{
    this.scrollValue.next(value);
  }
  internalScroll(event:Event){
    const element = event.target as HTMLElement;
    this.updateScrollValue(element.scrollTop)
  }
}
