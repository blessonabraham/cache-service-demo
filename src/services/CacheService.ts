import { CacheDAOServiceType, CacheServiceType, CacheType, GenericRespose } from "../types/Types"

export class CacheService implements CacheServiceType {

    cacheDAOService: CacheDAOServiceType

    constructor(daoService: CacheDAOServiceType) {
        this.cacheDAOService = daoService
    }
    
    getAllCache(): Promise<CacheType[]> {
        return this.cacheDAOService.getAllCache()
    }

    getCacheByKey(cacheId: string): Promise<CacheType> {
        return this.cacheDAOService.getCacheByKey(cacheId)
    }

    createOrUpdateCache(cache: CacheType): Promise<CacheType> {
        return this.cacheDAOService.createOrUpdateCache(cache)
    }

    removeAllCache(): GenericRespose {
        return this.cacheDAOService.removeAllCache()
    }
    
    removeCacheByKey(cacheId: string): GenericRespose {
        return this.cacheDAOService.removeCacheByKey(cacheId)
    }

}