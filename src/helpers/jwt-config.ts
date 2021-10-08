// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
import express from 'express';
function verifyJWT(
  req: any,
  res: express.Response,
  next: express.NextFunction
) {
  console.log(process.env.SECRE);

  const token = req.headers['token'];
  console.log(token);

  if (!token) {
    return res.status(401).json({ auth: false, message: 'No token provided' });
  }
  if (process.env.SECRET) {
    jwt.verify(token, process.env.SECRET, (err: any, decoded: any) => {
      if (err) {
        return res
          .status(500)
          .json({ auth: false, message: 'Failed to authenticate token' });
      }

      req.userId = decoded.id;
      next();
    });
  } else {
    return res
      .status(500)
      .json({ auth: false, message: 'Failed to authenticate token' });
  }
}

function getJwt(expire: number, secret: any) {
  const token = jwt.sign({ sign: 1 }, secret, { expiresIn: expire });
  return token;
}

export { jwt, verifyJWT, getJwt };
