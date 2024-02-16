import { ViewOrdersComponent } from './../../../Fiery_Restaurant/src/app/orders/components/view-orders/view-orders.component';
import { Routes } from '@angular/router';
import path from 'path';
import { PlaceorderComponent } from './orders/components/placeorder/placeorder.component';
import { HomepageComponent } from './orders/components/homepage/homepage.component';

export const routes: Routes = [
    {path:'placeorder',component : PlaceorderComponent},
    {path:'orders',component : ViewOrdersComponent},
    {path:'',component : HomepageComponent}
];
