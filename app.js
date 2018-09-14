import express from 'express';
import bodyParser from 'body-parser';
import router from './server/routes/defaultRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

const port = process.env.PORT || 5030;

app.listen(port, () => console.log(`Fast-Food-Fast is running on port ${port}`));

export default app;
