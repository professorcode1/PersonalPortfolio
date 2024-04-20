const util = require('util');
import { Connection } from "mysql";

function async_push_query(sql_query:string, info:Object, connection:Connection) {
    return util.promisify(connection.query).call(connection, sql_query, info);
}

export {async_push_query}