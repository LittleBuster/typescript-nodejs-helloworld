/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * configs.ts
 */

import { ILog } from "./log";

export interface IConfigs {
    loadFromFile(): void
}

export class Configs implements IConfigs {
    constructor(
        protected log: ILog
    )
    { }

    public loadFromFile(): void {
        this.log.logging("loading cfg")
    }

}