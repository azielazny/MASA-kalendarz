import {OnInit, Component} from "@angular/core";
import {Router} from "@angular/router";
/**
 * Created by arek50 on 2017-05-06.
 */
@Component({
  selector: 'app-ccc',
  templateUrl: 'ccc.component.html',
  styleUrls: ['ccc.component.scss']
})
export class CccComponent implements OnInit {
  id: number;
  constructor(private router: Router) {}

  ngOnInit() {

  }

}
