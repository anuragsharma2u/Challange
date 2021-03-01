import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  @Output() toggleSidenav: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProfile() {
    this.router.navigate(['user, profile']);
  }
  onLogout() {}
}
