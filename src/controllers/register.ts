import { Request, Response } from 'express';
import User from '../models/User';


export const registerUser = async (req: Request, res: Response) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  try {
    const registerdUser = await user.save();
    res.status(200).send(registerdUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

