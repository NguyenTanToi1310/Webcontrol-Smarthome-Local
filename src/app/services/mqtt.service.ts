import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService, IPublishOptions } from "ngx-mqtt";
import { Observable } from "rxjs";

@Injectable()
export class CustomMqttService {

  constructor(
    private _mqttService: MqttService,
  ) {}

  topic(topic: string): Observable<IMqttMessage> {  
    return this._mqttService.observe(topic);
  }
  publish(topic: string, payload: string | Buffer, option?: IPublishOptions){
    this._mqttService.unsafePublish(topic, payload, { option } as IPublishOptions)
  }
}