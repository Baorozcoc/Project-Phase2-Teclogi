import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  deployInput: boolean= false;
  title: string= '';
  reduceButton: boolean= false;

  constructor(public globalService:GlobalService, private router:Router) {}
  
  ngOnInit(): void {
      this.globalService.currentTitle.subscribe();
      this.globalService.currentScrollValue.subscribe(value=>this.setReduceButton(value));
  }
  
  setReduceButton(value:number):void{
    value>10?this.reduceButton=true:this.reduceButton=false;
  }

  sendTitle():void{
      this.globalService.updateTitle(this.title);
      this.router.navigate(['']);
  }
}
