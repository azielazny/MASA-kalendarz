import {Component, OnInit, NgZone, AfterViewInit} from '@angular/core';
import { UsersService } from "../../services/users.service";
import {Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-main-page-central',
  templateUrl: 'main-page-central.component.html',
  styleUrls: ['main-page-central.component.scss']
})
export class MainPageCentralComponent implements OnInit, AfterViewInit {

  constructor(private usersService: UsersService, private zone:NgZone, private router: Router) {
    (<any>window).startApp(); // funkcja JS z index.html

    // kod poniżj wystawia component angular2 dla JS
    (<any>window).angularComponentRef = {
      zone: this.zone,
      componentFn: (value) => this.onSignIn(value),
      component: this
    };
  }

  ngAfterViewInit(){
    $("#myModal").modal('hide');
  }

  ngOnInit() {
    console.log(window.localStorage.getItem("loggedBy"));
    if(window.localStorage.getItem("loggedAs") != null)
      $("#googleSignInBtn").html("Zalogowano jako: " + window.localStorage.getItem("userName"));
  }

  onSignIn(googleUser) {

    if(window.localStorage.getItem("loggedAs") != null) return;

    let resp : boolean;

    let ret = this.usersService.login("google", googleUser.getAuthResponse().id_token);
      this.saveLoginData(googleUser.getAuthResponse().id_token);
  }

  saveLoginData(googleUser) {
    if(window.localStorage.getItem("loggedAs") == null)
    {
      window.localStorage.setItem("loggedBy","google");
      window.localStorage.setItem("loggedAs", googleUser);

      this.zone.runOutsideAngular(() => {
        location.reload();
      });
    }
  }

}
