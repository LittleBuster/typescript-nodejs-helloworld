/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * application.ts
 */

import { IBuilder } from './builder'
import { ILog } from './utils/log'
import { IConfigs } from './utils/configs'
import { IServer } from './net/server'

/**
 * General application module
 */
export class Application {
    private builder: IBuilder

    /**
     * Init main application builder
     * 
     * @param builder Main application builder
     */
    constructor(builder: IBuilder) {
        this.builder = builder
    }

    /**
     * Build all application modules
     */
    public buildApp() {
        this.builder.buildUtils()
        this.builder.buildHandlers()
        this.builder.buildNet()
    }

    /**
     * Loading configs and start application modules
     */
    public start() {
        const log = this.builder.getLog()
        const cfg = this.builder.getConfigs()
        const server = this.builder.getServer()

        log.logging("Starting application...")

        try {
            cfg.load()
        }
        catch(e) {
            log.logging("Fail to read configs: " + e)
            process.exit(1)
        }

        log.logging("Application started.")
        try {
            server.start("127.0.0.1", 8000)
        }
        catch(e) {
            log.logging("Fail to start server: " + e)
            process.exit(1)
        }

        log.logging("Exiting.")
    }
}