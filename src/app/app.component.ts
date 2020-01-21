import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-multiapp';

  constructor() {
    console.log(`Se ha invocado la ${this.title}`);
  }
}
