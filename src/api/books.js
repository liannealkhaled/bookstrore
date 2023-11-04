import instance from ".";

const getAllBooks = async () => {
  const res = await instance.get("/api/books");
  return res.data;
};

//// the link is coming for express in app.js in funcrion of routers app use ...

const CreateOneBook = async ({ title, author, price }) => {
  const res = await instance.post("/api/book", {
    title,
    author,
    price,
  });
  return res.data;
};

const deleteBook = async (id) => {
  const res = await instance.delete(`/api/books/${id}`);
  return res.data;
};
export { getAllBooks, CreateOneBook, deleteBook };
