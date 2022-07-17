import { CacheDAOServiceType, GetCacheResponseType } from "../types/Types"

export class CacheService implements CacheDAOServiceType {

    cacheDAOService: CacheDAOServiceType

    constructor(daoService: CacheDAOServiceType) {
        this.cacheDAOService = daoService
    }

    getCacheById(): GetCacheResponseType {
        return this.cacheDAOService.getCacheById()
    }


}