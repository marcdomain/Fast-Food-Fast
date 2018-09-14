import express from 'express';
import bodyParser from 'body-parser';
import { orderRoutes, defaultRoutes } from './server/routes/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', orderRoutes);
app.use('/', defaultRoutes);

const port = process.env.PORT || 5030;

app.listen(port, () => console.log(`Fast-Food-Fast is running on port ${port}`));

export default app;
