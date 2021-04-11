import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Rx";
import { WebSocketService } from "../web-socket-service/web-socket.service";
import { AirIndex } from "../../interfaces/air-index";
import { AppConstants } from "../../constants/app-constants";

const AIR_INDEX_WS_URL = AppConstants.AQI_WS_URL;

@Injectable({
  providedIn: 'root',
})
export class AirIndexSocketService {
  public longStorage: Map<string,Array<AirIndex>> = new Map();
  public airIndexData: Subject<AirIndex[]>;

  constructor(wsService: WebSocketService) {
    this.airIndexData = <Subject<AirIndex[]>>wsService.connect(AIR_INDEX_WS_URL).map(
      (response: MessageEvent): AirIndex[] => {
        let data = JSON.parse(response.data);
        return data;
      }
    );
  }


}