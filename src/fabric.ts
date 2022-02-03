/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * fabric.ts
 */

import { HandlersBuilder, IHandlersBuilder } from "./net/handlers/handbld";
import { HandlersFabric, IHandlersFabric } from "./net/handlers/handfab";
import { Server, IServer } from "./net/server";
import { Configs, IConfigs } from "./utils/configs";
import { ILog, Log } from "./utils/log";

export interface IFabric {
    createLog(): ILog
    createConfigs(log: ILog): IConfigs
    createServer(log: ILog, handBld: IHandlersBuilder): IServer
    createHandFabric(log: ILog): IHandlersFabric
    createHandBuilder(handFab: IHandlersFabric): IHandlersBuilder 
}

export class Fabric implements IFabric {
    private static instanse: IFabric

    public static getInstance(): IFabric {
        if (!this.instanse) {
            this.instanse = new Fabric()
        }
        return this.instanse
    }

    public createLog(): ILog {
        return new Log()
    }

    public createConfigs(log: ILog): IConfigs {
        return new Configs(log)
    }

    public createServer(log: ILog, handBld: IHandlersBuilder): IServer {
        return new Server(log, handBld);
    }

    public createHandFabric(log: ILog): IHandlersFabric {
        return new HandlersFabric(log)
    }

    public createHandBuilder(handFab: IHandlersFabric): IHandlersBuilder {
        return new HandlersBuilder(handFab)
    }
}