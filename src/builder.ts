/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * builder.ts
 */

import { IFabric } from "./fabric";
import { IHandlersBuilder } from "./net/handlers/handbld";
import { IServer } from "./net/server";
import { Services } from "./services";
import { IConfigs } from "./utils/configs";
import { ILog } from "./utils/log";

export interface IBuilder {
    buildUtils(): void
    buildNet(): void
    buildHandlers(): void
    getService(id: Services): Object
}

export class Builder implements IBuilder {
    private static instanse: IBuilder

    private log: ILog
    private cfg: IConfigs
    private server: IServer
    private handBld: IHandlersBuilder

    public static getInstance(fab: IFabric): IBuilder {
        if (!this.instanse) {
            this.instanse = new Builder(fab)
        }
        return this.instanse
    }

    constructor(
        protected fab: IFabric
    )
    { }

    public buildUtils(): void {
        this.log = this.fab.createLog()
        this.cfg = this.fab.createConfigs(this.log)
    }

    public buildHandlers(): void {
        const handFab = this.fab.createHandFabric(this.log)
        this.handBld = this.fab.createHandBuilder(handFab)
        this.handBld.buildMeteo()
        this.handBld.buildSecurity()
    }

    public buildNet(): void {
        this.server = this.fab.createServer(this.log, this.handBld)
    }

    public getService(id: Services): Object {
        switch (id) {
            case Services.LOG:
                return this.log

            case Services.CONFIGS:
                return this.cfg

            case Services.SERVER:
                return this.server
        }
    }
}
