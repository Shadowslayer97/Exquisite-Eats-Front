import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exquisite-eats-front';
  showVr: boolean = false;

  openVrPhoto() {
    this.showVr = true;
  }
}
