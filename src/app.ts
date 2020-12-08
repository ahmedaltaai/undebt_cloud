import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
  next();
});

app.listen(port, () => console.log(`Server started on port: ${port}`))