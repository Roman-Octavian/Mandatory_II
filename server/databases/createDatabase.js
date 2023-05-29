import db from "./connection.js"
import * as dotenv from "dotenv"
dotenv.config()

const isDeleteMode = process.argv.findIndex((argument) => argument === "delete_mode") === -1 ? false : true;

if (isDeleteMode) {
    db.execute(`DROP TABLE if exists users`);
}

db.execute(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(500) UNIQUE NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
`);

db.execute(`INSERT INTO users(email, username, password)
  VALUES(?, ?, ?)`, ["admin", "admin", "admin"]);