import axios from 'axios'


///playerLogin
export const playerLogin = async (openid)=>{
    try{
        const res = await axios.get(`https://training-game-strapi.herokuapp.com/players/${openid}`)
        return res.data
    }catch(err){
        const res = await axios.post('https://training-game-strapi.herokuapp.com/players', {openid: openid})
        return res.data
    }
   
}


///playerUpdate