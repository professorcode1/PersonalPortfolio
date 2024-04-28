"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUserByEmail = exports.initializePassport = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../utils/db");
const connections_1 = require("../connections");
function initializePassport(getUserByEmail, getUserById) {
    const authenticateUser = (email, password, done) => __awaiter(this, void 0, void 0, function* () {
        const user = yield getUserByEmail(email);
        if (user === null) {
            return done(null, false, { message: 'No user with that email' });
        }
        try {
            if (yield bcrypt_1.default.compare(password, user.password)) {
                return done(null, user);
            }
            else {
                return done(null, false, { message: 'Password incorrect' });
            }
        }
        catch (e) {
            return done(e);
        }
    });
    passport_1.default.use(new passport_local_1.Strategy({ usernameField: 'email' }, authenticateUser));
    passport_1.default.serializeUser((user, done) => done(null, user.university_id));
    passport_1.default.deserializeUser((id, done) => __awaiter(this, void 0, void 0, function* () {
        return done(null, yield getUserById(id));
    }));
}
exports.initializePassport = initializePassport;
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, db_1.async_get_query)("SELECT * FROM university WHERE email = " + connections_1.college_scheduler_connection.escape(email), connections_1.college_scheduler_connection);
        if (result.length == 0)
            return null;
        else
            return result[0];
    });
}
exports.getUserByEmail = getUserByEmail;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield (0, db_1.async_get_query)("SELECT * FROM university WHERE university_id = " + connections_1.college_scheduler_connection.escape(id), connections_1.college_scheduler_connection);
        if (result.length == 0)
            return null;
        else
            return result[0];
    });
}
exports.getUserById = getUserById;
