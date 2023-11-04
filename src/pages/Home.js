import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllBooks, deleteBook } from "../api/books";
import { Link } from "react-router-dom";
import BookItem from "./component/BookItem";

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
          {data?.map((book) => (
            <BookItem book={book} />
          ))}
          <div className="flex items-end">
            <h1> Didn't find it? </h1>
            <Link to={"/Book"}>
              <button className="  ml-2 text-sm rounded-md px-2 border-b-2 border-black border-[1px] cursor-pointer  bg-green-400">
                ADD BOOK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
