/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * log.ts
 */

/**
 * Interface of logger
 */
export interface ILog {
    logging(msg: string): void
}

/**
 * Logger module
 */
export class Log implements ILog {
    /**
     * Print log message to console
     * 
     * @param msg Text message
     */
    public logging(msg: string) {
        console.log(msg)
    }
}