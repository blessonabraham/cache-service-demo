import { CacheDAOServiceType, CacheType, GenericRespose } from "../types/Types";

export class CacheDAOService implements CacheDAOServiceType {

    getCacheByKey(cacheId: String): CacheType {
        return {
            key: '101',
            value: 'kjnskjdnckscn'
        }
    }

    getAllCache(): CacheType[] {
        return [{
            key: '101',
            value: 'kjnskjdnckscn'
        }, {
            key: '101',
            value: 'kjnskjdnckscn'
        }]
    }

    createOrUpdateCache(cache: CacheType): CacheType {
        return {
            key: '101',
            value: 'created'
        }
    }

    removeAllCache(): GenericRespose {
        return {
            status: 'Success'
        }
    }

    removeCacheByKey(cacheId: String): GenericRespose {
        return {
            status: 'Success'
        }
    }

}