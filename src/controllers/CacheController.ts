import { CacheControllerType, CacheType, GenericRespose } from "../types/Types";

export class CacheController implements CacheControllerType {

    service: CacheControllerType;

    constructor(service: CacheControllerType) {
        this.service = service
    }
    
    getAllCache(): CacheType[] {
        return this.service.getAllCache()
    }
    getCacheByKey(cacheId: String): CacheType {
        return this.service.getCacheByKey(cacheId)
    }
    createOrUpdateCache(cache: CacheType): CacheType {
        return this.service.createOrUpdateCache(cache)
    }
    removeAllCache(): GenericRespose {
        return this.service.removeAllCache()
    }
    removeCacheByKey(cacheId: String): GenericRespose {
        return this.service.removeCacheByKey(cacheId)
    }

}