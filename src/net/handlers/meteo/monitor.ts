/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * monitor.ts
 */

import { ILog } from "../../../utils/log";
import { IHandler } from "../handler";

/**
 * Meteo Monitor handler module
 */
export class MeteoMonitorHandler implements IHandler {
    private log: ILog

    /**
     * Init Logger reference
     * 
     * @param log Logger module reference
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
        this.log.logging("Monitor Handler Called: " + msg)
    }
}