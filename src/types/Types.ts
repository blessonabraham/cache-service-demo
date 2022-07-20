export type CacheType = {
    key: string,
    value: string,
    ttl: number,
    lastUsed: string
}

export type GenericRespose = {
    status: 'Success' | 'Failure',
    message?: string
}

export type CacheControllerType = {
    getAllCache(): Promise<CacheType[]>
    getCacheByKey(cacheKey: string): Promise<CacheType>
    createOrUpdateCache(cache: CacheType): Promise<CacheType>
    removeAllCache(): GenericRespose
    removeCacheByKey(cacheKey: string): GenericRespose
}

export type CacheServiceType = {
    getAllCache(): Promise<CacheType[]>
    getCacheByKey(cacheKey: string): Promise<CacheType>
    createOrUpdateCache(cache: CacheType): Promise<CacheType>
    removeAllCache(): GenericRespose
    removeCacheByKey(cacheKey: string): GenericRespose
}

export type CacheDAOServiceType = {
    getAllCache(): Promise<CacheType[]>
    getCacheByKey(cacheKey: string): Promise<CacheType>
    createOrUpdateCache(cache: CacheType): Promise<CacheType> 
    removeAllCache(): GenericRespose
    removeCacheByKey(cacheKey: string): GenericRespose
}

