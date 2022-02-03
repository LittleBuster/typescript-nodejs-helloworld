/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * server.ts
 */

import { ILog } from "../utils/log";
import { IHandlersBuilder } from "./handlers/handbld";
import { Handlers } from "./handlers/handler";

export interface IServer {
    start(ip: string, port: number): void
}

export class Server implements IServer {
    private onMeteoSensor() {
        this.handBld.getHandler(Handlers.METEO_SENSOR).handle()
    }

    private onMeteoMonitor() {
        this.handBld.getHandler(Handlers.METEO_MONITOR).handle()
    }

    private onSecureSensor() {
        this.handBld.getHandler(Handlers.SECURE_SENSOR).handle()
    }

    constructor(
        protected log: ILog,
        protected handBld: IHandlersBuilder
    )
    { }

    public start(ip: string, port: number): void {
        this.log.logging("Starting server...")
        this.onMeteoSensor()
        this.onMeteoMonitor()
        this.onSecureSensor()
    }
}