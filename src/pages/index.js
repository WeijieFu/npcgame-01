import * as React from "react"
import {useEffect, useState} from 'react'
import axios from 'axios'


// markup
const IndexPage = (props) => {
  console.log(props)
  const [userInfo, setUserInfo] = useState({nickname: '', headimgurl: '' })


  useEffect(() => {
    const query = props.location.search
    const start = query.search('=')
    const end = query.search('&')
    const code = props.location.search.slice(start+1, end)

    axios.post('/.netlify/functions/getusers', {"code" : code },{ headers: { 'Content-Type': 'application/json'}}).then(
      (userInfoRes) => setUserInfo({nickname: userInfoRes.data.nickname, headimgurl: userInfoRes.data.headimgurl})
    )

    // console.log(res)
    
    // const tokenUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx08a65539b5bf483e&secret=80a0e3670fd65363c7690f96da7a9441&code=${code}&grant_type=authorization_code`
    

    // const tokenRes = axios.get(tokenUrl)
    // const access_token = tokenRes.access_token
    // const openid = tokenRes.openid


    // const userInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`

    // const userInfoRes = axios.get(userInfoUrl)
    // setUserInfo({nickname: userInfoRes.nickname, headimgurl: userInfoRes.headimgurl})

  }, [])
  

  
  return (
    <main >
      <title>Home Page</title>
      <h1>Hello this is NPC Game</h1>

      <p>{props.location.search}</p>
      <p>your nickname is {userInfo.nickname}</p>
      <p>your headiamge is {userInfo.headimgurl}</p>
      
      

      
    </main>
  )
}

export default IndexPage
