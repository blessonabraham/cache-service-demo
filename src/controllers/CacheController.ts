import { CacheControllerType, GetCacheResponseType } from "../types/Types";

export class CacheController implements CacheControllerType {

    service: CacheControllerType;

    constructor(service: CacheControllerType) {
        this.service = service
    }

    getCacheById(): GetCacheResponseType {
        return this.service.getCacheById();
    }

   

}