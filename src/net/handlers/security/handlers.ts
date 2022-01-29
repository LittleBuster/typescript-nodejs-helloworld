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
import { SecuritySensorHandler } from "./sensor"

/**
 * Interface for Security Handlers fabric
 */
export interface ISecurityHandlers {
    createSensorHandler(): IHandler
}

/**
 * Security handlers fabric
 */
export class SecurityHandlers implements ISecurityHandlers {
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
     * Create security handler
     * 
     * @returns Security Sensor handler module
     */
    public createSensorHandler(): IHandler {
        return new SecuritySensorHandler(this.log)
    }
}