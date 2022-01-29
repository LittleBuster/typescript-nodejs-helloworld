/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * handlers.ts
 */

import { ILog } from "../../utils/log";
import { HandlersBuilder, IHandlersBuilder } from "./hbuilder";
import { MeteoHandlers, IMeteoHandlers } from "./meteo/handlers";
import { SecurityHandlers, ISecurityHandlers } from "./security/handlers";

/**
 * Interface of Handlers fabric
 */
export interface IHandlers {
    createHandlersBuilder(): IHandlersBuilder
    createMeteoHandlers(): IMeteoHandlers
    createSecurityHandlers(): ISecurityHandlers
}

/**
 * All handlers fabric
 */
export class Handlers implements IHandlers {
    private log: ILog

    /**
     * Init dependencies
     * 
     * @param log Logger module reference
     */
    constructor(log: ILog) {
        this.log = log
    }

    /**
     * Create all handlers builder
     * 
     * @param log Logger module reference
     * @returns Handlers Builder
     */
    public createHandlersBuilder(): IHandlersBuilder {
        return new HandlersBuilder(this.log, this)
    }

    /**
     * Create meteo handlers fabric
     * 
     * @returns All meteo handlers fabric
     */
    public createMeteoHandlers(): IMeteoHandlers {
        return new MeteoHandlers(this.log)
    }

    /**
     * Create Security handlers fabric
     * 
     * @returns Security handlers fabric
     */
    public createSecurityHandlers(): ISecurityHandlers {
        return new SecurityHandlers(this.log)
    }
}