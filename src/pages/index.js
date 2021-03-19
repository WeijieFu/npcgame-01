import * as React from "react"
import {useEffect, useState, useRef} from 'react'
import axios from 'axios'
import {playerLogin} from '../api/player'

// markup
const IndexPage = (props) => {
  const [userInfo, setUserInfo] = useState({ headimgurl: '', openid: '' })
  // const [player, setPlayer] = useState({openid})
  const openid = useRef()
  const content = useRef()

  useEffect(() => {
    const query = props.location.search
    const start = query.search('=')
    const end = query.search('&')
    const code = props.location.search.slice(start+1, end)

    axios.post('/.netlify/functions/getusers', {"code" : code },{ headers: { 'Content-Type': 'application/json'}}).then(
      (userInfoRes) => setUserInfo({ headimgurl: userInfoRes.data.headimgurl, openid: userInfoRes.data.openid})
    )
  }, [])
  


    const handlePlayerLogin = ()=>{
      const playerInfo =  playerLogin(userInfo.openid)
      console.log(playerInfo)
    }



  return (
    <main >
      <title>寻找Aptamil有机星球</title>

      <h1>Hello this is NPC Game</h1>

    
      <p>your nickname is {userInfo.nickname}</p>
      <p>your openid is {userInfo.openid}</p>
      <img src={userInfo.headimgurl} alt=""/>
      
      <label for="openid">openid</label>
      <input type="text" ref={openid} id="openid"/> 
      <label for="content">content</label>
      <input type="text" ref={content} id="content"/> 
      <button onClick={handlePlayerLogin}>Create</button>
      

      
    </main>
  )
}

export default IndexPage
