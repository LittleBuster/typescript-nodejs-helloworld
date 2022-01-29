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
    createHandlersBuilder(log: ILog): IHandlersBuilder
    createMeteoHandlers(log: ILog): IMeteoHandlers
    createSecurityHandlers(log: ILog): ISecurityHandlers
}

/**
 * All handlers fabric
 */
export class Handlers implements IHandlers {
    /**
     * Create all handlers builder
     * 
     * @param log Logger module reference
     * @returns Handlers Builder
     */
    public createHandlersBuilder(log: ILog): IHandlersBuilder {
        return new HandlersBuilder(log, this)
    }

    /**
     * Create meteo handlers fabric
     * 
     * @param log Logger module
     * @returns All meteo handlers fabric
     */
    public createMeteoHandlers(log: ILog): IMeteoHandlers {
        return new MeteoHandlers()
    }

    /**
     * Create Security handlers fabric
     * 
     * @param log Logger module reference
     * @returns Security handlers fabric
     */
    public createSecurityHandlers(log: ILog): ISecurityHandlers {
        return new SecurityHandlers()
    }
}