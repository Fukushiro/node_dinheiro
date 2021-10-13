import express from 'express';
import { basicAuth } from './helpers/basic-auth';
import { sequelize } from './models';
import routes from './routes';
import { config } from 'dotenv';
import { verifyJWT } from './helpers/jwt-config';
import { getToken } from './controllers/user.controller';
import cors from 'cors';
import UserRoute from './routes/user.routes';

import { envs } from '../config';
config();
const app = express();

const PORT = 8000;
app.use(
  express.urlencoded({
    limit: '50mb',
  })
);
console.log('envs', envs.DATABASE_URL);

// const c = cors();
app.use(cors({ origin: '*' }));
// app.options('*', c);
app.use(express.json({ limit: '50mb' }));
UserRoute(app);
app.use(basicAuth);
app.get('/user/token', getToken);
app.use(verifyJWT);
app.get('/', (req, res) => res.send('Express + Typescript'));
routes(app);

// sequelize.sync({});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
