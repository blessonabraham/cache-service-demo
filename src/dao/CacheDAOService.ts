import { Collection, ObjectId } from "mongodb";
import { CacheDAOServiceType, CacheType, GenericRespose } from "../types/Types";
import { DEFAULT_TTL_HOURS } from "../utils/Constants";
import { getTimeStamp } from "../utils/Utils";

export class CacheDAOService implements CacheDAOServiceType {

    collection: Collection

    constructor(databaseInstance: Promise<Collection>) {
        databaseInstance.then((instance) => {
            this.collection = instance
        })
    }

    async getCacheByKey(cacheKey: string): Promise<CacheType> {

        const result = await this.collection.findOne({ key: cacheKey })
        let cache: CacheType = null;

        if (!result?.key) {
            console.log("Cache miss")
            const random = Math.random().toString(36).slice(2, 7);
            cache = {
                key: cacheKey,
                value: random,
                ttl: DEFAULT_TTL_HOURS,
                lastUsed: getTimeStamp()
            }
            this.createOrUpdateCache(cache)
        } else {
            console.log("Cache hit")
            cache = {
                key: result?.key,
                value: result?.value,
                ttl: result?.ttl,
                lastUsed: result?.lastUsed
            }

        }

        return cache
    }

    async getAllCache(): Promise<CacheType[]> {
        const result = await this.collection.find()
        return (await result.toArray()).map(data => ({
            key: data?.key,
            value: data?.value,
            ttl: data?.ttl,
            lastUsed: data?.lastUsed
        }))
    }

    async createOrUpdateCache(cache: CacheType): Promise<CacheType> {
        await this.collection.insertOne(cache)
        return cache
    }

    removeAllCache(): GenericRespose {
        return null

    }

    removeCacheByKey(cacheId: string): GenericRespose {
        return null

    }

}