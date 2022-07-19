import express, { Request, Response } from 'express';
import { CacheController } from './controllers/CacheController';
import { CacheDAOService } from './dao/CacheDAOService';
import { CacheService } from './services/CacheService';
import { CacheControllerType, CacheDAOServiceType, CacheServiceType } from './types/Types';

// TO-DO
// * Exception Handling with proper code
// * Return with proper Code
// * Poper Logging Service
// * MongoDB Connection

export const App = () => {
  const theExpress = express();

  // Should replace with TypeDI
  const cacheDAOService: CacheDAOServiceType = new CacheDAOService();
  const cacheService: CacheServiceType = new CacheService(cacheDAOService)
  const cacheController: CacheControllerType = new CacheController(cacheService)

  theExpress.get('/cache', (req: Request, res: Response) => {
    res.json(cacheController.getAllCache())
  });

  theExpress.get('/cache/:cacheKey', (req: Request, res: Response) => {
    res.json(cacheController.getCacheByKey(req.params.cacheKey))
  });

  theExpress.post('/cache', (req: Request, res: Response) => {
    res.json(cacheController.createOrUpdateCache(req.body))
  });

  theExpress.delete('/cache/:cacheKey', (req: Request, res: Response) => {
    res.json(cacheController.removeCacheByKey(req.params.cacheKey))
  });

  theExpress.delete('/cache', (req: Request, res: Response) => {
    res.json(cacheController.removeAllCache())
  });

  return theExpress
}