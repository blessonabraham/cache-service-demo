export type CacheType = {
    id: String,
    key: String
}

export type GenericRespose = {
    status: 'Success' | 'Failure',
    message?: string
}

export type CacheControllerType = {
    getAllCache(): CacheType[]
    getCacheById(cacheId: String): CacheType
    createOrUpdateCache(cache: CacheType): CacheType
    removeAllCache(): GenericRespose
    removeCacheById(cacheId: String): GenericRespose
}

export type CacheServiceType = {
    getAllCache(): CacheType[]
    getCacheById(cacheId: String): CacheType
    createOrUpdateCache(cache: CacheType): CacheType
    removeAllCache(): GenericRespose
    removeCacheById(cacheId: String): GenericRespose
}

export type CacheDAOServiceType = {
    getAllCache(): CacheType[]
    getCacheById(cacheId: String): CacheType
    createOrUpdateCache(cache: CacheType): CacheType
    removeAllCache(): GenericRespose
    removeCacheById(cacheId: String): GenericRespose
}

