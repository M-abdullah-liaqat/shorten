import mongoose from "mongoose";

const Schma= mongoose.Schema;
const shortSchma= new Schma({
    url: String,
    shorturl: String
})

export default mongoose.models.ShortURL || mongoose.model("ShortURL", shortSchma)