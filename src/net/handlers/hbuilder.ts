/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * hbuilder.ts
 */

import { ILog } from "../../utils/log";
import { IHandler, ServerHandlers } from "./handler";
import { Handlers } from "./handfab";
import { MeteoHandlers } from "./meteo/handlers";
import { SecurityHandlers } from "./security/handlers";

/**
 * Interface for Handlers Builder
 */
export interface IHandlersBuilder {
    buildMeteoHandlers(): void
    buildSecurityHandlers(): void
    getHandler(id: ServerHandlers): IHandler | undefined
}

/**
 * Builder of all handlers modules
 */
export class HandlersBuilder implements IHandlersBuilder {
    private log: ILog
    private meteoHand: MeteoHandlers
    private secHand: SecurityHandlers
    private handlers: Map<ServerHandlers, IHandler> = new Map<ServerHandlers, IHandler>()

    /**
     * 
     * @param log Logger reference
     * @param handFab Handlers Fabric reference
     */
    constructor(log: ILog, handFab: Handlers) {
        this.log = log
        this.meteoHand = handFab.createMeteoHandlers(log)
        this.secHand = handFab.createSecurityHandlers(log)
    }

    /**
     * Build all meteo handler modules
     */
    public buildMeteoHandlers() {
        this.handlers.set(ServerHandlers.METEO_SENSOR, this.meteoHand.createSensorHandler(this.log))
        this.handlers.set(ServerHandlers.METEO_MONITOR, this.meteoHand.createMonitorHandler(this.log))
    }

    /**
     * Build all security modules
     */
    public buildSecurityHandlers() {
        this.handlers.set(ServerHandlers.SECURITY_SENSOR, this.secHand.createSensorHandler(this.log))
    }

    /**
     * Get Handler by ID
     * 
     * @param id Handler ID
     * @returns Handler by ID from general list
     */
    public getHandler(id: ServerHandlers): IHandler | undefined {
        return this.handlers.get(id)
    }
}