import { Dog } from '../../db/models';

import { asyncMiddleware } from '../utilities';

import Gilt from '../../lib/gilt';

export default {
  index: asyncMiddleware(async (req, res, next) => {
    try {
      const dogs = await Dog.findAll();
      const upcomingSales = await Gilt.upcomingSales();
      return res.json({ Giraffes: dogs, Gilt_Sales: upcomingSales });
    } catch (err) {
      return res.json(err.message);
    }
  }),

  create: asyncMiddleware(async (req, res, next) => {
    const { name, size, age } = req.body.attributes;
    try {
      const dog = await Dog.create({
        name,
        size,
        age
      });
      return res.json(dog);
    } catch (err) {
      return res.json(err.message);
    }
  })
};
