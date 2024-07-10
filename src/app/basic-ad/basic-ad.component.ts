import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-ad',
  standalone: true,
  imports: [],
  template: `
   <div class="basic">
      <h4>{{ name }}</h4>
      <p>{{ bio }}</p>
    </div>
  `,
  styleUrl: './basic-ad.component.scss'
})
export class BasicAdComponent {
  @Input() name!: string;
  @Input() bio!: string;
}
