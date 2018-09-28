import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import {
  orderRoutes, defaultRoutes, userRoutes, menuRoutes
} from './server/routes';

const app = express();
const swaggerDocument = YAML.load(`${process.cwd()}/swagger.yaml`);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', userRoutes);
app.use('/api/v1', menuRoutes);
app.use('/api/v1', orderRoutes);
app.use('/', defaultRoutes);

const port = process.env.PORT || 5030;

app.listen(port, () => console.log(`Fast-Food-Fast is running on port ${port}`));

export default app;
