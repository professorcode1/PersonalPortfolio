"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configDotEnv_1 = require("./src/utils/configDotEnv");
(0, configDotEnv_1.configure_dotnev)();
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const body_parser_1 = __importDefault(require("body-parser"));
const connections_1 = require("./src/connections");
const main_1 = require("./src/webTelemetry/main");
// @ts-ignore
const cookieparse = require("cookie-parser");
connections_1.web_telemetry_connection.connect();
const app = (0, express_1.default)();
// var cors = require('cors');
// app.use(cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//     methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
// }));
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/static', express_1.default.static(path_1.default.join((0, configDotEnv_1.get_build_path)(), 'static')));
app.use(cookieparse());
app.get("/", (req, res) => {
    res.sendFile(path_1.default.join((0, configDotEnv_1.get_build_path)(), 'index.html'));
});
app.get("/webTelemetry/getNewToken", main_1.GetNewTokenCallback);
app.post("/webTelemetry", main_1.PostWebTelemetryCallback);
app.post("/viewWebTelemetry", main_1.ViewWebTelemetry);
//
app.listen(process.env.PORT, () => {
    console.log(`server for portfolio is listening on ${process.env.PORT}`);
});
