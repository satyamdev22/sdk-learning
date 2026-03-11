import { Component, Input } from '@angular/core';

@Component({
  selector: 'sdk-widget',
  standalone: true,
  imports: [],
  template: `
    <section>
      <h2>{{ title }}</h2>
      <p>{{ a }} + {{ b }} = {{ a + b }}</p>
    </section>
  `,
  styleUrls: ['./sdk-ui.css'],
})
export class SdkWidgetComponent {
  @Input() a = 2;
  @Input() b = 3;
  @Input() title = 'SDK UI Component';
}
