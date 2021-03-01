import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showHeader = false;
  showSidebar = false;
  showFooter = false;
  constructor(private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader =
          this.activedRoute.firstChild.snapshot.data.showHeader !== false;
        this.showSidebar =
          this.activedRoute.firstChild.snapshot.data.showSidebar !== false;
        this.showFooter =
          this.activedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }
}
