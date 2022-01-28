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
    createSensorHandler(log: ILog): IHandler
}

/**
 * Security handlers fabric
 */
export class SecurityHandlers implements ISecurityHandlers {
    /**
     * Create security handler
     * 
     * @param log Logger module reference
     * @returns Security Sensor handler module
     */
    public createSensorHandler(log: ILog): IHandler {
        return new SecuritySensorHandler(log)
    }
}