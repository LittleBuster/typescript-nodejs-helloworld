/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * builder.ts
 */

import { IFabric } from './fabric'
import { IHandlers } from './net/handlers/handfab'
import { IHandlersBuilder } from './net/handlers/hbuilder'
import { INet } from './net/net'
import { IServer } from './net/server'
import { IConfigs } from './utils/configs'
import { ILog } from './utils/log'
import { IUtils } from './utils/utils'

/**
 * Interface for builder
 */
export interface IBuilder {
    buildUtils(): void
    buildNet(): void
    buildHandlers(): void
    getLog(): ILog
    getConfigs(): IConfigs
    getServer(): IServer 
}

/**
 * Application modules builder
 */
export class Builder implements IBuilder {
    private fab: IFabric
    private utilsFab: IUtils
    private netFab: INet

    private handFab: IHandlers
    private handBuilder: IHandlersBuilder

    private log: ILog
    private cfg: IConfigs
    private server: IServer

    /**
     * Create main modules fabrics
     * 
     * @param fab Main application fabric
     */
    constructor(fab: IFabric) {
        this.fab = fab
    }

    /**
     * Build all modules of Utils fabric
     */
    public buildUtils() {
        this.utilsFab = this.fab.createUtils()
        this.log = this.utilsFab.createLog()
        this.cfg = this.utilsFab.createConfigs(this.log)
    }

    /**
     * Build all Handlers fabrics and all handlers
     */
    public buildHandlers() {
        this.handFab = this.fab.createHandlers(this.log)
        this.handBuilder = this.handFab.createHandlersBuilder()
        this.handBuilder.buildMeteoHandlers()
        this.handBuilder.buildSecurityHandlers()
    }

    /**
     * Build all network modules
     */
    public buildNet() {
        this.netFab = this.fab.createNet()
        this.server = this.netFab.createServer(this.log, this.handBuilder)
    }

    public getLog(): ILog {
        return this.log
    }
    
    public getConfigs(): IConfigs {
        return this.cfg
    }

    public getServer(): IServer {
        return this.server
    }
}