export type GetCacheResponseType = {
    id: String,
    key: String
}

export type CacheControllerType = {
    getCacheById(): GetCacheResponseType
}

export type CacheServiceType = {
    getCacheById(): GetCacheResponseType
}

export type CacheDAOServiceType = {
    getCacheById(): GetCacheResponseType
}

