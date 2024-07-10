import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdBannerComponent } from './ad-banner/ad-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AdBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-dynamic-components';
}
