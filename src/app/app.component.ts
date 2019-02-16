import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LosAngeles';
  main = 'Lakers';
  constructor(private router: Router) {

  }
  toAngular(e) {
    this.router.navigate(['/angular', e]);
  }
}
