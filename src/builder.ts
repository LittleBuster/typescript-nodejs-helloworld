/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * builder.ts
 */

import { IFabric } from './fabric'
import { IHandler, ServerHandlers } from './net/handlers/handler'
import { IHandlers } from './net/handlers/handlers'
import { IMeteoHandlers } from './net/handlers/meteo/handlers'
import { ISecurityHandlers } from './net/handlers/security/handlers'
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
    private handlers: IHandlers
    private meteoHandlers: IMeteoHandlers
    private securityHandlers: ISecurityHandlers
    private services: Map<Services, IService> = new Map<Services, IService>()
    private hndls: Map<ServerHandlers, IHandler> = new Map<ServerHandlers, IHandler>()

    /**
     * Create main modules fabrics
     * 
     * @param fab Main application fabric
     */
    constructor(fab: IFabric) {
        this.utils = fab.createUtils()
        this.net = fab.createNet()
        this.handlers = fab.createHandlers()
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
        this.meteoHandlers = this.handlers.createMeteoHandlers(<ILog>this.getService(Services.LOG))
        this.hndls.set(ServerHandlers.METEO_SENSOR, this.meteoHandlers.createSensorHandler(<ILog>this.getService(Services.LOG)))
        this.hndls.set(ServerHandlers.METEO_MONITOR, this.meteoHandlers.createMonitorHandler(<ILog>this.getService(Services.LOG)))

        this.securityHandlers = this.handlers.createSecurityHandlers(<ILog>this.getService(Services.LOG))
        this.hndls.set(ServerHandlers.SECURITY_SENSOR, this.securityHandlers.createSensorHandler(<ILog>this.getService(Services.LOG)))
    }

    /**
     * Build all network modules
     */
    public buildNet() {
        this.services.set(Services.SERVER, this.net.createServer(<ILog>this.getService(Services.LOG), this.hndls))
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