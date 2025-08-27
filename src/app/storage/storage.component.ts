import { Component } from '@angular/core';

@Component({
  selector: 'app-storage',
  imports: [],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.scss'
})
export class StorageComponent {



  sessionValue: any = "";
  localValue: any = "";
  // cookieValue: string = "";

  setSession() {
    sessionStorage.setItem('name', 'session');
    sessionStorage.setItem('pass', 'session123');
  }

  getSession() {
    this.sessionValue = sessionStorage.getItem('name');
  }

  removeSession() {
    sessionStorage.removeItem('pass');
  }

  clearSession() {
    sessionStorage.clear();
    this.sessionValue = "";
  }


  // setLocal() {
  //   localStorage.setItem('username', 'local');
  //   localStorage.setItem('password', 'local123');
  // }

  // getLocal() {
  //   this.localValue = localStorage.getItem('username');
  // }

  // removeLocal() {
  //   localStorage.removeItem('password');
  // }

  // clearLocal() {
  //   localStorage.clear();
  //   this.localValue = "";
  // }

}
