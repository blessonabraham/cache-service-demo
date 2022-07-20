import { CacheDAOServiceType, CacheServiceType, CacheType, GenericRespose } from "../types/Types"
import { DEFAULT_TTL_HOURS } from "../utils/Constants"
import { getTimeStamp } from "../utils/Utils"

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
            const random = Math.random().toString(36).slice(2, 7);
            cache = {
                key: cacheKey,
                value: random,
                ttl: DEFAULT_TTL_HOURS,
                lastUsed: getTimeStamp()
            }
            this.createOrUpdateCache(cache)
        } else {
            console.log("Cache hit")
            cache = {
                key: result?.key,
                value: result?.value,
                ttl: result?.ttl,
                lastUsed: result?.lastUsed
            }

        }

        // Check TTL

        return cache
    }

    createOrUpdateCache(cache: CacheType): Promise<CacheType> {
        // Set Time and TTL
        // Check cache limit
        return this.cacheDAOService.createOrUpdateCache(cache)
    }

    removeAllCache(): Promise<GenericRespose> {
        return this.cacheDAOService.removeAllCache()
    }
    
    removeCacheByKey(cacheId: string): Promise<GenericRespose> {
        return this.cacheDAOService.removeCacheByKey(cacheId)
    }

}