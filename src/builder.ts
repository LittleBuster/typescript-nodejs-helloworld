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
import { IService, Services } from './service'
import { ILog } from './utils/log'
import { IUtils } from './utils/utils'

/**
 * Interface for builder
 */
export interface IBuilder {
    buildUtils(): void
    buildNet(): void
    buildHandlers(): void
    getService(service: Services): IService | undefined
}

/**
 * Application modules builder
 */
export class Builder implements IBuilder {
    private utils: IUtils
    private net: INet
    private handFab: IHandlers
    private handBuilder: IHandlersBuilder
    private services: Map<Services, IService> = new Map<Services, IService>()

    /**
     * Create main modules fabrics
     * 
     * @param fab Main application fabric
     */
    constructor(fab: IFabric) {
        this.utils = fab.createUtils()
        this.net = fab.createNet()
        this.handFab = fab.createHandlers()
    }

    /**
     * Build all modules of Utils fabric
     */
    public buildUtils() {
        this.services.set(Services.LOG, this.utils.createLog())
        this.services.set(Services.CONFIGS, this.utils.createConfigs(<ILog>this.getService(Services.LOG)))
    }

    /**
     * Build all Handlers fabrics and all handlers
     */
    public buildHandlers() {
        this.handBuilder = this.handFab.createHandlersBuilder(<ILog>this.getService(Services.LOG))
        this.handBuilder.buildMeteoHandlers()
        this.handBuilder.buildSecurityHandlers()
    }

    /**
     * Build all network modules
     */
    public buildNet() {
        this.services.set(Services.SERVER, this.net.createServer(<ILog>this.getService(Services.LOG), this.handBuilder))
    }

    /**
     * Get service from list by ID
     * 
     * @param service Application service ID
     * @returns found service
     */
    public getService(service: Services): IService | undefined {
        return this.services.get(service)
    }
}