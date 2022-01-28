/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * utils.ts
 */

import { Log, ILog } from './log'
import { Configs, IConfigs } from './configs'

/**
 * Utils fabric interface
 */
export interface IUtils {
    createLog(): ILog
    createConfigs(log: ILog): IConfigs
}

/**
 * Utils modules fabric
 */
export class Utils {
    /**
     * Create Logger module
     * 
     * @returns Logger module
     */
    public createLog(): ILog {
        return new Log()
    }

    /**
     * Create Configs module
     * 
     * @param log Logger module reference
     * @returns Configs module
     */
    public createConfigs(log: ILog): IConfigs {
        return new Configs(log)
    }
}