/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * configs.ts
 */

import { IService } from '../service'
import { ILog } from './log'

/**
 * Interface of configs module
 */
export interface IConfigs extends IService {
    load(): void
}

/**
 * Configs module
 */
export class Configs implements IConfigs {
    private log: ILog

    /**
     * Init logger reference
     * 
     * @param log Logger module reference
     */
    constructor(log: ILog) {
        this.log = log
    }

    /**
     * Loading configs from file
     */
    public load() {
        this.log.logging("Loading configs")
    }
}