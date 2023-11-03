import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../api/books";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["books"],
    queryFn: () => getAllBooks(),
  });

  return (
    <div>
      <div className="flex justify-center bg-black text-white text-[30px] font-sans ">
        {" "}
        BOOKS LIST{" "}
      </div>
      <div className="flex justify-center items-center flex-col">
        {data?.map((book) => {
          return (
            <div className="flex flex-col border-black border-solid border-[2px] m-[10px] w-[200px] h-[100px] p-2 rounded-md">
              <h1>Title : {book.title} </h1>
              <h1> Author : {book.author} </h1>
              <div className="flex flex-row justify-evenly mt-2">
                <button className=" text-sm rounded-md px-2 border-b-2 border-black border-[1px] bg-red-600 cursor-pointer">
                  Delete
                </button>
                <button className=" text-sm rounded-md px-2 border-b-2 border-black border-[1px]  cursor-pointer bg-gray-500 ">
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <h1> Didn't find it? </h1>
        <button className="  ml-2 text-sm rounded-md px-2 border-b-2 border-black border-[1px] cursor-pointer bg-green-700">
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default Home;
