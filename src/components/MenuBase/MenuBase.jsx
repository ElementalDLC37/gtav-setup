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
    {isVisible ? <><ImageTransition /><LoadingWindowTextData setIsVisible={setIsVisible} audioRef={audioRef} setLoadingApresentation={setLoadingApresentation} loadingApresentation={loadingApresentation} /></> : null}
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
    'https://pbs.twimg.com/media/Eq-JOiUW8AAKaVc?format=jpg&name=small',
    'https://media.tenor.com/HDXIhTFsQDEAAAAC/kayne-west-selfie.gif',
    './cabra.jpeg',
    'http://pm1.narvii.com/6597/00b2eaf97ee9394ac647152383a5aa9be03451c8_00.jpg'
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

