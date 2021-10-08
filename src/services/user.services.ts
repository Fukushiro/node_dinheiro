import { UserModel } from '../models/user.model';

async function userAuthenticate({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  return UserModel.findOne({
    where: {
      username: username,
      password: password,
    },
  });
}

export { userAuthenticate };
