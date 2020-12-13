import { NextFunction, Response } from "express";
import jwt from 'jsonwebtoken';

module.exports = (req: any, res: Response, next: NextFunction) => {

  try {
    const decoded = jwt.verify(req.body.token, 'secret');
    req.userData = decoded;
    
    next();
  } catch (err) {
    return res.status(401).send({
      message: 'Auth faild'
    });
  }
}