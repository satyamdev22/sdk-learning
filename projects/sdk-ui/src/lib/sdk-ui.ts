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
  styles: `
    section {
      padding: 1.5rem;
      background: linear-gradient(135deg,rgb(189, 193, 211) 0%,rgb(200, 199, 201) 100%);
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      color: white;
    }

    h2 {
      margin: 0 0 1rem 0;
      font-size: 1.75rem;
      color: teal;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    p {
      margin: 0;
      font-size: 1.125rem;
      opacity: 0.95;
      color: navy;
      font-weight: 400;
    }
  `,
})
export class SdkWidgetComponent {
  @Input() a = 2;
  @Input() b = 3;
  @Input() title = 'SDK UI Component';
}
