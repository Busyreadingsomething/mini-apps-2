const maskCardNum = (cardNum) => {
  const cardString = cardNum.toString();
  const cardLen = cardString.length;
  let mask = null;
  if (cardNum) {
    mask = cardString
      .split('')
      .map((ch, index) => (cardLen - index < 5 ? ch : '*'))
      .join('');
  }
  return mask;
};

export default maskCardNum;
