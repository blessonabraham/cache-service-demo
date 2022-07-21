import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import { mongoDBInstance } from './configs/Configs';
import { CacheController } from './controllers/CacheController';
import { CacheDAOService } from './dao/CacheDAOService';
import { CacheService } from './services/CacheService';
import { CacheControllerType, CacheDAOServiceType, CacheServiceType } from './types/Types';

// TO-DO
// Exception Handling with proper code
// Return with proper Code
// Poper Logging Service
// Testing

export const App = () => {
  const theExpress = express();

  theExpress.use(bodyParser.urlencoded({ extended: false }))
  theExpress.use(bodyParser.json())

  const databaseInstance = mongoDBInstance()
  // Should replace with TypeDI
  const cacheDAOService: CacheDAOServiceType = new CacheDAOService(databaseInstance);
  const cacheService: CacheServiceType = new CacheService(cacheDAOService)
  const cacheController: CacheControllerType = new CacheController(cacheService)

  theExpress.get('/cache', async (req: Request, res: Response, next: NextFunction) => {
    await cacheController.getAllCache(req, res, next)
  });

  theExpress.get('/cache/:cacheKey', async (req: Request, res: Response, next: NextFunction) => {
    await cacheController.getCacheByKey(req, res, next)
  });

  theExpress.post('/cache', async (req: Request, res: Response, next: NextFunction) => {
    await cacheController.createOrUpdateCache(req, res, next)
  });

  theExpress.delete('/cache/:cacheKey', async (req: Request, res: Response, next: NextFunction) => {
    await cacheController.removeCacheByKey(req, res, next)
  });

  theExpress.delete('/cache', async (req: Request, res: Response, next: NextFunction) => {
    await cacheController.removeAllCache(req, res, next)
  });

  return theExpress
}