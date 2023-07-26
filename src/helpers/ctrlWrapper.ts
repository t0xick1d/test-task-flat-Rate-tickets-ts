import { Response, Request, NextFunction } from "express";

const ctrlWrapper = (getAll: Function) => {
  const func = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await getAll(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  return func;
};

module.exports = { ctrlWrapper };
