const axios = require('axios')

exports.handler = function(event, context, callback){
    const {code} = JSON.parse(event.body)

    console.log(code)

    const tokenUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx08a65539b5bf483e&secret=80a0e3670fd65363c7690f96da7a9441&code=${code}&grant_type=authorization_code`
    

    axios.get(tokenUrl).then(
        (tokenRes)=>{
            const access_token = tokenRes.data.access_token
            const openid = tokenRes.data.openid
            const userInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`

            axios.get(userInfoUrl).then( (userInfoRes)=>{
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify(userInfoRes.data)
                })
            }
                
            )
        }
    )
   


    // const userInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`

    // userInfoRes = axios.get(userInfoUrl)

    

    // callback(null, {
    //     statusCode: 200,
    //     body: JSON.stringify(userInfoRes)
    // });
}