import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-main-page',
  templateUrl: 'main-page.component.html',
  styleUrls: ['main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private title: Title) {
    title.setTitle("makeplan.");
  }


  ngOnInit() {
  }

}
