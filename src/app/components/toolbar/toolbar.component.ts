import { Component, OnInit, OnDestroy } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
import {ViewChild} from '@angular/core';
import { AuthService } from '../../modules/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @ViewChild(MatMenuTrigger, {read: false, static: false}) trigger: MatMenuTrigger;

  public isAuth = false;
  private authSubscription: Subscription;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.isAuth = this.authService.getIsAuth();
    this.authSubscription = this.authService.getAuthStatusListener()
                                  .subscribe( isAuth => {
                                    this.isAuth = isAuth;
                                  });
    console.log('statusbar.  is auth', this.isAuth);
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  matMenu() {
    console.log('CLICK ON');
    this.trigger.openMenu();
  }

  logout() {
    this.authService.logouth();
  }


}
