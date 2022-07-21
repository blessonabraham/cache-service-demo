import { CacheDAOServiceType, CacheServiceType, CacheType, GenericRespose } from "../types/Types"
import { CACHE_LIMIT, DEFAULT_TTL_HOURS } from "../utils/Constants"
import { differenceInHours, getRandomString, getTimeStamp } from "../utils/Utils"

export class CacheService implements CacheServiceType {

    cacheDAOService: CacheDAOServiceType

    constructor(daoService: CacheDAOServiceType) {
        this.cacheDAOService = daoService
    }
    
    getAllCache(): Promise<CacheType[]> {
        return this.cacheDAOService.getAllCache()
    }

    async getCacheByKey(cacheKey: string): Promise<CacheType> {
        const result = await this.cacheDAOService.getCacheByKey(cacheKey)

        let cache: CacheType = null;
        if (!result?.key) {
            console.log("Cache miss")
            cache = {
                key: cacheKey,
                value: getRandomString(),
                ttl: DEFAULT_TTL_HOURS,
                lastUsed: getTimeStamp()
            }
            await this.createOrUpdateCache(cache)
        } else {
            console.log("Cache hit")
            cache = {
                key: result?.key,
                value: result?.value,
                ttl: result?.ttl,
                lastUsed: result?.lastUsed
            }

            // If TTL is crossed then generating new string
            if (differenceInHours(Number(cache.lastUsed)) > cache.ttl) {
                cache = {
                    key: cacheKey,
                    value: getRandomString(),
                    ttl: DEFAULT_TTL_HOURS,
                    lastUsed: getTimeStamp()
                }
                await this.createOrUpdateCache(cache)
            }
        }
        return cache
    }

    async createOrUpdateCache(cache: CacheType): Promise<CacheType> {

        if (!cache?.key || !cache?.value){
            throw new Error("Key & Value is required")
        }

        // Removing Least Used Cache From Storage
        const existingCaches = await this.cacheDAOService.getAllCache()
        if (existingCaches.length === CACHE_LIMIT) {
            existingCaches.sort((a,b) => a.lastUsed - b.lastUsed)
            const leastUsedCache = existingCaches[existingCaches.length - 1]
            await this.removeCacheByKey(leastUsedCache.key)
        }

        cache = { ...cache, ttl: cache.ttl || DEFAULT_TTL_HOURS, lastUsed: getTimeStamp()}

        return this.cacheDAOService.createOrUpdateCache(cache)
    }

    removeAllCache(): Promise<GenericRespose> {
        return this.cacheDAOService.removeAllCache()
    }
    
    removeCacheByKey(cacheId: string): Promise<GenericRespose> {
        return this.cacheDAOService.removeCacheByKey(cacheId)
    }

}