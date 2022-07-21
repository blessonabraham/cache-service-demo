import { NextFunction, Request, Response } from "express";
import { CacheControllerType, CacheServiceType } from "../types/Types";

export class CacheController implements CacheControllerType {

    service: CacheServiceType;

    constructor(service: CacheServiceType) {
        this.service = service
    }

    async getAllCache(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(200).json(res.json(await this.service.getAllCache()))
        } catch (e) {
            next(e)
        }
    }

    async getCacheByKey(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(200).json(res.json(await this.service.getCacheByKey(req.params.cacheKey)))
        } catch (e) {
            next(e)
        }
    }

    async createOrUpdateCache(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(201).json(await this.service.createOrUpdateCache(req.body))
        } catch (e) {
            next(e)
        }
    }

    async removeAllCache(_req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(200).json(await this.service.removeAllCache())
        } catch (e) {
            next(e)
        }
    }

    async removeCacheByKey(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(200).json(await this.service.removeCacheByKey(req.params.cacheKey))
        } catch (e) {
            next(e)
        }
    }

}