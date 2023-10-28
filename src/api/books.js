import instance from ".";

const getAllBooks = async () => {
  const res = await instance.get("/api/books");
  return res.data;
};

export { getAllBooks };
