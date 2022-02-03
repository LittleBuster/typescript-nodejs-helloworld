/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * log.ts
 */

export interface ILog {
    logging(msg: string): void
}

export class Log implements ILog {
    public logging(msg: string): void {
        console.log(msg)
    }
}