import { Component, OnInit } from '@angular/core';
import { AuthService } from './modules/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'openapi';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoAuth();
  }
}
