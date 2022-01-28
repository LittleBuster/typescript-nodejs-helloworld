/**
 * Typescript nodejs helloworld project
 * 
 * Copyright (C) 2022 Sergey Denisov GPLv3
 * Written by Sergey Denisov aka LittleBuster (DenisovS21@gmail.com)
 * 
 * service.ts
 */

/**
 * List of existing services
 */
export enum Services {
    LOG,
    CONFIGS,
    SERVER
}

/**
 * Base interface for all services
 */
export interface IService {
}