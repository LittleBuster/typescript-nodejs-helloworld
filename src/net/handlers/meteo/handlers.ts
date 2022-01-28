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
    createSensorHandler(log: ILog): IHandler
    createMonitorHandler(log: ILog): IHandler
}

/**
 * Meteo Handlers modules fabric
 */
export class MeteoHandlers implements IMeteoHandlers {
    /**
     * Create Meteo Sensor Handler module
     * 
     * @param log Logger service reference 
     * @returns Meteo Sensor Handler module
     */
    public createSensorHandler(log: ILog): IHandler {
        return new MeteoSensorHandler(log)
    }

    /**
     * Create Meteo Monitor Handler module
     * 
     * @param log Logger module reference
     * @returns Meteo Monitor service
     */
    public createMonitorHandler(log: ILog): IHandler {
        return new MeteoMonitorHandler(log)
    }
}