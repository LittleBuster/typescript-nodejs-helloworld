/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * fabric.ts
 */

import { Handlers, IHandlers } from './net/handlers/handfab'
import { INet, Net } from './net/net'
import { ILog } from './utils/log'
import { Utils, IUtils } from './utils/utils'

/**
 * Interface for main fabric
 */
export interface IFabric {
    createUtils(): IUtils
    createNet(): INet
    createHandlers(log: ILog): IHandlers
}

/**
 * Main application fabric of all modules fabrics
 * for creating main app modules
 */
export class Fabric implements IFabric {
    /**
     * Create Utils modules fabric
     * 
     * @returns Utils fabric
     */
    public createUtils(): IUtils {
        return new Utils()
    }

    /**
     * Create Net modules fabric
     * 
     * @returns Net fabric
     */
    public createNet(): INet {
        return new Net()
    }

    /**
     * Create Handlers fabric
     * 
     * @param log Logger module reference
     * @returns Handlers fabric
     */
    public createHandlers(log: ILog): IHandlers {
        return new Handlers(log)
    }
}