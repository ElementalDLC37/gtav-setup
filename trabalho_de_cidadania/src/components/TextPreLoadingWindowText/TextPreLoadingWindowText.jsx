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
    </div>
  )
}