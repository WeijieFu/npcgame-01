import axios from "axios"

export const getManual = async () => {
  try {
    const res = await axios.get(
      `https://aptamil-strapi.onrender.com/game-manual`
    )
    return res.data
  } catch (err) {
    console.log(err)
  }
}
