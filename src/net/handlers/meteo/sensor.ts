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

/**
 * Meteo Sensor Handler module
 */
export class MeteoSensorHandler implements IHandler {
    private log: ILog

    /**
     * Init Logger module reference
     * 
     * @param log Logger reference
     */
    constructor(log: ILog) {
        this.log = log
    }

    /**
     * Handle request
     * 
     * @param msg Some text message
     */
    public handle(msg: string): void {
        this.log.logging("Sensor Handler Called: " + msg)
    }
}