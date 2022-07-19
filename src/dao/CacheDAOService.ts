import { CacheDAOServiceType, CacheType, GenericRespose } from "../types/Types";

export class CacheDAOService implements CacheDAOServiceType {

    getCacheById(cacheId: String): CacheType {
        throw new Error("Method not implemented.");
    }

    getAllCache(): CacheType[] {
        throw new Error("Method not implemented.");
    }

    createOrUpdateCache(cache: CacheType): CacheType {
        throw new Error("Method not implemented.");
    }

    removeAllCache(): GenericRespose {
        throw new Error("Method not implemented.");
    }
    
    removeCacheById(cacheId: String): GenericRespose {
        throw new Error("Method not implemented.");
    }

}