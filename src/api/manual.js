import axios from "axios";

export const getManual = async () => {
  try {
    const res = await axios.get(
      `https://training-game-strapi.herokuapp.com/game-manual`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
