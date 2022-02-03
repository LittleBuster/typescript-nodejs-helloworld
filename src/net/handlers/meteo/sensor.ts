/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * sensor.ts
 */

import { ILog } from "../../../utils/log";
import { IHandler } from "../handler";

export class MeteoSensorHandler implements IHandler {
    constructor(
        protected log: ILog
    )
    { }
    
    public handle(): void {
        this.log.logging("Meteo Sensor Handler")
    }
}