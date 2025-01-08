import { Component } from '@angular/core';
import { ProductserviceService } from '../../../services/productservice.service';

@Component({
  selector: 'app-mens',
  imports: [],
  templateUrl: './mens.component.html',
  styleUrl: './mens.component.css'
})
export class MensComponent {
  _male:ProductserviceService
  constructor(maleref:ProductserviceService){
    this._male=maleref;
  } 
}
