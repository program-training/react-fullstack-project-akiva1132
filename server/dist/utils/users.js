"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getUserByEmail = void 0;
const uuid_1 = require("uuid");
const UserDal_1 = require("../DB/UserDal");
const UserDal_2 = require("../DB/UserDal");
const jsonfile = require("jsonfile");
// Example in-memory data store for users
(0, UserDal_1.read)();
const users = (0, UserDal_1.read)();
// Get a user by email
function getUserByEmail(email) {
    return users.find((user) => user.email === email);
}
exports.getUserByEmail = getUserByEmail;
// Get a user by ID
function getUserById(id) {
    return users.find((user) => user.id === id);
}
exports.getUserById = getUserById;
// Create a new user
function createUser(newUser) {
    newUser.id = (0, uuid_1.v4)();
    users.push(newUser);
    (0, UserDal_2.write)(users);
    return newUser;
}
exports.createUser = createUser;
