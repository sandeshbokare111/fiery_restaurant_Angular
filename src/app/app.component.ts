import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomepageComponent } from './orders/components/homepage/homepage.component';
import { PlaceorderComponent } from './orders/components/placeorder/placeorder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PlaceorderComponent,
  ],
})
export class AppComponent {
  title = 'Fiery_resto';
}
