/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * net.ts
 */

import { ILog } from "../utils/log";
import { IHandlersBuilder } from "./handlers/hbuilder";
import { Server, IServer } from "./server";

/**
 * Interface of Net module
 */
export interface INet {
    createServer(log: ILog, handBuilder: IHandlersBuilder): IServer
}

/**
 * Net module fabric
 */
export class Net implements INet {
    /**
     * Create server module
     * 
     * @param log Logger module
     * @param handlers Handlers list
     * @returns Netowrk server
     */
    public createServer(log: ILog, handBuilder: IHandlersBuilder): IServer {
        return new Server(log, handBuilder)
    }
}