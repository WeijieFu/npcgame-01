const axios = require("axios");
require("dotenv").config();

exports.handler = function (event, context, callback) {
  const { code } = JSON.parse(event.body);

  const tokenUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${process.env.APP_ID}&secret=${process.env.APP_SECRET}&code=${code}&grant_type=authorization_code`;

  axios.get(tokenUrl).then((tokenRes) => {
    const access_token = tokenRes.data.access_token;
    const openid = tokenRes.data.openid;
    const userInfoUrl = `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`;

    axios.get(userInfoUrl).then((userInfoRes) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(userInfoRes.data),
      });
    });
  });
};
