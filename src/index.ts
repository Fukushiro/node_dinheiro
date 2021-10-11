import express from 'express';
import { basicAuth } from './helpers/basic-auth';
import { sequelize } from './models';
import routes from './routes';
import { config } from 'dotenv';
import { verifyJWT } from './helpers/jwt-config';
import { getToken } from './controllers/user.controller';
import cors from 'cors';
config();
const app = express();

const PORT = 8000;
app.use(
  express.urlencoded({
    limit: '50mb',
  })
);
// const c = cors();
app.use(cors({ origin: '*' }));
// app.options('*', c);
app.use(express.json({ limit: '50mb' }));
app.use(basicAuth);
app.get('/user/token', getToken);
// app.use(verifyJWT);
app.get('/', (req, res) => res.send('Express + Typescript'));
routes(app);

// sequelize.sync({});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
