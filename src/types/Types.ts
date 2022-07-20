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
    getAllCache(): Promise<CacheType[]>
    getCacheByKey(cacheKey: string): Promise<CacheType>
    createOrUpdateCache(cache: CacheType): Promise<CacheType>
    removeAllCache(): Promise<GenericRespose>
    removeCacheByKey(cacheKey: string): Promise<GenericRespose>
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

