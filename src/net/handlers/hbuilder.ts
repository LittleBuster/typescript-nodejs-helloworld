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
import { Handlers, IHandlers } from "./handfab";
import { IMeteoHandlers, MeteoHandlers } from "./meteo/handlers";
import { ISecurityHandlers, SecurityHandlers } from "./security/handlers";

/**
 * Interface for Handlers Builder
 */
export interface IHandlersBuilder {
    buildMeteoHandlers(): void
    buildSecurityHandlers(): void
    getHandler(id: ServerHandlers): IHandler
}

/**
 * Builder of all handlers modules
 */
export class HandlersBuilder implements IHandlersBuilder {
    private handFab: IHandlers
    private log: ILog

    private meteoFab: IMeteoHandlers
    private secFab: ISecurityHandlers

    private meteoSensHdl: IHandler
    private meteoMonHdl: IHandler
    private secSensHdl: IHandler
    
    /**
     * Init dependencies
     * 
     * @param log Logger reference
     * @param handFab Handlers Fabric reference
     */
    constructor(log: ILog, handFab: Handlers) {
        this.log = log
        this.handFab = handFab
    }

    /**
     * Build all meteo handler modules
     */
    public buildMeteoHandlers() {
        this.meteoFab = this.handFab.createMeteoHandlers()
        this.meteoSensHdl = this.meteoFab.createSensorHandler()
        this.meteoMonHdl = this.meteoFab.createMonitorHandler()
    }

    /**
     * Build all security modules
     */
    public buildSecurityHandlers() {
        this.secFab = this.handFab.createSecurityHandlers()
        this.secSensHdl = this.secFab.createSensorHandler()
    }

    /**
     * Get handler reference by ID
     * 
     * @param id ID of handler
     * @returns Handler by ID
     */
    public getHandler(id: ServerHandlers): IHandler {
        switch (id) {
            case ServerHandlers.METEO_SENSOR:
                return this.meteoSensHdl

            case ServerHandlers.METEO_MONITOR:
                return this.meteoMonHdl

            case ServerHandlers.SECURITY_SENSOR:
                return this.secSensHdl
        }
    }
}