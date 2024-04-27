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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWebTelemetryCallback = exports.GetNewTokenCallback = void 0;
const getTimeFromServer_1 = require("../utils/getTimeFromServer");
const uuid_1 = require("uuid");
const connections_1 = require("../connections");
const db_1 = require("../utils/db");
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
