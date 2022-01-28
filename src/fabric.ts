/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * fabric.ts
 */

import { Handlers, IHandlers } from './net/handlers/handlers'
import { INet, Net } from './net/net'
import { Utils, IUtils } from './utils/utils'

/**
 * Interface for main fabric
 */
export interface IFabric {
    createUtils(): IUtils
    createNet(): INet
    createHandlers(): IHandlers
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
     * @returns Handlers fabric
     */
    public createHandlers(): IHandlers {
        return new Handlers()
    }
}