import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gold-package-ad',
  standalone: true,
  imports: [],
  template: `
    <div class="gold">
    <h3>Featured Ad</h3>
      <h4>{{ headline }}</h4>
      <p> {{ body }} </p>
      <div> <img [src]="img" alt="no image">  </div>
    </div>
  `,
  styleUrl: './gold-package-ad.component.scss'
})
export class GoldPackageAdComponent {
  @Input() headline!: string;
  @Input() body!: string;
  @Input() img!: string;

}
