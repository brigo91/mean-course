import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class Header {
  userIsAuthenticated = false;
  private authListenerSubs!: Subscription;
  
  constructor(private authService: AuthService) {}
  
  ngOnInit() {
    this.authListenerSubs = this.authService
    .getAuthStatusListener()
    .subscribe((isAuthenticated: boolean) => {
      this.userIsAuthenticated = isAuthenticated;
    });
  }
  
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  
  onLogout() {
    this.authService.logout();
  }
}
