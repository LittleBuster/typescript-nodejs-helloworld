/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * handler.ts
 */

/**
 * Network Server handlers list
 */
export enum ServerHandlers {
    METEO_SENSOR,
    METEO_MONITOR,
    SECURITY_SENSOR
}

/* Base interface for all handlers */
export interface IHandler {
    handle(msg: string): void
}