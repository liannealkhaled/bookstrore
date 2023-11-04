import instance from ".";

const getAllBooks = async () => {
  const res = await instance.get("/api/books");
  return res.data;
};

//// the link is coming for express in app.js in funcrion of routers app use ...

export { getAllBooks };
