export const getImagePath = (imgUrl: string) =>
  `${process.env.CONFIG.IMAGES_BASEPATH}${imgUrl}`;

// 1 ==> 01
export const toDigit = (number: number) =>
  String(number).length === 1 ? '0' + number : number;

export const toClientData = (isEnd: boolean, time: number) =>
  isEnd ? '00' : toDigit(time);

export const getTimeLeftFromCurrent = (unixTime: number) => {
  const ms = unixTime - new Date().getTime();
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const secondsLeft = seconds - minutes * 60;
  const minutesLeft = minutes - hours * 60;
  const hoursLeft = hours - days * 24;

  const isTimeEnded = [secondsLeft, minutesLeft, hoursLeft].every(
    time => time === 0,
  );

  const isEnd = isTimeEnded || ms < 0;

  return {
    isEnd: isEnd,
    secondsLeft: toClientData(isEnd, secondsLeft),
    minutesLeft: toClientData(isEnd, minutesLeft),
    hoursLeft: toClientData(isEnd, hoursLeft),
  };
};
