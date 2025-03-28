import express, {Request, Response, urlencoded, Application} from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import urlExist from "url-exist";
import {nanoid} from "nanoid";
import path from "path";

dotenv.config()
const app: Application = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());


app.use(urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})