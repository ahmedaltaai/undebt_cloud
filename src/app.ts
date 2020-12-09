import express, { Application, Request, Response, NextFunction, urlencoded } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// init express
const app: Application = express();

// connect to mongodb


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@undept.org1k.mongodb.net/undebt?retryWrites=true&w=majority`, 
  { useUnifiedTopology: true, useNewUrlParser: true }, 
  () => console.log('connected to db!')
);

// body parser to json
app.use(express.json());

// register the user
app.use('/register', require('./routes/register'));

app.listen(process.env.PORT || 3000, () => console.log('Server started'));
