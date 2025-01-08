import { Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { FemalesComponent } from './components/productlist/females/females.component';
import { KidsComponent } from './components/productlist/kids/kids.component';
import { MensComponent } from './components/productlist/mens/mens.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'male',component:MensComponent},
    {path:'female',component:FemalesComponent},
    {path:'kids',component:KidsComponent},
    {path:'cart',component:CartComponent}

];
