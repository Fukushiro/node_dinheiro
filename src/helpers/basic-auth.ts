import auth from 'basic-auth';
import express from 'express';
import { userAuthenticate } from '../services/user.services';
async function basicAuth(
  req: any,
  res: express.Response,
  next: express.NextFunction
) {
  const au = auth(req);
  console.log(au);
  if (au == undefined) {
    return res.status(401).json({ message: 'Sem basic auth' });
  }

  const user = await userAuthenticate({ username: au.name, password: au.pass });
  if (!user) {
    return res
      .status(401)
      .json({ message: 'Invalid Authentication Creadentials' });
  }
  req.user = user;

  next();
}

export { basicAuth };
