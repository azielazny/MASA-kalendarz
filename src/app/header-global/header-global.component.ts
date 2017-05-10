import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-global',
  templateUrl: './header-global.component.html',
  styleUrls: ['./header-global.component.scss']
})
export class HeaderGlobalComponent implements OnInit {
  public loggedIn : boolean = false;

  public ngOnInit() {
    this.loggedIn = (localStorage.getItem("loggedAs") != null);
  }
}
