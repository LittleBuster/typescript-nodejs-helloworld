/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * server.ts
 */

import { ILog } from "../utils/log";
import { IHandler, ServerHandlers } from "./handlers/handler";

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
    private handlers: Map<ServerHandlers, IHandler>

    /**
     * Meteo sensor callback
     */
    private onMeteoSensor() {
        this.handlers.get(ServerHandlers.METEO_SENSOR)?.handle("some msg")
    }

    /**
     * Meteo monitor callback
     */
    private onMeteoMonitor() {
        this.handlers.get(ServerHandlers.METEO_MONITOR)?.handle("some msg2")
    }

    /**
     * Security sensor callback
     */
    private onSecuritySensor() {
        this.handlers.get(ServerHandlers.SECURITY_SENSOR)?.handle("some msg3")
    }

    /**
     * Init out modules references
     * 
     * @param log Logger module reference
     * @param handlers Handlers modules list
     */
    constructor(log: ILog, handlers: Map<ServerHandlers, IHandler>) {
        this.log = log
        this.handlers = handlers
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