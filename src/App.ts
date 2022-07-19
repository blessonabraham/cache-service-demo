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

  theExpress.get('/cache/:cacheId', (req: Request, res: Response) => {
    res.json(cacheController.getCacheById(req.params.cacheId))
  });

  theExpress.get('/cache/:cacheId', (req: Request, res: Response) => {
    res.json(cacheController.getCacheById(req.params.cacheId))
  });

  return theExpress
}