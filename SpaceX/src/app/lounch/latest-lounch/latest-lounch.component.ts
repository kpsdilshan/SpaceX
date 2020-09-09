import { Component, OnInit } from '@angular/core';
import { Subscription, from} from 'rxjs'
import { LounchService} from '../lounch.service'
import { Lounch} from '../lounch.model'

let ELEMENT_DATA: Lounch[] = [];


@Component({
  selector: 'app-latest-lounch',
  templateUrl: './latest-lounch.component.html',
  styleUrls: ['./latest-lounch.component.css']
})
export class LatestLounchComponent implements OnInit {

  private lounchSub : Subscription

  public latestLounch : Lounch =  {flightNumber:"",missionName:"",lounchYear:"",rocketName:"",crew:"" }

  constructor(public lounchService: LounchService) {}

  ngOnInit(): void {

    this.lounchService.getLatestLounch()
    this.latestLounch =  this.lounchService.lounch
    if(ELEMENT_DATA.length!=0)ELEMENT_DATA=[]
    ELEMENT_DATA.push(this.lounchService.lounch)
  }

  displayedColumns: string[] = ['Flight Number', 'Mission Name', 'Lounch Year', 'Rocket Name','crew'];
  dataSource = ELEMENT_DATA;

}


