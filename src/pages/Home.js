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
      <div className="font-mono font-semibold text-amber-200">
        {data?.map((book) => {
          return (
            <div>
              <h1>{book.title} </h1>
              <h1>{book.author} </h1>
              <h1>{book._id} </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
