import { getData } from "../api/fordb";
import { redirect } from "next/navigation";
async function Page({ params }) {
  let shorturl = (await params).shorturl;
  let doc = await getData(shorturl);
  let ret = JSON.parse(doc);
  if (ret) {
    redirect(ret.url);
  } else {
    redirect("http://localhost:3000/");
  }
  return <div>my post</div>;
}

export default Page;
