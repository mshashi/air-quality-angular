import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatSort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WebSocketService } from "../../services/web-socket-service/web-socket.service";
import { AirIndexSocketService } from "../../services/air-index-socket-service/air-index-socket.service";
import { AirIndex } from "../../interfaces/air-index";
import { Utils } from "../../utils";


const ELEMENT_DATA: AirIndex[] = [];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements AfterViewInit {


  @Input() displayedColumns: string[] = ['city', 'aqi'];
  @Input() defaultSortColumn: string = 'city';
  @Input() defaultSortDirection: SortDirection = 'asc';
  @Input() dataSource = new MatTableDataSource(ELEMENT_DATA);
  @Input() latestAQI: Map<string,AirIndex> = new Map();

  @ViewChild(MatSort) sort: MatSort;


  constructor(private airIndexService: AirIndexSocketService) {
    this.sort = new MatSort();
    this.airIndexService.airIndexData.subscribe((airIndexData: AirIndex[]) => {
      if(airIndexData && airIndexData.length>0){
        airIndexData.forEach(map => {
          map.timestamp = Date.now();
          this.latestAQI.set(map.city,map);

          if(this.airIndexService.longStorage.has(map.city)){
            let airIndexOfCity = this.airIndexService.longStorage.get(map.city) || new Array();
            airIndexOfCity.push(map);
          }else{
            this.airIndexService.longStorage.set(map.city,new Array().concat([map]));
          }
        });
      }
      console.log(this.airIndexService.longStorage);
      this.dataSource.data = Array.from(this.latestAQI.values());
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getColorCode(val: number) {
    return Utils.getColorCode(val)
  }

}
