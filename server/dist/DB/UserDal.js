"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.read = void 0;
const jsonfile = require("jsonfile");
const node_path_1 = __importDefault(require("node:path"));
function read() {
    const file = node_path_1.default.join(__dirname, "./users.json");
    const data = jsonfile.readFileSync(file);
    return data;
}
exports.read = read;
function write(data) {
    const file = node_path_1.default.join(__dirname, "./users.json");
    jsonfile.writeFileSync(file, data, (err, resultData) => {
        if (err) {
            return err;
        }
    });
    return "user is registered in the list of users";
}
exports.write = write;
