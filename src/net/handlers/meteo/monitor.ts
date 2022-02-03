/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * monitor.ts
 */

import { ILog } from "../../../utils/log";
import { IHandler } from "../handler";

export class MeteoMonitorHandler implements IHandler {
    constructor(
        protected log: ILog
    )
    { }

    public handle(): void {
        this.log.logging("Meteo Monitor Handler")
    }
}