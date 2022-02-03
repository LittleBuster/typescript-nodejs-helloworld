/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * handfab.ts
 */

import { ILog } from "../../utils/log";
import { IHandler } from "./handler";
import { MeteoMonitorHandler } from "./meteo/monitor";
import { MeteoSensorHandler } from "./meteo/sensor";
import { SecuritySensorHandler } from "./security/sensor";

export interface IHandlersFabric {
    createMeteoSensor(): IHandler
    createMeteoMonitor(): IHandler
    createSecuritySensor(): IHandler
}

export class HandlersFabric implements IHandlersFabric {
    constructor(
        protected log: ILog
    )
    { }

    public createMeteoSensor(): IHandler {
        return new MeteoSensorHandler(this.log)
    }

    public createMeteoMonitor(): IHandler {
        return new MeteoMonitorHandler(this.log)
    }
    
    public createSecuritySensor(): IHandler {
        return new SecuritySensorHandler(this.log)
    }
}