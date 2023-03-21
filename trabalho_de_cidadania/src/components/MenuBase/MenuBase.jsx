import "./style.css"
import { useState, useEffect } from 'react';


export default function MenuBase(genesisButton) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 31000);

      return () => clearTimeout(timer);
  }, [genesisButton]);

  return (
    isVisible ? <LoadingWindowTextData /> : null
  )
}

function LoadingWindowTextData() {
  return (
    <div className="menuBase">
        <img className="logo" src="https://i.ibb.co/X7g0P4r/20230321-164850.png" alt="" />
        <div className="menu">
            <button>Apresentação</button>
            <button>Agradecimentos</button>
            <button>Bônus</button>
        </div>
    </div>
  )
}