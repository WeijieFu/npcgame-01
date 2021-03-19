import axios from 'axios'


///playerLogin
export const playerLogin = (openid)=>{
    axios.get(`https://training-game-strapi.herokuapp.com/players/${openid}`).then(
        // if user has an account -> login
        res => res.data
    ).catch(err => {

        // if user doesn't have an account -> create account 
    axios.post('https://training-game-strapi.herokuapp.com/players', {
        openid: openid,
    }).then(
        res => res.data )
    }
        )
   
}


///playerUpdate