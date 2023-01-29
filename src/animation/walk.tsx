import { CSSProperties, useEffect, useRef } from "react";
import Lottie from "react-lottie";
import groovyWalkAnimation from "./groovyWalk.json";
import "./Walk.scss";

interface LottiePlayerProps {
  animationData: any;
}

export default function LottiePlayer(Props: LottiePlayerProps) {
  const { animationData } = Props;
  // const lottieRef = useRef<LottiePlayerProps>(null);

  // making a default option

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: groovyWalkAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // useEffect(() => {
  //   if (lottieRef && lottieRef.current) {
  //     lottieRef.current.setSpeed(10);
  //   }
  // });

  return (
    <div className="walk">
      <Lottie options={defaultOptions} />
    </div>
  );
}
