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
        {data?.map((book) => book.title)}
      </div>
    </div>
  );
};

export default Home;
