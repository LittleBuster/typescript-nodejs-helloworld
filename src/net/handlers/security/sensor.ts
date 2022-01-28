/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * sensors.ts
 */

import { ILog } from "../../../utils/log";
import { IHandler } from "../handler";

/**
 * Security sensor module
 */
export class SecuritySensorHandler implements IHandler {
    private log: ILog

    /**
     * Init logger reference
     * 
     * @param log Logger module reference
     */
    constructor(log: ILog) {
        this.log = log
    }

    /**
     * Handler request
     * 
     * @param msg Some text message
     */
    public handle(msg: string): void {
        this.log.logging("Security Sensor Handler Called: " + msg)
    }
}