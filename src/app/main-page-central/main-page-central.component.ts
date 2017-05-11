import {Component, OnInit, NgZone} from '@angular/core';
import { UsersService } from "../service/users.service";

@Component({
  selector: 'app-main-page-central',
  templateUrl: 'main-page-central.component.html',
  styleUrls: ['main-page-central.component.scss']
})
export class MainPageCentralComponent implements OnInit {

  constructor(private usersService: UsersService, private zone:NgZone) {
    (<any>window).startApp(); // funkcja JS z index.html

    // kod poniżj wystawia component angular2 dla JS
    (<any>window).angularComponentRef = {
      zone: this.zone,
      componentFn: (value) => this.onSignIn(value),
      component: this
    };
  }

  ngOnInit() {
    if(localStorage.getItem("loggedAs") != null)
      $("#googleSignInBtn").html("Zalogowano jako: " + localStorage.getItem("userName"));
  }

  onSignIn(googleUser) {
    if(localStorage.getItem("loggedAs") != null) return;
    let resp : boolean;

    let ret = this.usersService.login("google", googleUser.getAuthResponse().id_token).subscribe(val => this.saveLoginData(val, googleUser));
  }

  saveLoginData(resp, googleUser) {
    if(resp && localStorage.getItem("loggedAs") == null)
    {
      localStorage.setItem("loggedBy","google");
      localStorage.setItem("loggedAs", googleUser.getAuthResponse().id_token);
      location.reload();
    }
  }

}
