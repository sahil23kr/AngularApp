import { Component } from '@angular/core';
import { ProductserviceService } from '../../../services/productservice.service';

@Component({
  selector: 'app-females',
  imports: [],
  templateUrl: './females.component.html',
  styleUrl: './females.component.css'
})
export class FemalesComponent {
  _female:ProductserviceService
  constructor(female:ProductserviceService){
    this._female=female;
  }

}
