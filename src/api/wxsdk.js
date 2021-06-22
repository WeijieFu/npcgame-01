const sha1 = require("js-sha1");

const getTimeStamp = () => {
  return parseInt(new Date().getTime() / 1000 + "");
};

const getNounceStr = () => {
  return Math.random().toString(36).substr(2, 15);
};

export const getSignature = (ticket, url) => {
  const timeStamp = getTimeStamp();
  const nonceStr = getNounceStr();
  const str = `jsapi_tickt=${ticket}&noncestr=${nonceStr}&timestamp=${timeStamp}&url=${url}`;
  const signature = sha1(str);
  return {
    timeStamp,
    nonceStr,
    signature,
  };
};
