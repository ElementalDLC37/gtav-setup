import "./style.css"
import { useState, useEffect, useContext } from 'react';
import { useSpring, animated } from 'react-spring';

export default function MenuBase({audioRef, setLoadingApresentation, loadingApresentation}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 31000);

      return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {isVisible ? <><LoadingWindowTextData setIsVisible={setIsVisible} audioRef={audioRef} setLoadingApresentation={setLoadingApresentation} loadingApresentation={loadingApresentation} /><ImageTransition /></> : null}
    </>
  )
}

function LoadingWindowTextData({setIsVisible, audioRef, setLoadingApresentation, loadingApresentation}) {

  useEffect(() => {
    if(loadingApresentation) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        audioRef.current.pause()
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loadingApresentation])

  return (
    <div className="menuBase">
        <img className="logo" src="https://i.ibb.co/X7g0P4r/20230321-164850.png" />
        <div className="menu"> 
        {
          loadingApresentation === false ? <><button onClick={() => { setLoadingApresentation(true) }}>Apresentação</button>
          <button>Agradecimentos</button>
          <button>Bônus</button></> : <><button>Carregando</button><div class="loading-icon"></div></>
        }
        </div>
    </div>
  )
}

function ImageTransition()  {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://picsum.photos/200/300?random=1',
    'https://picsum.photos/200/300?random=2',
    'https://picsum.photos/200/300?random=3',
    'https://picsum.photos/200/300?random=4',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [currentImage, images]);

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000, loop: true },
    onRest: () => setCurrentImage((currentImage + 1) % images.length),
  });

  return (
    <animated.img style={props} src={images[currentImage]} alt="Imagem" className="imageAnimation" />
  );
}

