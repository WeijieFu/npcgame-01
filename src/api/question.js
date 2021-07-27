import axios from "axios"

export const getQuestion = async (currentLevel) => {
  try {
    const res = await axios.get(
      `https://aptamil-strapi.onrender.com/level-${currentLevel}`
    )
    return res.data
  } catch (err) {
    console.log(err)
  }
}
