import { User } from '../models/user';
import { v4 as uuidv4 } from 'uuid';
import { read } from "../DB/UserDal"
import { write } from "../DB/UserDal"
const jsonfile = require("jsonfile");
// Example in-memory data store for users

read()
const users: User[] = read()


// Get a user by email
export function getUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

// Get a user by ID
export function getUserById(id: string): User | undefined {
  return users.find((user) => user.id === id);
}

// Create a new user
export function createUser(newUser: User): User {

  newUser.id = uuidv4();
  users.push(newUser);
  write(users)
  return newUser;
}
