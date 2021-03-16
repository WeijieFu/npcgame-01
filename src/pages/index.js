import * as React from "react"
import {useEffect} from 'react'


// markup
const IndexPage = (props) => {
  console.log(props)
  let code =''
  useEffect(() => {
    const query = props.location.search
    const start = query.search('=')
    const end = query.search('&')
    code = props.location.search.slice(start+1, end)
    const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx08a65539b5bf483e&secret=80a0e3670fd65363c7690f96da7a9441&code=${code}&grant_type=authorization_code`
    console.log(code)
  }, [])
  

  
  return (
    <main >
      <title>Home Page</title>
      <h1>Hello this is NPC Game</h1>

      <p>{props.location.search}</p>
      <p>{code}</p>
      

      
    </main>
  )
}

export default IndexPage
