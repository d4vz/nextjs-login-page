import express from 'express';
import { v4 as uuid } from 'uuid';

const UsersList = [
  {
    User: {
      name: 'John Doe',
      email: 'johnDoe@gmail.com',
    },
    password: '123',
  },

  {
    User: {
      name: 'John Doe 2',
      email: 'johnDoe2@gmail.com',
    },
    password: '1234',
  },
];

const App = express();

App.get('/api/sessions', (req, res) => {
  return res.status(200).json(UsersList.map((user) => user.User));
});

App.post('/api/sessions', (req, res) => {
  const { email, password } = req.body;

  const isAuth = UsersList.find((user) => {
    return user.User.email === email && user.password === password;
  });

  if (isAuth) {
    return res.status(200).json({
      token: uuid(),
      user: isAuth.User,
    });
  } else {
    return res.status(401).json({
      message: 'Email or password incorrect',
    });
  }
});

export default App;
