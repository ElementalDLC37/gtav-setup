import "./App.css"
import { Component, useEffect, useRef, useState } from 'react';
import LoadingWindowText from "./components/LoadingWindowText/LoadingWindowText";
import TextPreLoadingWindowText from "./components/TextPreLoadingWindowText/TextPreLoadingWindowText";
import MenuBase from "./components/MenuBase/MenuBase";
import { Apresentation } from "./components/Apresentation/Apresentation";

function TimeLine({audioRef}) {
  const [loadingApresentation, setLoadingApresentation] = useState(false)
  const [isVisiblee, setIsVisiblee] = useState(false);

  useEffect(() => {
    if(loadingApresentation === true) {
      const timer = setTimeout(() => {
        setIsVisiblee(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loadingApresentation]);

  return (
    <>
    <LoadingWindowText />
    <TextPreLoadingWindowText /> 
    <MenuBase audioRef={audioRef} setLoadingApresentation={setLoadingApresentation} loadingApresentation={loadingApresentation} />
    {isVisiblee ? <Apresentation loadingApresentation={loadingApresentation} /> : <></>}
    </>
  )
}

function Media({ videoRef, audioRef }) {
  return (
    <>
      <audio ref={audioRef} src="./video.mp3" />
      <video ref={videoRef} width="640" height="360" preload="auto" muted playsInline>
        <source src="./video.mp4" type="video/mp4"/>
      </video>
    </>
  )
}

function App() {
  
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [buttonPressioned, setButtonPressioned] = useState(false)

  function handleButtonClick() {
    audioRef.current.play();
    videoRef.current.play();
    setButtonPressioned(true)
    setTimeout(() => {
      videoRef.current.pause();
    }, 15500);
  }

  return (
    <>
      {buttonPressioned ? <TimeLine audioRef={audioRef} /> : <button className="buttonGenesis" onClick={handleButtonClick}>START</button>}
      <Media audioRef={audioRef} videoRef={videoRef}/>
    </>
  );
}



export default App;