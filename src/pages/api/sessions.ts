import { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';

let UsersList = [
  {
    token: uuid(),
    User: {
      name: 'john doe',
      email: 'johnDoe@gmail.com',
    },
    password: '123',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  const user = UsersList.find(
    (user) => user.User.email === email && user.password === password,
  );

  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  return res.status(200).json({
    token: user.token,
    user: {
      name: user.User.name,
      email: user.User.email,
    },
  });
}
