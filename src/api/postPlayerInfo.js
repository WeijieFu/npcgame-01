import axios from 'axios'

export const createPlayer = (openid, value)=>{
    axios.post('https://training-game-strapi.herokuapp.com/players', {
        openid: openid.toString(),
        content: value
    })
}