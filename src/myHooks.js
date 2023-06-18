import { useState } from 'react';

function useWidthResizeListener() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  function handleResize() {
    setScreenWidth(window.innerWidth);
  }
  window.addEventListener('resize', handleResize);
  return screenWidth;
}

function useIdFormatDate() {
  return { day: 'numeric', month: 'long', year: 'numeric' };
}

function useReverseFormatNumber(num) {
  let cleanedString;
  const validNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const isNumValid = validNums?.some(validNum => num?.includes(validNum));
  if (isNumValid) {
    const numCapped = num?.substring(0, 19);
    cleanedString = numCapped?.replace(/\./g, '');
  } else {
    cleanedString = '0';
  }
  return cleanedString;
}

function useFormatNumber(num) {
  let formattedNum;
  // console.log(num)
  if (num !== 0) {
    formattedNum = num?.toLocaleString('id-ID');
  } else {
    formattedNum = '';
  }

  return formattedNum;
}

export {
  useWidthResizeListener,
  useFormatNumber,
  useReverseFormatNumber,
  useIdFormatDate,
};
