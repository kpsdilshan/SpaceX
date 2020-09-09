import { Component, OnInit } from '@angular/core';
import { Subscription, from} from 'rxjs'

import {Lounch} from '../lounch.model'
import { LounchService} from '../lounch.service'

let ELEMENT_DATA: Lounch[] = [];

@Component({
  selector: 'app-all-lounches',
  templateUrl: './all-lounches.component.html',
  styleUrls: ['./all-lounches.component.css']
})
export class AllLounchesComponent implements OnInit {
  public lounches1 = []
  private lounchSub : Subscription
  public latestLounch : Lounch =  {flightNumber:"",missionName:"",lounchYear:"",rocketName:"",crew:"" }

  constructor(public lounchService: LounchService) {}

  ngOnInit(): void{
    this.lounchService.getAllLounches().
    subscribe(data=>{
      ELEMENT_DATA = data
    })
  }

  displayedColumns: string[] = ['Flight Number', 'Mission Name', 'Lounch Year', 'Rocket Name','crew'];
  dataSource = ELEMENT_DATA;
}
