///playerRanking
export const getTimeStamp = () => {
  return parseInt(new Date().getTime() / 1000 + "");
};

export const getNounceStr = () => {
  return Math.random().toString(36).substr(2, 15);
};
