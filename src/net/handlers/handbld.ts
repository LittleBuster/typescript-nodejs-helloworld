/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * handbld.ts
 */

import { IHandlersFabric } from "./handfab";
import { Handlers, IHandler } from "./handler";

export interface IHandlersBuilder {
    buildMeteo(): void
    buildSecurity(): void
    getHandler(id: Handlers): IHandler
}

export class HandlersBuilder implements IHandlersBuilder {
    private meteoSensor: IHandler
    private meteoMonitor: IHandler
    private secureSensor: IHandler

    constructor(
        protected handFab: IHandlersFabric
    )
    { }

    public buildMeteo(): void {
        this.meteoSensor = this.handFab.createMeteoSensor()
        this.meteoMonitor = this.handFab.createMeteoMonitor()
    }

    public buildSecurity(): void {
        this.secureSensor = this.handFab.createSecuritySensor()
    }

    public getHandler(id: Handlers): IHandler {
        switch (id) {
            case Handlers.METEO_SENSOR:
                return this.meteoSensor

            case Handlers.METEO_MONITOR:
                return this.meteoMonitor

            case Handlers.SECURE_SENSOR:
                return this.secureSensor
        }
    }
}