import * as React from "react"
import {useEffect} from 'react'


// markup
const IndexPage = (props) => {
  console.log(props)
  const code =''
  useEffect(() => {
    const query = props.location.search
    const start = props.location.search.search('=')
    const end = props.location.search.search('&')
    code = props.location.search[start, end]
    const url = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx08a65539b5bf483e&secret=80a0e3670fd65363c7690f96da7a9441&code=${code}&grant_type=authorization_code`
   
  }, [])
  

  
  return (
    <main >
      <title>Home Page</title>
      <h1>Hello this is NPC Game</h1>


      <p>{code}</p>
      

      
    </main>
  )
}

export default IndexPage
