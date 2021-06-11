import axios from "axios";

export const getQuestion = async (currentLevel) => {
  try {
    const res = await axios.get(
      `https://training-game-strapi.herokuapp.com/level-${currentLevel}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
