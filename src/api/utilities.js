const asyncMiddleware = fn => (req, res, next) => {
  res.header('Cache-Control', 'no-cache');
  Promise.resolve(fn(req, res, next))
    .catch(next);
};

export { asyncMiddleware };
