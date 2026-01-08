import { useEffect, useState } from "react";

const Counter = ({ target, startFrom = 0.8 }) => {
  const end = parseInt(target.replace("+", "").replace("%", ""));

  // 👇 Speed logic
  const duration =
    end <= 30 ? 0.8 :      // very fast
    end <= 100 ? 1.2 :     // fast
    2;                     // normal (500+)

  const startValue = Math.floor(end * startFrom);
  const [count, setCount] = useState(startValue);

  useEffect(() => {
    let current = startValue;
    const totalFrames = duration * 60;
    const increment = (end - startValue) / totalFrames;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, startValue]);

  return (
    <span>
      {count}
      {target.includes("+") && "+"}
      {target.includes("%") && "%"}
    </span>
  );
};

export default Counter;
