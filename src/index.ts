import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors middleware


import candidatesRouter from './routes/candidate';


const app = express();
const port = process.env.PORT || 3005;

app.use(cors());

app.use(bodyParser.json());

app.use('/candidates', candidatesRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
