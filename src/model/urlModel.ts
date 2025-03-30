import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const URL = mongoose.model('URL', urlSchema);

export default URL;