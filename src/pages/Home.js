import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../api/books";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: () => getAllBooks(),
  });
  // if (isLoading) return <h1> ...loading .. </h1>;

  return (
    <div className="">
      {/* wrap her wirh div,to make it in iphone view: hidden md:block  */}
      <div className="flex justify-center bg-black text-white text-[30px] font-sans ">
        {" "}
        BOOK STORE{" "}
      </div>
      <div className="flex flex-row">
        <div className=" w-[500px]">
          <img src="https://easydrawingguides.com/wp-content/uploads/2020/08/Open-Book-Step-08.png" />
        </div>
        <div className="flex justify-center items-center flex-wrap ">
          {data?.map((book) => {
            return (
              <div className="flex flex-col border-black border-solid border-[2px] m-[10px] w-[200px] h-[100px]  rounded-md bg-sky-300">
                <div className="flex justify-end align-top  ">
                  <button className=" text-[8px] font-semibold cursor-pointer rounded-full px-1 ">
                    x
                  </button>
                </div>
                <div className="p-2">
                  <h1>Title : {book.title} </h1>
                  <h1> Author : {book.author} </h1>
                  <div className="flex justify-end">
                    <Link to={"/Book"}>
                      <input> </input>
                      <button className=" text-sm rounded-md px-2 border-b-2 border-black border-[1px]  cursor-pointer hover:bg-gray-300 ">
                        Edit
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex items-end">
            <h1> Didn't find it? </h1>
            <button className="  ml-2 text-sm rounded-md px-2 border-b-2 border-black border-[1px] cursor-pointer  bg-green-400">
              ADD BOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
