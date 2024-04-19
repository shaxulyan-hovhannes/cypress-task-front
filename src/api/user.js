import axios from "utils/axios";

const registerUser = async (payload) => {
  try {
    const data = await axios.post("/user/create", payload);

    return data;
  } catch (err) {
    return err;
  }
};

const loginUser = async (payload) => {
  try {
    const data = await axios.post("/user/login", payload);

    return data;
  } catch (err) {
    return err;
  }
};

export { registerUser, loginUser };
