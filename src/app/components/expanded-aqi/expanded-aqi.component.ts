import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';
import * as c3 from 'c3';
import { AirIndexSocketService } from "../../services/air-index-socket-service/air-index-socket.service";

@Component({
  selector: 'app-expanded-aqi',
  templateUrl: './expanded-aqi.component.html',
  styleUrls: ['./expanded-aqi.component.sass']
})
export class ExpandedAqiComponent implements AfterViewInit {

  private city;

  constructor(private route: ActivatedRoute,
    private airIndexService: AirIndexSocketService) {
    this.city = this.route.snapshot.paramMap.get('city') || ''
  }

  ngAfterViewInit() {

    let timestamps: number[]= [];
    let aqi: number[] = [];

    if (this.city) {
      let airIndexForCity = this.airIndexService.longStorage.get(this.city) || [];
      airIndexForCity.forEach((val) => {
        timestamps.push(val.timestamp);
        aqi.push(val.aqi);
      });
    }

    let columnData: any[] = [
      ['AQI', ...aqi],
      ['Timestamp', ...timestamps]
    ];
    console.log(columnData);
    c3.generate({
      bindto: '#chart',
      data: {
        x: 'Timestamp',
        columns: columnData
      }
    });
  }

}
