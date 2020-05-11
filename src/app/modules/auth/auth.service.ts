import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Auth } from './auth.model';


@Injectable({providedIn: "root"})
export class AuthService {
  private baseUrl = 'http://localhost:8000'; // TODO: this snippet code required refactor
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  get Token() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }


  createUser(username: string, password: string) {
    const authData = {username, password};
    this.http.post(`${this.baseUrl}/api/v1/authentication/token`, authData)
              .subscribe(response => {
                console.log(response);
              });
  }

  login(username: string, password: string) {
    const authData: Auth = {username, password};
    console.log('data is ', authData);

    this.http.post(`${this.baseUrl}/api/v1/authentication/token`, authData)
              .subscribe( (response: any) => {
                console.log('response of the auth is ', response);
                this.token = response.token;
                if (response.token) {
                  //const expiresInDuration = response.expiresIn
                  this.isAuthenticated = true;
                  this.saveAuthData(this.token);
                  this.authStatusListener.next(true);
                  this.router.navigate(['/apis/list']);
                }
              }, (error: any) => {
                console.log('error in the authentication');
                console.log(error);
                this.authStatusListener.next(false);
              });
  }

  autoAuth() {
    const authData: any = this.getAuthData();
    if (!authData) {
      return;
    }
    this.token = authData.token;
    this.isAuthenticated = true;
    this.authStatusListener.next(true);
    console.log('serviceauth, auto', this.isAuthenticated, authData);
  }

  logouth() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.clearAuthData();
    this.router.navigate(['/']);
  }

  private saveAuthData(token: string) {
    localStorage.setItem('token', token);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    if (!token) {
      return token;
    } else {
      return {token};
    }

  }


}
