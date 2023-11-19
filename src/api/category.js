import instance from ".";

const getAllcategories = async () => {
  const res = await instance.get("/api/categories");
  return res.data;
};

export { getAllcategories };
