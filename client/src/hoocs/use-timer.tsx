import { useEffect, useState } from 'react';
import { getTimeLeftFromCurrent } from 'utils/index';

/**
 * Returns different between finishTime and current time. Format - mm:ss
 *
 * @param finishTime - time in UNIX format
 * @param timeout - interval between calculations
 */
export const useTimer = (finishTime: number, timeout = 1000) => {
  const [timer, setTimer] = useState('');
  const [isTimeEnd, setTimeEnd] = useState(false);

  const setDateToTimer = (finishTime: number) => {
    const { secondsLeft, minutesLeft, isEnd } = getTimeLeftFromCurrent(
      finishTime,
    );

    setTimeEnd(isEnd);
    setTimer(`${minutesLeft}:${secondsLeft}`);
  };

  useEffect(() => {
    setDateToTimer(finishTime);
    const interval = setInterval(() => setDateToTimer(finishTime), timeout);

    if (isTimeEnd || !finishTime) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isTimeEnd, finishTime]);

  return { timer, setTimer, isTimeEnd };
};
