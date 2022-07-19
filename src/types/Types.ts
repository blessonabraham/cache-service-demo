export type CacheType = {
    key: String,
    value: String
}

export type GenericRespose = {
    status: 'Success' | 'Failure',
    message?: string
}

export type CacheControllerType = {
    getAllCache(): CacheType[]
    getCacheByKey(cacheKey: String): CacheType
    createOrUpdateCache(cache: CacheType): CacheType
    removeAllCache(): GenericRespose
    removeCacheByKey(cacheKey: String): GenericRespose
}

export type CacheServiceType = {
    getAllCache(): CacheType[]
    getCacheByKey(cacheKey: String): CacheType
    createOrUpdateCache(cache: CacheType): CacheType
    removeAllCache(): GenericRespose
    removeCacheByKey(cacheKey: String): GenericRespose
}

export type CacheDAOServiceType = {
    getAllCache(): CacheType[]
    getCacheByKey(cacheKey: String): CacheType
    createOrUpdateCache(cache: CacheType): CacheType
    removeAllCache(): GenericRespose
    removeCacheByKey(cacheKey: String): GenericRespose
}

