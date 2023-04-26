import "./style.css"
import { useState, useEffect } from 'react';


export default function TextPreLoadingWindowText(genesisButton) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 14000);

      return () => clearTimeout(timer);
  }, [genesisButton]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 6884);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    isVisible ? <LoadingWindowTextData /> : null
  )
}

function LoadingWindowTextData() {
  return (
    <div className="textPreLoadingWindowText">
      <p>Lá nas quebrada onde eu moro, mano
Tem um ponto de ônibus e um vendedor de goiaba, né
E aí um dia eu tinha um e cinquenta
E tava morrendo de fome, aí eu fiquei pensando
Caraca, véi, será que eu pego o ônibus
Ou será que compro uma goiaba, né?
Aí eu comprei uma goiaba, bicho
Foi uma goiaba suculenta, uma goiaba gigante
Eu tava morrendo de fome
E na hora que eu fui morder aquela goiaba
Aí dois maluco ali na frente me chamaram e falaram
Chegaí, chegaí, chegaí, mano, chegaí.</p>
<p>Aí eu falei qual é que que foi?
Aí o cara tascou a mão na minha goiaba, bicho
Pegou minha goiaba
Aí eu falei caralho, mano, você pegou minha goiaba
Aí o cara falou aí, já era a goiaba, aí, já era a goiaba
Aí pegou e mordeu minha goiaba
Ai eu falei ah, você mordeu minha goiaba
Aí ele falou já era, já era</p>
    </div>
  )
}