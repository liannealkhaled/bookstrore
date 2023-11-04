import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteBook } from "../../api/books";

const BookItem = ({ book }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["book"],
    mutationFn: () => deleteBook(book._id),
    onSuccess: () => {
      queryClient.invalidateQueries("books");
    },
  });
  return (
    <div className="flex flex-col border-black border-solid border-[2px] m-[10px] w-[200px] h-[100px]  rounded-md bg-sky-300">
      <div className="flex justify-end align-top  ">
        <button
          onClick={mutate}
          className=" text-[8px] font-semibold cursor-pointer rounded-full px-1 "
        >
          x
        </button>
      </div>
      <div className="p-2">
        <h1>Title : {book.title} </h1>
        <h1> Author : {book.author} </h1>
        <div className="flex justify-end">
          {/* <Link to={"/Book"}> */}
          {/* <input> </input> */}
          <button className=" text-sm rounded-md px-2 border-b-2 border-black border-[1px]  cursor-pointer hover:bg-gray-300 ">
            Edit
          </button>

          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default BookItem;
