import axios from "axios";

export const getCoupon = async (level) => {
  try {
    const res = await axios.get(
      `https://training-game-strapi.herokuapp.com/coupons/${level}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateCoupon = async (level, rest) => {
  const res = await axios.put(
    `https://training-game-strapi.herokuapp.com/coupons/${level}`,
    rest
  );
  return res.data;
};
