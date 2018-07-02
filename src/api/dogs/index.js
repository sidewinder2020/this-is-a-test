import { Router } from 'express';

import DogsController from './dog.controller';

const router = new Router();


router
  .get(
    '/',
    DogsController.index
  );

export default router;
