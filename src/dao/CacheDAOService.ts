import { CacheDAOServiceType, GetCacheResponseType } from "../types/Types";

export class CacheDAOService implements CacheDAOServiceType {


    getCacheById(): GetCacheResponseType {
        return {
            id: 'test',
            key: 'jkbckdbvdvf'
        }
    }

}