import { Component, Input } from '@angular/core';

@Component({
  selector: 'sdk-widget',
  imports: [],
  template: `
    <section>
      <h2>{{ title }}</h2>
      <p>{{ a }} + {{ b }} = {{ a + b }}</p>
    </section>
  `,
  styles: ``,
})
export class SdkWidgetComponent {
  @Input() a = 2;
  @Input() b = 3;
  @Input() title = 'SDK UI Component';
}
