import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}.org1k.mongodb.net/test`, { useUnifiedTopology: true, useNewUrlParser: true }, 
  () => console.log('connected to db!')
);

// register the user
app.use('/register', require('./routes/register'));

app.listen(process.env.PORT || 3000, () => console.log('Server started'))