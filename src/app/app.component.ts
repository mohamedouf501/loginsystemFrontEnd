import { RoutingAnimation } from './shared/Animations/RoutingAnimation';
import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [RoutingAnimation]
})
export class AppComponent {
  title = 'loginSystemFrontend';
  constructor(private contexts: ChildrenOutletContexts) { }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
