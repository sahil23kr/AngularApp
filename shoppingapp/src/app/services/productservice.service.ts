import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService{

  maleproduct=[
  {pid:101,pname:'mobile',pprice:8000},
  {pid:102,pname:'watch',pprice:12000},
  {pid:103,pname:'jeans',pprice:3000}
  
]
 
femaleproduct=[
  {pid:201,pname:'mobile',pprice:8000},
  {pid:202,pname:'top',pprice:12000},
  {pid:203,pname:'jeans',pprice:3000}
]
kidsproduct=[
  {pid:301,pname:'shoes',pprice:8000},
  {pid:302,pname:'shirt',pprice:12000},
  {pid:303,pname:'jeans',pprice:3000}
]
  
  getfemaleproduct(){
    return this.maleproduct;
  }
  getmaleproduct(){
    return this.femaleproduct;
  }
  getkidsproduct(){
    return this.kidsproduct;
  }


  constructor() {
   
   }
}
