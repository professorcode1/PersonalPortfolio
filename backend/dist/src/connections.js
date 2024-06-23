"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web_telemetry_connection = void 0;
const mysql_1 = __importDefault(require("mysql"));
const WebTelemetryConnetionConfig = {
    host: process.env.DBHOST,
    port: Number(process.env.DBPORT),
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.WEBTELDBNAME
};
console.log(WebTelemetryConnetionConfig);
const web_telemetry_connection = mysql_1.default.createConnection(WebTelemetryConnetionConfig);
exports.web_telemetry_connection = web_telemetry_connection;
