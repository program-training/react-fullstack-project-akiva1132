"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateData = exports.write = exports.read = void 0;
const jsonfile = require("jsonfile");
const node_path_1 = __importDefault(require("node:path"));
function read() {
    const file = node_path_1.default.join(__dirname, "./trips.json");
    const data = jsonfile.readFileSync(file);
    return data;
}
exports.read = read;
function write(data) {
    const file = node_path_1.default.join(__dirname, "./trips.json");
    jsonfile.writeFileSync(file, data, (err, resultData) => {
        if (err) {
            return err;
        }
    });
    return "user is registered in the list of users";
}
exports.write = write;
const updateData = () => {
    const fileTrip = node_path_1.default.join(__dirname, "./trips.json");
    const fileUser = node_path_1.default.join(__dirname, "./users.json");
    const NfileTrip = node_path_1.default.join(__dirname, "./t.json");
    const dataTrip = jsonfile.readFileSync(NfileTrip);
    const NfileUser = node_path_1.default.join(__dirname, "./u.json");
    const dataUser = jsonfile.readFileSync(NfileUser);
    console.log("bggftttt");
    jsonfile.writeFileSync(fileTrip, dataTrip, (err, resultData) => {
        if (err) {
            return err;
        }
    });
    jsonfile.writeFileSync(fileUser, dataUser, (err, resultData) => {
        if (err) {
            return err;
        }
    });
};
exports.updateData = updateData;
