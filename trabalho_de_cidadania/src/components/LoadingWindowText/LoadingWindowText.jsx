import "./style.css"
import { useState, useEffect } from 'react';


export default function LoadingWindowText(genesisButton) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 21000);

      return () => clearTimeout(timer);
  }, [genesisButton]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    isVisible ? <LoadingWindowTextData /> : null
  )
}

function LoadingWindowTextData() {
  return (
    <div className="loadingWindowText">
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
      <div class="loading-icon"></div>
    </div>
  )
}