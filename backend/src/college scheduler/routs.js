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
const passport_1 = __importDefault(require("passport"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../utils/db");
const connections_1 = require("../connections");
const LoginRoute = (req, res) => {
    passport_1.default.authenticate('local', (err, user, info, status) => {
        if (err)
            return res.status(500).send(false);
        if (!user)
            return res.status(404).send(false);
        return res.status(200).send(true);
    })(req, res);
};
const RegisterRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        if ((yield (0, db_1.async_get_query)("SELECT EXISTS(SELECT * FROM university WHERE email = " + connections_1.college_scheduler_connection.escape(req.body.email) + ") AS email_used", connections_1.college_scheduler_connection))[0].email_used) {
            return res.status(400).send("This email is already in use");
        }
        yield (0, db_1.async_push_query)("INSERT INTO university SET ?", {
            name: req.body.instituteName,
            email: req.body.email,
            password: hashedPassword
        }, connections_1.college_scheduler_connection);
        passport_1.default.authenticate("local")(req, res, function () {
            res.status(200).send();
        });
    }
    catch (err) {
        console.log(err);
        res.redirect('/register');
    }
});
