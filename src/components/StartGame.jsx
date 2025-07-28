import { useState } from "react";
import FormEnabled from "./FormEnabled";
import FormDisabled from "./FormDisabled";

export default function StartGame({ setGameStarted, setImageURL }) {
  const [isFetching, setIsFetching] = useState(false);
  const [option, setOption] = useState("image-1");

  if (isFetching) {
    return <FormDisabled option={option} />;
  }
  return (
    <FormEnabled
      setIsFetching={setIsFetching}
      setGameStarted={setGameStarted}
      setImageURL={setImageURL}
      option={option}
      setOption={setOption}
    />
  );
}
