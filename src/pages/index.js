import * as React from "react"



// markup
const IndexPage = (props) => {
  console.log(props)
  return (
    <main >
      <title>Home Page</title>
      <h1>Hello this is NPC Game</h1>


      <p>{props.location.pathname}</p>
      

      
    </main>
  )
}

export default IndexPage
