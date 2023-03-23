import "./style.css"
import { useState, useEffect } from 'react';


export default function LoadingWindowText() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 21000);

      return () => clearTimeout(timer);
  }, []);
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
      <p>Olha, se você não me ama
Então não me ligue
Não fique me fazendo queixa

Não faça como as outras já tem feito
Que minha vida é sofrendo
Por causa de uma mulher bandida
Já teve noite de eu querer beber veneno Olha, se você não me ama
Então não me ligue
Não fique me fazendo queixa

Não faça como as outras já tem feito
Que minha vida é sofrendo
Por causa de uma mulher bandida
Já teve noite de eu querer beber veneno Olha, se você não me ama
Então não me ligue
Não fique me fazendo queixa

Não faça como as outras já tem feito
Que minha vida é sofrendo
Por causa de uma mulher bandida
Já teve noite de eu querer beber veneno</p>
<p>José de Alencar (1829-1877) foi um escritor brasileiro do período romântico, considerado um dos maiores nomes da literatura brasileira. Nascido em Mecejana, no Ceará, Alencar mudou-se para o Rio de Janeiro para estudar Direito e começou a carreira literária escrevendo para o jornal Correio Mercantil.</p>
      <div class="loading-icon"></div>
    </div>
  )
}