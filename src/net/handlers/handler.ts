/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * handlers.ts
 */

export enum Handlers {
    METEO_SENSOR,
    METEO_MONITOR,
    SECURE_SENSOR
}

export interface IHandler {
    handle(): void
}