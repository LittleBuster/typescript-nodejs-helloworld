/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * main.ts
 */

import { App } from './app'
import { Builder } from './builder'
import { Fabric } from './fabric'

function main() {
    const fab = Fabric.getInstance()
    const builder = Builder.getInstance(fab)
    const app = App.getInstance(builder)

    app.buildApp()
    app.start()
}

main()