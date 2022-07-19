import { CacheDAOServiceType, CacheServiceType, CacheType, GenericRespose } from "../types/Types"

export class CacheService implements CacheServiceType {

    cacheDAOService: CacheDAOServiceType

    constructor(daoService: CacheDAOServiceType) {
        this.cacheDAOService = daoService
    }
    
    getAllCache(): CacheType[] {
        return this.cacheDAOService.getAllCache()
    }
    getCacheByKey(cacheId: String): CacheType {
        return this.cacheDAOService.getCacheByKey(cacheId)
    }
    createOrUpdateCache(cache: CacheType): CacheType {
        return this.cacheDAOService.createOrUpdateCache(cache)
    }
    removeAllCache(): GenericRespose {
        return this.cacheDAOService.removeAllCache()
    }
    removeCacheByKey(cacheId: String): GenericRespose {
        return this.cacheDAOService.removeCacheByKey(cacheId)
    }

}