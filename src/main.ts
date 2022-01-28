/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * main.ts
 */

import { Application } from './application'
import { Builder } from './builder'
import { Fabric } from './fabric'

/**
 * Main function of application
 */
function main() {
    const fabric = new Fabric()
    const builder = new Builder(fabric)
    const app = new Application(builder)

    app.buildApp()
    app.start()
}

main()