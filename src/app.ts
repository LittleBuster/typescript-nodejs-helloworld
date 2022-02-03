/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * app.ts
 */

import { IBuilder } from "./builder";
import { IServer } from "./net/server";
import { Services } from "./services";
import { IConfigs } from "./utils/configs";
import { ILog } from "./utils/log";

export interface IApp {
    buildApp(): void
    start(): void
}

export class App implements IApp {
    private static instanse: IApp

    public static getInstance(builder: IBuilder): IApp {
        if (!this.instanse) {
            this.instanse = new App(builder)
        }
        return this.instanse
    }

    constructor(
        protected builder: IBuilder
    )
    { }

    public buildApp() {
        this.builder.buildUtils()
        this.builder.buildHandlers()
        this.builder.buildNet()
    }

    public start(): void {
        const log = <ILog>this.builder.getService(Services.LOG)
        const cfg = <IConfigs>this.builder.getService(Services.CONFIGS)
        const server = <IServer>this.builder.getService(Services.SERVER)

        cfg.loadFromFile()
        log.logging("Starting...")
        server.start("127.0.0.1", 80)
    }

}