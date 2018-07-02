import { Dog } from '../../db/models';

import { asyncMiddleware } from '../utilities';

export default {
  /**
   *
   * @param Request req
   * @param Result res
   * @param Next next
   *
   * @return JSON
   */
  index: asyncMiddleware(async (req, res, next) => {
    try {
      const dogs = await Dog.findAll();
      return res.json({ Giraffes: dogs });
    } catch (err) {
      return res.json(err.message);
    }
  })
};
