import "./App.css"
import { useEffect, useRef } from 'react';

function MeuVideo() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  function handleButtonClick() {
    audioRef.current.play();
    videoRef.current.play();
  }

  return (
    <>
    <button onClick={handleButtonClick}>START</button>
    <audio ref={audioRef} src="../public/video.mp4" />
    <video ref={videoRef} width="640" height="360" preload="auto" muted playsInline>
      <source src="../public/video.mp4" type="video/mp4"/>
    </video>
    </>
  );
}

export default MeuVideo;