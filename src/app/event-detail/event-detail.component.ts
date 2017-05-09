import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-event-detail',
  templateUrl: 'event-detail.component.html',
  styleUrls: ['event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  id: number;
  constructor(private router: Router) {}

  ngOnInit() {

  }

}


//   ngOnInit() {
//     // this.sub = this.route.params.subscribe(params => {
//     //   this.id = +params['id']; // (+) converts string 'id' to a number
//     // });
//   }
//
// }
