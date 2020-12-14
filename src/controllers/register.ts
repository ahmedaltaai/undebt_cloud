import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';


export const registerUser = async (req: Request, res: Response) => {

  // check if email exists in db
  const emailExists = await User.findOne({email: req.body.email});
  if(emailExists) return res.status(400).send('Email already exists');

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = await new User({
    email: req.body.email,
    password: hashedPassword
  });

  try {
    await user.save();
    res.status(201).send({user: user._id});
  } catch (err) {
    res.status(400).send(err);
  }
};

