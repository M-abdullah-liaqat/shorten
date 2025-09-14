import Link from "next/link"

function NavBar() {
  return (
    <div className="Nabar bg-indigo-900">
    <div className="2xl:w-[1500px] w-[100%] justify-self-center Nav bg-indigo-900 text-white flex justify-between items-center py-3 px-4">
     <Link href="/"><div className="logo text-2xl font-bold">BitLinks</div></Link>
      <ul className="flex gap-5 items-center">
       <Link href="/"><li className="hover:text-indigo-300 hover:scale-105 transition-all">Home</li></Link>
        <li className="sm:block hidden hover:text-indigo-300 hover:scale-105 transition-all">About</li>
        <Link href="/shorten"><li><button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-xl font-bold cursor-pointer hover:scale-105 transition-all"> 
            Try it
        </button></li></Link>
        <li><button className="bg-indigo-600 sm:inline-flex hidden  hover:bg-indigo-700 px-6 py-2 rounded-xl font-bold cursor-pointer hover:scale-105 transition-all"> 
            GitHub
        </button></li>
      </ul>
    </div>
    </div>
  )
}

export default NavBar
