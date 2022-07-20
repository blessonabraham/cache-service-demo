import { CacheControllerType, CacheType, GenericRespose } from "../types/Types";

export class CacheController implements CacheControllerType {

    service: CacheControllerType;

    constructor(service: CacheControllerType) {
        this.service = service
    }
    
    getAllCache(): Promise<CacheType[]> {
        return this.service.getAllCache()
    }
    getCacheByKey(cacheId: string): Promise<CacheType> {
        return this.service.getCacheByKey(cacheId)
    }
    createOrUpdateCache(cache: CacheType): Promise<CacheType>  {
        return this.service.createOrUpdateCache(cache)
    }
    removeAllCache(): Promise<GenericRespose> {
        return this.service.removeAllCache()
    }
    removeCacheByKey(cacheId: string): Promise<GenericRespose> {
        return this.service.removeCacheByKey(cacheId)
    }

}