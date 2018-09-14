import express from 'express'
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5030;

app.listen(port, () => console.log(`Fast-Food-Fast is running on port ${port}`));
