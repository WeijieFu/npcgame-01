import * as React from "react"
import {useEffect, useState} from 'react'
import axios from 'axios'


// markup
const IndexPage = (props) => {
  console.log(props)
  const [userInfo, setUserInfo] = useState({nickname: '', headimgurl: '', openid: '' })


  useEffect(() => {
    const query = props.location.search
    const start = query.search('=')
    const end = query.search('&')
    const code = props.location.search.slice(start+1, end)

    axios.post('/.netlify/functions/getusers', {"code" : code },{ headers: { 'Content-Type': 'application/json'}}).then(
      (userInfoRes) => setUserInfo({nickname: userInfoRes.data.nickname, headimgurl: userInfoRes.data.headimgurl, openid: userInfoRes.data.openid})
    )
  }, [])
  

  return (
    <main >
      <title>寻找Aptamil有机星球</title>

      <h1>Hello this is NPC Game</h1>

    
      <p>your nickname is {userInfo.nickname}</p>
      <p>your openid is {userInfo.openid}</p>
      <img src={userInfo.headimgurl} alt=""/>
      
      

      
    </main>
  )
}

export default IndexPage
