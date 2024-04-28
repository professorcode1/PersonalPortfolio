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
exports.ViewWebTelemetry = exports.PostWebTelemetryCallback = exports.GetNewTokenCallback = void 0;
const getTimeFromServer_1 = require("../utils/getTimeFromServer");
const uuid_1 = require("uuid");
const connections_1 = require("../connections");
const db_1 = require("../utils/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const GetNewTokenCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sessionId = (0, uuid_1.v4)();
    res.send(sessionId);
    try {
        const time = yield (0, getTimeFromServer_1.getCurrentTimeFromInterntionalServer)();
        yield (0, db_1.async_push_query)("INSERT INTO session_id SET ?", {
            time,
            sessionId
        }, connections_1.web_telemetry_connection);
    }
    catch (error) {
        console.error(error);
    }
});
exports.GetNewTokenCallback = GetNewTokenCallback;
const PostWebTelemetryCallback = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send();
    try {
        yield (0, db_1.async_push_query)("INSERT INTO Pageview SET ?", req.body, connections_1.web_telemetry_connection);
    }
    catch (error) {
        console.error(error);
    }
});
exports.PostWebTelemetryCallback = PostWebTelemetryCallback;
const ViewWebTelemetry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!bcrypt_1.default.compareSync(req.body.password, process.env.WebTelemetryPassword)) {
        return res.status(401).send();
    }
    ;
    const time_compare_string = connections_1.web_telemetry_connection.escape(`${req.body.year}-${String(req.body.month).padStart(2, "0")}%`);
    const sessions = yield (0, db_1.async_get_query)(`
        SELECT * FROM session_id
        WHERE time like 
        ${time_compare_string}
        order by time
    `, connections_1.web_telemetry_connection);
    const pageview = yield (0, db_1.async_get_query)(`
        select Pageview.* 
        from session_id 
        inner join Pageview 
        on Pageview.sessionId = session_id.sessionId
        where session_id.time like ${time_compare_string}
        order by Pageview.time
    `, connections_1.web_telemetry_connection);
    return res.send({ sessions, pageview });
});
exports.ViewWebTelemetry = ViewWebTelemetry;
