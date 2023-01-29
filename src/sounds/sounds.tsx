import React, { FC, useCallback } from "react";
import useSound from "use-sound";

const BoopButton: FC<{
  handleClick: () => void;
}> = () => {
  const [playbackRate, setPlaybackRate] = React.useState(0.75);

  // Here needs to use ES6 types to import the track
  const note = require("./beep.mp3");

  const [play] = useSound(note);

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    play();
  };

  return (
    <div className="App">
      <button
        type="button"
        style={{
          margin: 20,
          borderRadius: 10,
          outline: "none",
        }}
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};

export default BoopButton;
