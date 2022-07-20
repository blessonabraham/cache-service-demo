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
        return {
            key: result?.key,
            value: result?.value,
            ttl: result?.ttl,
            lastUsed: result?.lastUsed
        }
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

    async removeAllCache(): Promise<GenericRespose> {
        const result = await this.collection.deleteMany({})
        return { status: "Success" }
    }

    async removeCacheByKey(cacheKey: string): Promise<GenericRespose> {
        const result = await this.collection.deleteOne({ key: cacheKey })
        return { status: "Success" }
    }

}