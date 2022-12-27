import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input() info!:{
    title:string,
    steamAppID:number,
    thumb:string
  }
  @Input() cheapestPriceEver!:{
    price:number,
    date:number
  }

}
