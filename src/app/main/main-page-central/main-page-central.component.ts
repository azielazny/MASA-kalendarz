import {Component, OnInit, NgZone} from '@angular/core';
import { UsersService } from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page-central',
  templateUrl: 'main-page-central.component.html',
  styleUrls: ['main-page-central.component.scss']
})
export class MainPageCentralComponent implements OnInit {

  constructor(private usersService: UsersService, private zone:NgZone, private router: Router) {
    (<any>window).startApp(); // funkcja JS z index.html

    // kod poniżj wystawia component angular2 dla JS
    (<any>window).angularComponentRef = {
      zone: this.zone,
      componentFn: (value) => this.onSignIn(value),
      component: this
    };
  }

  ngOnInit() {
    if(window.localStorage.getItem("loggedAs") != null)
      $("#googleSignInBtn").html("Zalogowano jako: " + window.localStorage.getItem("userName"));
  }

  onSignIn(googleUser) {
    if(window.localStorage.getItem("loggedAs") != null) return;

    let resp : boolean;
    this.usersService.login("google", googleUser.getAuthResponse().id_token).subscribe(ret => {resp = ret});

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
