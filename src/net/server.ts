/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * server.ts
 */

import { ILog } from "../utils/log";
import { ServerHandlers } from "./handlers/handler";
import { IHandlersBuilder } from "./handlers/hbuilder";

/**
 * Interface for Server module
 */
export interface IServer {
    start(ip: String, port: Number): void
}

/**
 * Network server module
 */
export class Server implements IServer {
    private log: ILog
    private handBuilder: IHandlersBuilder

    /**
     * Meteo sensor callback
     */
    private onMeteoSensor() {
        this.handBuilder.getHandler(ServerHandlers.METEO_SENSOR)?.handle("some msg")
    }

    /**
     * Meteo monitor callback
     */
    private onMeteoMonitor() {
        this.handBuilder.getHandler(ServerHandlers.METEO_MONITOR)?.handle("some msg2")
    }

    /**
     * Security sensor callback
     */
    private onSecuritySensor() {
        this.handBuilder.getHandler(ServerHandlers.SECURITY_SENSOR)?.handle("some msg3")
    }

    /**
     * Init out modules references
     * 
     * @param log Logger module reference
     * @param handlers Handlers modules list
     */
    constructor(log: ILog, handBuilder: IHandlersBuilder) {
        this.log = log
        this.handBuilder = handBuilder
    }

    /**
     * Start network server
     * 
     * @param ip Binding address of server
     * @param port Binding port of server
     */
    public start(ip: String, port: Number): void {
        this.log.logging("Starting server at: " + ip + ":" + port)
        this.onMeteoSensor()
        this.onMeteoMonitor()
        this.onSecuritySensor()
    }
}