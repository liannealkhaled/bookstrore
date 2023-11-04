import instance from ".";

const getAllBooks = async () => {
  const res = await instance.get("/api/books");
  return res.data;
};

//// the link is coming for express in app.js in funcrion of routers app use ...

const CreateBook = async () => {
  const res = await instance.post();
  return res.data;
};

export { getAllBooks };
