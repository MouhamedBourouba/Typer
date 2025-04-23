import { useState, useEffect } from "react";

function Countdown({ time, onFinish }) {
  const [timeout, setTimeout] = useState(time);

  useEffect(() => {
    if (timeout <= 0) {
      onFinish?.();
      clearInterval();
    }
    const interval = setInterval(() => {
      setTimeout((timeout) => timeout - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeout]);

  return <span>Time left: {timeout}</span>;
}

export default Countdown;
