"use server";
import mongoose from "mongoose";
import Shorts from "@/aboutDB/Shorts";

async function route(request) {
  try {
    console.log("RUnniongg");
    await mongoose.connect(process.env.MONGODB);
    let fin = await JSON.parse(request);
    let alread = await Shorts.findOne({ shorturl: fin.shorturl });
    if (alread) {
      return "URL is not available try Another";
    } else {
      let short = new Shorts(fin);
      await short.save();
      return "sucess";
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getData(e) {
  await mongoose.connect(process.env.MONGODB);
  let one = await Shorts.findOne({ shorturl: e });
  let ret = JSON.stringify(one);
  return ret;
}
export default route;
