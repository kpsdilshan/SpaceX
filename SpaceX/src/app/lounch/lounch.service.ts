import { Injectable } from '@angular/core';
import { Lounch } from './lounch.model';
import { HttpClient} from '@angular/common/http'
import { of , Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LounchService {

  private latestLounchUrl = 'https://api.spacexdata.com/v2/launches/latest'
  private allLounchesUrl = 'https://api.spacexdata.com/v2/launches'

  public lounch : Lounch =  {flightNumber:"",missionName:"",lounchYear:"",rocketName:"",crew:"" }

  constructor(private httpClient: HttpClient) { }

  getAllLounches(): Observable<Lounch[]>{
   let lounches: Lounch[] = []

   this.httpClient.get(this.allLounchesUrl)
    .subscribe((data)=>{
      for (let index = 0; index < 102; index++) {
        const element = data[index];
        let lc: Lounch= {flightNumber:"",missionName:"",lounchYear:"",rocketName:"",crew:"" }
        lc.flightNumber =  element['flight_number']
        lc.missionName =  element['mission_name']
        lc.lounchYear =  element['launch_year']
        lc.rocketName =  element['rocket']['rocket_name']
        lounches.push(lc)
      }
    })
    return of(lounches)
  }


  getLatestLounch(){
    this.httpClient.get(this.latestLounchUrl)
      .subscribe((lounchData)=>{
        this.lounch.flightNumber =  lounchData['flight_number']
        this.lounch.missionName =  lounchData['mission_name']
        this.lounch.lounchYear =  lounchData['launch_year']
        this.lounch.rocketName =  lounchData['rocket']['rocket_name']
        if(lounchData['crew']!=null) this.lounch.crew =  lounchData['crew']

      })
  }

}
