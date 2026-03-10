import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SdkWidgetComponent } from 'sdk-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SdkWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('sdkpro01');

  add(a: number, b: number): number {
    console.log('add', a, b);
    return a + b;
  }
}
