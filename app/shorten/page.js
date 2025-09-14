"use client";
import { useForm } from "react-hook-form";
import route from "../api/fordb";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Bounce } from "react-toastify";
function Page() {
  const mainFarm = useRef(null);
  const [Generated, setGenerated] = useState();
  const [Loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const onSub = async (e) => {
    setLoading(true);
    console.log("Running");
    let fin = JSON.stringify(e);
    let abd = await route(fin);
    if (abd === "sucess") {
      toast.success("URL Generated", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setGenerated(e.shorturl);
      reset();
    } else {
      toast.error(abd, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    setLoading(false);
  };
  return (
    <div className="w-full h-[93vh]">
      <div className="xl:w-[1200px] lg:w-[1000px] md:w-[760px] w-[100%] mx-1 justify-self-center bg-indigo-400 p-5 rounded-2xl mt-20 lg:mt-40">
        <form
          ref={mainFarm}
          onSubmit={handleSubmit((e) => onSub(e))}
          className="flex flex-col items-center justify-center gap-8"
        >
          <div className="w-[90%] flex justify-center flex-col items-center gap-3">
            <div className="w-full text-xl font-medium">Actual URL</div>
            <input
              {...register("url", { required: "Email is required" })}
              className="bg-indigo-200 w-[100%] focus: outline-none border-[3px] border-indigo-200 rounded-lg px-3 py-1 focus:border-indigo-500"
              type="text"
              placeholder="Enter URL"
            />
          </div>
          <div className="w-[90%] flex justify-center flex-col items-center gap-3">
            <div className="w-full text-xl font-medium">Short URL</div>
            <input
              {...register("shorturl", { required: true })}
              className="bg-indigo-200 w-[100%] focus: outline-none border-[3px] border-indigo-200 rounded-lg px-3 py-1 focus:border-indigo-500"
              type="text"
              placeholder="Enter Short URL"
            />
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-indigo-600 text-white w-[120px] flex items-center justify-center hover:bg-indigo-700 py-2 rounded-xl font-bold cursor-pointer hover:scale-105 transition-all"
          >
            {Loading ? (
              <AiOutlineLoading3Quarters size={24} className=" animate-spin" />
            ) : (
              "Generate"
            )}
          </button>
          {Generated && (
            <div className="flex gap-4 text-xl font-medium">
              <div>Your Link:</div>
              <a
                href={`/${Generated}`}
                className="text-blue-900 hover:underline"
              >
                http://localhost:3000/{Generated}
              </a>{" "}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Page;
