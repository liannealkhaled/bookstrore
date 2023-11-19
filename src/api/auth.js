import instance from ".";
import { jwtDecode } from "jwt-decode";

const login = async (userInfo) => {
  const { data } = await instance.post("/signin", userInfo);

  storeToken(data?.token);
  return data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (let key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post("/signup", formData);
  storeToken(data?.token);
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/chefs");
  return data;
};

const getAllRecipes = async () => {
  const { data } = await instance.get("/recipes/");
  return data;
};

const getAllCategories = async () => {
  const { data } = await instance.get("/categories/");
  return data;
};

// const addRecipetocategory = async (category, recipeID) => {
//   const res = await instance.put(
//     `/yum-project/api/category/addrecipe/${recipeID}`,
//     {
//       //does the backend function do the all work and pusing or no ?
//       recipes: recipes,
//     }
//   );
//   return res.data;
// };

// const getUserInfoByUserId = async (userId) => {
//   const { data } = await instance.get(`/yum-project/api/auth/user/${userId}`);
//   return data;
// };

// const getYourProfile = async () => {
//   const { data } = await instance.get("/yum-project/api/auth/me");
//   return data;
// };

const getallMyrecipes = async () => {
  const { data } = await instance.get("/recipes/my-recipes");
  return data;
};

// const updateYourProfile = async (image) => {
//   const res = await instance.put(`/yum-project/api/auth/profile`, {
//     image: image,
//   });
//   return res.data;
// };

// //updateYourRecipe
// const addnewIngredient = async (newing) => {
//   const res = await instance.put(`/yum-project/api/auth/ingredientlist`, {
//     ingredientname: ingredientname,
//   });
//   return res.data;
// };

// // getRecipeInfoByRecipeName
// // getallRecipesByRecipecategory
// // getallRecipesByRecipeingredient
// //addnewCategory

export {
  checkToken,
  login,
  logout,
  getAllUsers, //get all chefs
  register,
  // getYourProfile,
  //getUserInfoByUserId, //browes user profile and recipes
  // updateYourProfile,
  // updateYourRecipe,
  getallMyrecipes,
  // addRecipetocategory,
  getAllCategories,
  // getRecipeInfoByRecipeId,
  getAllRecipes,
  //createnewRecipe,
  // addnewIngredient,
};
