import express from "express"
import dotnev from "dotenv"
import cors from "cors"
import session from "express-session";

const app = express();
app.use(cors({
    credentials: true,
    origin: true
}));
app.use(express.json());

dotnev.config();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true,
    cookie: { secure: false }
}));

export function isAuthenticated (req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.redirect('/');
    }
}

import userRouter from "./routers/usersRouter.js";
app.use(userRouter);

import mailRouter from "./routers/mailRouter.js"
app.use(mailRouter)

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log("Server is running on port", server.address().port));