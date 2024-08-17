import { Button } from "antd";
import React, { useEffect, useState } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(60);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowButton(true);
      return;
    }

    const countDown = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(countDown);
  }, [timeLeft]);

  const resetTime = () => {
    setTimeLeft(60);
    setShowButton(false);
  };

  return (
    <div>
      <h1>
        {timeLeft > 0 ? (
          `${timeLeft}`
        ) : (
          showButton && (
            <Button danger onClick={resetTime}>
              Reset Time
            </Button>
          )
        )}
      </h1>
    </div>
  );
};

export default CountdownTimer;
