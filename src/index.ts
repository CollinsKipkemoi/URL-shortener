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

const MONGO_URL = process.env.MONGODB_URL
if(!MONGO_URL) {
    throw new Error('MONGODB_URL is not defined')
}

mongoose.connect(MONGO_URL).then(() => {
    console.log('Connected to MongoDB!!');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})