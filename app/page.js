import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
    <div className="h-[90vh] bg-indigo-300 grid md:grid-cols-2 grid-cols-1 gap-5">
      <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-3xl text-center">The best URl Shortner is here</div>
        <div className="2xl:px-40  xl:px-30 lg:px-15 md:px-7 px-10 text-[20px] text-center">We are the the most Strightforword URl shortner in the world. YOu don't need to login , You don't need to give your information to us. We understand your needs hence we created this URL shortner</div>
      <ul className="flex gap-5 items-center text-white mt-4">
        <Link href="/shorten"><li><button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-xl font-bold cursor-pointer hover:scale-105 transition-all"> 
            Try it
        </button></li></Link>
        <li><button className="bg-indigo-600 hover:scale-105 hover:bg-indigo-700 px-6 py-2 rounded-xl font-bold cursor-pointer transition-all "> 
            GitHub
        </button></li>
      </ul>
      </div>
      <div className=" relative flex justify-center items-center h-[100%]"> 
        <Image alt="Url Problem" src={"/vector.png"} width={800} height={500}></Image>
      </div>
    </div>
    </div>
  );
}
