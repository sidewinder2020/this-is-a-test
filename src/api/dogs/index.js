import { Router } from 'express';

import DogsController from './dog.controller';

const router = new Router();


router
  .get(
    '/',
    DogsController.index
  ),
  .post(
    '/',
    DogsController.create
  );

export default router;
