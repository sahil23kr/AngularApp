import { Component } from '@angular/core';
import { ProductserviceService } from '../../../services/productservice.service';

@Component({
  selector: 'app-kids',
  imports: [],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css'
})
export class KidsComponent {
  _kids:ProductserviceService
  constructor(kidsref:ProductserviceService){
    this._kids=kidsref;
  } 
}
