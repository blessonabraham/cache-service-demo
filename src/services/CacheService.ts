import { CacheDAOServiceType, CacheServiceType, CacheType, GenericRespose } from "../types/Types"

export class CacheService implements CacheServiceType {

    cacheDAOService: CacheDAOServiceType

    constructor(daoService: CacheDAOServiceType) {
        this.cacheDAOService = daoService
    }
    
    getAllCache(): CacheType[] {
        return this.cacheDAOService.getAllCache()
    }
    getCacheById(cacheId: String): CacheType {
        return this.cacheDAOService.getCacheById(cacheId)
    }
    createOrUpdateCache(cache: CacheType): CacheType {
        return this.cacheDAOService.createOrUpdateCache(cache)
    }
    removeAllCache(): GenericRespose {
        return this.cacheDAOService.removeAllCache()
    }
    removeCacheById(cacheId: String): GenericRespose {
        return this.cacheDAOService.removeCacheById(cacheId)
    }

}