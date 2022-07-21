import { Request, Response ,NextFunction } from "express"

export type CacheType = {
    key: string,
    value: string,
    ttl: number,
    lastUsed: number
}

export type GenericRespose = {
    status: 'Success' | 'Failure',
    message?: string
}

export type CacheControllerType = {
    getAllCache(req: Request, res: Response, next: NextFunction): Promise<void>
    getCacheByKey(req: Request, res: Response, next: NextFunction): Promise<void>
    createOrUpdateCache(req: Request, res: Response, next: NextFunction): Promise<void>
    removeAllCache(req: Request, res: Response, next: NextFunction): Promise<void>
    removeCacheByKey(req: Request, res: Response, next: NextFunction): Promise<void>
}

export type CacheServiceType = {
    getAllCache(): Promise<CacheType[]>
    getCacheByKey(cacheKey: string): Promise<CacheType>
    createOrUpdateCache(cache: CacheType): Promise<CacheType>
    removeAllCache(): Promise<GenericRespose>
    removeCacheByKey(cacheKey: string): Promise<GenericRespose>
}

export type CacheDAOServiceType = {
    getAllCache(): Promise<CacheType[]>
    getCacheByKey(cacheKey: string): Promise<CacheType>
    createOrUpdateCache(cache: CacheType): Promise<CacheType> 
    removeAllCache(): Promise<GenericRespose>
    removeCacheByKey(cacheKey: string): Promise<GenericRespose>
}

