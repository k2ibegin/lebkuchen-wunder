import { Component } from '@angular/core';
import { faBirthdayCake, faCookie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lebkuchen-wunder';
  faCookie = faCookie;
  faBirthdayCake = faBirthdayCake;
}
