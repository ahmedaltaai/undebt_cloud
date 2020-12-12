import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';


export const loginUser = async (req: Request, res: Response) => {

  const errorMsg: String = 'The email address or password that you\'ve entered doesn\'t match any account.';

  await User.findOne({
    email: req.body.email
  }).then(async (user) => {

    // check if email exists in db if there is no email then show error
    if(!user) return res.status(401).send(errorMsg);

    // get the password from db and save it as a string
    const password = await String(user?.password)
  
    // if email matches then compare password
    await bcrypt.compare(req.body.password, password).then(isMatch => {

      // check if password is wrong
      if(!isMatch) {
        res.status(401).send(errorMsg)
      } else {
        res.status(200).send('logging in')
      }
    })
    .catch(err => {
      console.log('error', err);
      res.status(500).send({error: err})
    });
  })
  .catch(err => {
    console.log('error', err);
    res.status(500).send({error: err})
  });
};

