import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'proshop@email.com',
    password: bcrypt.hashSync('Moose1234', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;