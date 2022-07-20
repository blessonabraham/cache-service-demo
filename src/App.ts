import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { mongoDBInstance } from './configs/Configs';
import { CacheController } from './controllers/CacheController';
import { CacheDAOService } from './dao/CacheDAOService';
import { CacheService } from './services/CacheService';
import { CacheControllerType, CacheDAOServiceType, CacheServiceType } from './types/Types';

// TO-DO
// * Exception Handling with proper code
// * Return with proper Code
// * Poper Logging Service

export const App = () => {
  const theExpress = express();

  theExpress.use(bodyParser.urlencoded({ extended: false }))
  theExpress.use(bodyParser.json())

  const databaseInstance = mongoDBInstance()
  // Should replace with TypeDI
  const cacheDAOService: CacheDAOServiceType = new CacheDAOService(databaseInstance);
  const cacheService: CacheServiceType = new CacheService(cacheDAOService)
  const cacheController: CacheControllerType = new CacheController(cacheService)

  theExpress.get('/cache', async (_req: Request, res: Response) => {
    res.json(await cacheController.getAllCache())
  });

  theExpress.get('/cache/:cacheKey', async (req: Request, res: Response) => {
    res.json(await cacheController.getCacheByKey(req.params.cacheKey))
  });

  theExpress.post('/cache', async (req: Request, res: Response) => {
    res.json(await cacheController.createOrUpdateCache(req.body))
  });

  theExpress.delete('/cache/:cacheKey', async (req: Request, res: Response) => {
    res.json(await cacheController.removeCacheByKey(req.params.cacheKey))
  });

  theExpress.delete('/cache', async (_req: Request, res: Response) => {
    res.json(await cacheController.removeAllCache())
  });

  return theExpress
}