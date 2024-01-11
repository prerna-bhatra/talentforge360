import express from 'express';
import bodyParser from 'body-parser';
import candidatesRouter from './routes/candidate';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/candidates', candidatesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
