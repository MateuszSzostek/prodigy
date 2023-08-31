import React from "react";

export default function useCounter(
  startingValue: number = 0,
  options: { min: number; max: number } = { min: 0, max: 0 }
) {
  const { min, max } = options;

  if (min && startingValue < min) {
    throw new Error(
      `Your starting value of ${startingValue} is less than your min of ${min}.`
    );
  }

  if (max && startingValue > max) {
    throw new Error(
      `Your starting value of ${startingValue} is greater than your max of ${max}.`
    );
  }

  const [count, setCount] = React.useState(startingValue);

  const increment = () => {
    const nextCount = count + 1;
    if (max && nextCount > max) {
      return;
    }

    setCount(nextCount);
  };

  const decrement = () => {
    const nextCount = count - 1;
    if (min && nextCount < min) {
      return;
    }

    setCount(nextCount);
  };
  //@ts-ignore
  const set = (nextCount) => {
    if (max && nextCount > max) {
      return;
    }

    if (min && nextCount < min) {
      return;
    }

    if (nextCount === count) {
      return;
    }

    setCount(nextCount);
  };

  const reset = () => {
    if (count === startingValue) {
      return;
    }

    setCount(startingValue);
  };

  return [
    count,
    {
      increment,
      decrement,
      set,
      reset,
    },
  ];
}
