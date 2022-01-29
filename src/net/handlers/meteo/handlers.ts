/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * handlers.ts
 */

import { ILog } from "../../../utils/log"
import { IHandler } from "../handler"
import { MeteoMonitorHandler } from "./monitor"
import { MeteoSensorHandler } from "./sensor"

/**
 * Interface for meteo handlers fabric
 */
export interface IMeteoHandlers {
    createSensorHandler(): IHandler
    createMonitorHandler(): IHandler
}

/**
 * Meteo Handlers modules fabric
 */
export class MeteoHandlers implements IMeteoHandlers {
    private log: ILog

    /**
     * Init dependencies
     * 
     * @param log Logger module reference
     */
    constructor(log: ILog) {
        this.log = log
    }

    /**
     * Create Meteo Sensor Handler module
     * 
     * @returns Meteo Sensor Handler module
     */
    public createSensorHandler(): IHandler {
        return new MeteoSensorHandler(this.log)
    }

    /**
     * Create Meteo Monitor Handler module
     * 
     * @returns Meteo Monitor service
     */
    public createMonitorHandler(): IHandler {
        return new MeteoMonitorHandler(this.log)
    }
}