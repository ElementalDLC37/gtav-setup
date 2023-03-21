import "./App.css"
import { useEffect, useRef, useState } from 'react';
import Conn from "./components/contection";
import LoadingWindowText from "./components/LoadingWindowText/LoadingWindowText";
import TextPreLoadingWindowText from "./components/TextPreLoadingWindowText/TextPreLoadingWindowText";
import MenuBase from "./components/MenuBase/MenuBase";


function MeuVideo() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [buttonPressioned, setButtonPressioned] = useState(false)

  function handleButtonClick() {
    audioRef.current.play();
    videoRef.current.play();
    setButtonPressioned(true)
  }

  return (
    <>
      { buttonPressioned ? <LoadingWindowText /> : <div></div> }
      { buttonPressioned ? <TextPreLoadingWindowText /> : <div></div> }
      { buttonPressioned ? <MenuBase /> : <div></div> }
      <Conn />
      <button className="buttonGenesis" onClick={handleButtonClick}>START</button>
      <audio ref={audioRef} src="./public/video.mp4" />
      <video ref={videoRef} width="640" height="360" preload="auto" muted playsInline>
        <source src="../public/video.mp4" type="video/mp4"/>
      </video>
    </>
  );
}

export default MeuVideo;