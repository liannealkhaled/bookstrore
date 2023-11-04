import React from "react";

const AddBook = () => {
  const [userInfo, setUserInfo] = useState("");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => CreateBook(userInfo),
    onSuccess: () => {
      setUser(true);
      navigate("/transactions");
    },
  });

  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-white">
      <div className=" gap-3  w-[50%] h-[50%] flex flex-col justify-center items-center bg-blue-300 rounded-md ">
        <h1 className=" font-mono text-[35px] font-bold"> Add your Book </h1>
        <input
          name="title"
          onChange={handleChange}
          placeholder="book title"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
        />

        <input
          name="author"
          onChange={handleChange}
          placeholder="author name"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
        />
        <input
          name="price"
          onChange={handleChange}
          placeholder="price"
          className="w-[80%] h-[50px] rounded-lg px-5 border-[2px] border-black py-1"
        />
        <button
          onClick={() => mutate()}
          className="border-[2px]  px-3 py-1 border-black font-bold hover:bg-blue-400 rounded-md "
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddBook;
