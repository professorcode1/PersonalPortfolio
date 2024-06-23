import mysql from "mysql"
const WebTelemetryConnetionConfig = {
    host     : process.env.DBHOST,
    port     : Number(process.env.DBPORT),
    user     : process.env.DBUSER,
    password : process.env.DBPASS,
    database : process.env.WEBTELDBNAME
};
console.log(WebTelemetryConnetionConfig)
const web_telemetry_connection = mysql.createConnection(WebTelemetryConnetionConfig);
export {web_telemetry_connection}