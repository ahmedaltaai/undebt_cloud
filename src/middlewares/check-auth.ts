import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

module.exports = (req: any, res: Response, next: NextFunction) => {

  try {
    const token = req.header.authorization.split(" ")[1];

    const decoded = jwt.verify(token, `${process.env.TOKEN_SECRET}`);
    req.userData = decoded;
    
    next();
  } catch (err) {
    return res.status(401).send({
      message: 'Auth faild'
    });
  }
}