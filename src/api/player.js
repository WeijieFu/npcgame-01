import axios from "axios"

///playerLogin
export const playerLogin = async (openid) => {
  try {
    const res = await axios.get(
      `https://aptamil-strapi.onrender.com/players/${openid}`
    )
    return res.data
  } catch (err) {
    const res = await axios.post(
      "https://aptamil-strapi.onrender.com/players",
      { openid: openid }
    )
    return res.data
  }
}

///playerUpdate
export const playerUpdate = async (openid, player) => {
  const res = await axios.put(
    `https://aptamil-strapi.onrender.com/players/${openid}`,
    player
  )
  return res.data
}

///playerRanking
export const playerRanking = async () => {
  const res = await axios.get(
    `https://aptamil-strapi.onrender.com/players?_limit=-1`
  )
  return res.data
}
