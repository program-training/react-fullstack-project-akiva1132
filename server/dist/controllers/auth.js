"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByEmail = exports.loginController = exports.generateAuthToken = exports.registerController = exports.getUserNmae = void 0;
const auth_1 = require("../middleware/auth");
const users_1 = require("../utils/users");
Object.defineProperty(exports, "getUserByEmail", { enumerable: true, get: function () { return users_1.getUserByEmail; } });
const getUserNmae = (req, res) => {
    var _a;
    const { email } = req.body;
    const user = (_a = (0, users_1.getUserByEmail)(email)) === null || _a === void 0 ? void 0 : _a.email;
    res.status(201).json(user);
};
exports.getUserNmae = getUserNmae;
// User registration
const registerController = (req, res) => {
    const { email, password, role } = req.body;
    console.log(req.body);
    const requestingUser = { email, password, role };
    if (!requestingUser) {
        return res.status(403).json({ error: "Permission denied" });
    }
    // Check if the user already exists
    if ((0, users_1.getUserByEmail)(email)) {
        return res.status(400).json({ error: "User already exists" });
    }
    // Create a new user
    const newUser = {
        id: "",
        email,
        password,
    };
    (0, users_1.createUser)(newUser);
    res.status(201).json({ message: "User registered successfully" });
};
exports.registerController = registerController;
const generateAuthToken = () => {
    // Generate a random token (for demonstration purposes)
    const randomToken = Math.random().toString(36).substring(2, 15);
    // Save the generated token in the array
    auth_1.tokenArray.push(randomToken);
    return randomToken;
};
exports.generateAuthToken = generateAuthToken;
// User login
const loginController = (req, res, next) => {
    const { email, password } = req.body;
    // Find the user by email
    const user = (0, users_1.getUserByEmail)(email);
    // Check if the user exists and the password matches (in a real app, compare hashed passwords)
    if (!user || user.password !== password) {
        return res.status(401).json({ error: "Invalid credentials" });
    }
    // Generate an authentication token using the middleware function
    const authToken = (0, exports.generateAuthToken)();
    console.log(user);
    const responseObj = { user: user, token: authToken };
    // In a real application, you would store the token securely and handle token expiration
    res.json({ message: "Login successful", responseObj });
};
exports.loginController = loginController;
