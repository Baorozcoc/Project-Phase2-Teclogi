import { Component, Input } from '@angular/core';
import { Deal } from 'src/app/models/deal.interface';

@Component({
  selector: 'app-card-deal',
  templateUrl: './card-deal.component.html',
  styleUrls: ['./card-deal.component.scss']
})
export class CardDealComponent {
  
  @Input() deal!:Deal;

}
