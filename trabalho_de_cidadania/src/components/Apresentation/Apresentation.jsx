import "./style.css"
import { useState, useEffect, useRef } from 'react';

export function Apresentation(loadingApresentation) {
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState("Bruno");
    const [horario, setHorario] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setHorario(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

  return (
    <>
    <img src="gta.jpg" className="back" />
    <div className="apresentation">
        <div className="menu-interface">
            <div className="header">
                <h1>Projetos e Valores</h1>
                <div className="user">
                    <div className="user-info">
                        <h2>Bruniiiiiinhu</h2>
                        <h2>Quinta-feira {horario}</h2>
                        <h2>$4736872736,56</h2>
                    </div>
                    <img src="./bruninho.jpeg" alt="" />
                </div>
            </div>
            <div className="menu-btn">
                <button  className={content === "Bruno" ? 'btn-clicked' : 'btn'} onClick={() => { setContent("Bruno")}}>Bruno</button>
                <button className={content === "Rui" ? 'btn-clicked' : 'btn'} onClick={() => { setContent("Rui")}}>Rui</button>
                <button className={content === "Renan" ? 'btn-clicked' : 'btn'} onClick={() => { setContent("Renan")}}>Renan</button>
                <button className={content === "Willian" ? 'btn-clicked' : 'btn'} onClick={() => { setContent("Willian")}}>Willian</button>
                <button className={content === "Kaue" ? 'btn-clicked' : 'btn'} onClick={() => { setContent("Kaue")}}>Kaue</button>
                <button className={content === "Jordan" ? 'btn-clicked' : 'btn'} onClick={() => { setContent("Jordan")}}>Jordan</button>
            </div>
            <div className="bottom-interface-content">
                <MenuButtonSec content={content} />
            </div>
        </div>
    </div>
    </>
  )
}

function MenuButtonSec({content}) {
    const [data, setData] = useState(<></>);
    const scrollRef = useRef(null);
    const [dataContent, setDataContent] = useState(<></>);
    const [scrollTop, setScrollTop] = useState(0);
    const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);


    const bruno = {
        apresentacao: <>
        <h1 className="data-content-title">Saudações!</h1>
        <p className="data-content-text">
            Nosso trabalho de cidadania e civismo tem como objetivo promover a conscientização e a participação ativa dos indivíduos na construção de uma sociedade mais justa e solidária. Por meio de ações e projetos que incentivam o respeito aos direitos e deveres do cidadão, buscamos contribuir para a formação de uma cultura de responsabilidade e compromisso social. Nossa iniciativa busca inspirar a transformação positiva na comunidade, fortalecendo a identidade nacional e promovendo valores como a ética, a cidadania e o respeito mútuo.
        </p>
        <p className="data-content-text">
            É bicho fei.
        </p>
        <h1 className="data-content-title">Contextualização</h1>
        <p className="data-content-text">
            Projetos e valores de cidadania são dois elementos fundamentais para a promoção de uma sociedade mais justa e equilibrada. A cidadania é um conceito amplo que abrange os direitos e deveres que um indivíduo tem em relação à sociedade e ao Estado em que vive. Já os projetos são planos de ação para alcançar determinados objetivos, que podem estar relacionados a diversas áreas da vida em sociedade.
        </p>
        <p className="data-content-text">
            Projetos e valores de cidadania estão intimamente conectados. Os projetos são uma forma concreta de aplicar os valores que uma sociedade valoriza, como a igualdade, a solidariedade, a responsabilidade social e a justiça. Ao mesmo tempo, os valores de cidadania servem de base para a concepção e a implementação de projetos que visam o bem comum.        
        </p>
        </>
    }

    const rui = {
        exemplos: <>
        <h1 className="data-content-title">Exemplos</h1>
        <p className="data-content-text">
            Existem inúmeros exemplos de projetos de cidadania que buscam promover o bem-estar da sociedade e combater desigualdades sociais. Muitos desses projetos são realizados por voluntários, ONGs, instituições de caridade e outros grupos da sociedade civil. Neste texto, vamos explorar alguns exemplos de projetos que envolvem ações voluntárias, campanhas de arrecadação, iniciativas de combate ao preconceito e projetos de educação.
        </p>
        <h1 className="data-content-title">Ações voluntárias</h1>
        <p className="data-content-text">
        As ações voluntárias são uma forma de contribuir para a sociedade sem receber remuneração. É um trabalho realizado por pessoas que dedicam parte do seu tempo para ajudar outras pessoas ou causas sociais. As ações voluntárias podem ser realizadas em diferentes áreas, como saúde, educação, meio ambiente, assistência social, entre outras.        
        </p>
        <p className="data-content-text">
        As ações voluntárias são importantes porque ajudam a promover a solidariedade e a empatia, além de proporcionar benefícios tanto para quem recebe quanto para quem realiza as atividades. Para quem recebe, as ações voluntárias representam uma oportunidade de receber ajuda e apoio em momentos difíceis. Para quem realiza as atividades, as ações voluntárias permitem desenvolver habilidades pessoais e profissionais, além de promover um senso de responsabilidade e engajamento com a sociedade.        
        </p>
        <h1 className="data-content-title">Campanhas de arrecadação</h1>
        <p className="data-content-text">
            As campanhas de arrecadação são outra forma importante de contribuir para a sociedade. O projeto "Criança Esperança" é um exemplo de campanha que tem como objetivo arrecadar fundos para projetos sociais voltados para crianças e adolescentes em situação de vulnerabilidade social. A iniciativa é uma parceria entre a Rede Globo e a UNESCO, e já beneficiou milhões de crianças em todo o Brasil. 
        </p>
        <h1 className="data-content-title">Combate ao Preconceito</h1>
        <p className="data-content-text">
        O preconceito é um problema que afeta muitas pessoas em todo o mundo. Infelizmente, muitas vezes ele é baseado em estereótipos e ideias preconcebidas que são perpetuadas pela falta de conhecimento e pela falta de contato com pessoas diferentes. Como resultado, muitas pessoas sofrem discriminação em suas vidas cotidianas, seja por causa de sua raça, gênero, orientação sexual, religião ou outras características.        
        </p>
        <p className="data-content-text">
        O combate ao preconceito é fundamental para a construção de uma sociedade mais justa e igualitária. Isso porque o preconceito é uma barreira que impede as pessoas de acessarem seus direitos e oportunidades de forma plena, limitando suas escolhas e possibilidades.        
        </p>
        <h1 className="data-content-title">Projetos Educacionais</h1>
        <p className="data-content-text">
        Projetos educacionais são iniciativas que buscam aprimorar a educação e o processo de ensino-aprendizagem em diferentes níveis, desde a educação infantil até o ensino superior. Esses projetos têm como objetivo principal melhorar a qualidade da educação, tornando-a mais acessível e efetiva para todos os alunos.        
        </p>
        <p className="data-content-text">
        Os projetos educacionais podem ser desenvolvidos tanto por instituições públicas quanto privadas, e abrangem diversas áreas, tais como tecnologia, meio ambiente, cultura, esporte, entre outras. Eles visam não apenas a melhoria do desempenho escolar, mas também o desenvolvimento de habilidades e competências que auxiliem na formação integral dos alunos.        
        </p>
        <p className="data-content-text">
        Um dos principais benefícios dos projetos educacionais é a possibilidade de promover a inclusão social, ao oferecer oportunidades para que alunos de diferentes contextos socioeconômicos e culturais tenham acesso a uma educação de qualidade. Esses projetos também contribuem para a formação de cidadãos críticos e conscientes de seus direitos e deveres na sociedade.        
        </p>
        </>
    }

    const renan = {
        valores: <>
        <p className="data-content-text">
        Existem muitos valores importantes que sustentam a cidadania e a vida em sociedade. Aqui estão alguns exemplos:        
        </p>
        <h1 className="data-content-title">Respeito</h1>
        <p className="data-content-text">
        Respeito é um valor fundamental que envolve tratar os outros com dignidade, consideração e cortesia. Isso inclui respeitar as diferenças de opinião, crenças, origem, cultura, etnia, gênero e orientação sexual.        
        </p>
        <h1 className="data-content-title">Responsabilidade</h1>
        <p className="data-content-text">
        A responsabilidade é outro valor importante para a cidadania e a vida em sociedade. Isso significa assumir a responsabilidade por nossas ações e decisões, e fazer o que é certo, mesmo quando ninguém está olhando.        
        </p>
        <h1 className="data-content-title">Honestidade</h1>
        <p className="data-content-text">
        A honestidade é um valor fundamental que envolve dizer a verdade, agir com integridade e ser transparente em nossas relações com os outros. Isso inclui evitar mentiras, fraudes e enganações.        
        </p>
        <h1 className="data-content-title">Justiça</h1>
        <p className="data-content-text">
        Justiça é um valor importante que envolve tratar as pessoas de forma equitativa e imparcial. Isso inclui garantir que todos tenham acesso aos mesmos direitos e oportunidades, independentemente de sua posição social, econômica ou política.        
        </p>
        <h1 className="data-content-title">Empatia</h1>
        <p className="data-content-text">
        A empatia é um valor importante que envolve se colocar no lugar dos outros e entender suas necessidades, desafios e preocupações. Isso inclui ter compaixão e agir com bondade e generosidade.        
        </p>
        <h1 className="data-content-title">Solidariedade</h1>
        <p className="data-content-text">
        A solidariedade é um valor importante que envolve trabalhar juntos em prol do bem comum e ajudar aqueles que estão em necessidade. Isso inclui colaborar para resolver problemas sociais e oferecer apoio emocional e material para aqueles que precisam.        
        </p>
        <h1 className="data-content-title">Tolerância</h1>
        <p className="data-content-text">
        A tolerância é um valor importante que envolve aceitar as diferenças culturais, religiosas, étnicas e políticas dos outros. Isso inclui evitar o preconceito e a discriminação e trabalhar para promover a inclusão e a diversidade.        
        </p>
        </>
    }

    const willian = {
        participacao: <>
        <h1 className="data-content-title">Politica e Cidadania</h1>
        <p className="data-content-text">
        A participação política é uma parte fundamental da cidadania, pois permite que os cidadãos exerçam seus direitos e responsabilidades políticas e ajudem a moldar o futuro de sua sociedade. Através da participação política, os cidadãos podem influenciar as decisões tomadas pelos governos e outras instituições políticas, bem como expressar suas opiniões e preocupações sobre questões importantes.        
        </p>
        <p className="data-content-text">
        Existem muitas maneiras pelas quais os cidadãos podem participar na política. Isso pode incluir votar em eleições, se candidatar a cargos políticos, participar de protestos ou manifestações pacíficas, entrar em contato com os representantes eleitos ou se envolver em grupos de advocacia e lobby. A participação política também pode incluir o engajamento em processos de tomada de decisão, como a consulta pública, audiências públicas e fóruns de discussão.        
        </p>
        <p className="data-content-text">
        Ao participar da política, os cidadãos podem desempenhar um papel ativo na construção de uma sociedade mais justa, igualitária e democrática. Eles podem ajudar a garantir que os direitos das minorias sejam protegidos, que a corrupção e a má gestão sejam evitadas, e que as políticas públicas sejam baseadas nas necessidades e interesses da população em geral. Além disso, a participação política pode ajudar a aumentar a transparência e a responsabilidade do governo, permitindo que os cidadãos monitorem e avaliem o desempenho de seus representantes eleitos.        
        </p>
        <p className="data-content-text">
        Em suma, a participação política é uma parte essencial da cidadania, pois permite que os cidadãos exerçam seus direitos e responsabilidades políticas, influenciem as decisões políticas e trabalhem para criar uma sociedade mais justa e democrática. A participação política é fundamental para garantir que os interesses da população sejam levados em consideração e que o governo seja responsável perante a população.        
        </p>
        </>
    }

    const kaue = {
        cidadania: <>
        <h1 className="data-content-title">Direitos</h1>
        <p className="data-content-text">
        A cidadania e os direitos humanos estão intrinsecamente relacionados, pois ambos se referem à ideia de que todos os seres humanos têm direitos fundamentais que devem ser protegidos e respeitados. A cidadania se refere ao status de ser membro de uma comunidade política, enquanto os direitos humanos são os direitos inerentes a todas as pessoas, independentemente de sua nacionalidade, etnia, gênero, religião ou outra característica pessoal.        
        </p>
        <p className="data-content-text">
        A cidadania inclui direitos políticos, como o direito de votar, se candidatar a cargos políticos e participar na tomada de decisões políticas. Os direitos humanos, por sua vez, incluem direitos civis, como o direito à liberdade de expressão, o direito à privacidade e o direito à igualdade perante a lei. Também incluem direitos sociais, como o direito à saúde, à educação, à alimentação e à moradia.        
        </p>
        <p className="data-content-text">
        A relação entre a cidadania e os direitos humanos é importante porque a cidadania exige o respeito pelos direitos humanos. Sem o respeito pelos direitos humanos, a cidadania perde seu significado e a democracia é enfraquecida. Por exemplo, se os direitos humanos não forem respeitados, os cidadãos podem ser privados de sua liberdade, sofrendo abuso e violência. Eles também podem ser impedidos de participar ativamente na política, o que afeta a capacidade de construir e manter uma sociedade justa e democrática.        
        </p>
        <p className="data-content-text">
        Além disso, a cidadania e os direitos humanos estão interligados no sentido de que a luta por um conjunto mais amplo de direitos humanos muitas vezes envolve a participação ativa dos cidadãos na política. Por exemplo, a luta por direitos iguais para todos os cidadãos, independentemente de sua raça ou gênero, muitas vezes requer a mobilização dos cidadãos para pressionar os governos e outras instituições políticas a tomarem medidas concretas.        
        </p>
        </>
    }

    const jordan = {
        conclusao: <>
        <h1 className="data-content-title">Follow the train, CJ!</h1>
        <p className="data-content-text">
        A cidadania é um elemento-chave na construção de uma sociedade mais justa, democrática e solidária. Quando os indivíduos estão conscientes de seus direitos e deveres como cidadãos, eles podem desempenhar um papel mais ativo na sociedade, ajudando a promover a justiça social e a solidariedade entre as pessoas. Algumas das razões pelas quais a cidadania é importante incluem:        
        </p>
        <h1 className="data-content-title">Responsabilidade</h1>
        <p className="data-content-text">
        A cidadania exige que as pessoas assumam a responsabilidade de agir de maneira justa e ética, levando em consideração o bem-estar de toda a sociedade.        
        </p>
        <h1 className="data-content-title">Participação</h1>
        <p className="data-content-text">
        A cidadania envolve a participação ativa na vida pública e política, permitindo que as pessoas expressem suas opiniões e influenciem as decisões que afetam suas vidas.        
        </p>
        <h1 className="data-content-title">Consciência</h1>
        <p className="data-content-text">
        A cidadania envolve a conscientização dos problemas sociais e a busca por soluções para esses problemas, ajudando a construir uma sociedade mais justa e solidária.        
        </p>
        </>
    }

    



    useEffect(() => {
        switch (content) {
            case "Bruno":
                setData(<>
                    <button class="btn-sec" onClick={() => { setDataContent(bruno.apresentacao) }}>Apresentação</button>
                </>)
                
                break
            case "Rui":
                setData(<>
                    <button class="btn-sec" onClick={() => { setDataContent(rui.exemplos) }}>Exemplos e Projetos</button>
                </>)
                break
            case "Renan":
                setData(<>
                    <button class="btn-sec" onClick={() => { setDataContent(renan.valores) }}>Explanação</button>
                </>)
                break
            case "Willian":
                setData(<>
                    <button class="btn-sec" onClick={() => { setDataContent(willian.participacao) }}>Participação</button>
                </>)
                break
            case "Kaue":
                setData(<>
                    <button class="btn-sec" onClick={() => { setDataContent(kaue.cidadania) }}>Cidadania e Direitos</button>
                </>)
                break 
            case "Jordan":
                setData(<>
                    <button class="btn-sec" onClick={() => { setDataContent(jordan.conclusao) }}>Conclusão</button>
                </>)
                break  
        }
    }, [content])

    useEffect(() => {
        const scrollableElement = document.querySelector('.scroll-content');
        let intervalId = null;
    
        if (autoScrollEnabled) {
          intervalId = setInterval(() => {
            setScrollTop(prevScrollTop => {
              const { scrollHeight, clientHeight } = scrollableElement;
              const newScrollTop = prevScrollTop + 0.2;
              if (newScrollTop + clientHeight >= scrollHeight) {
                return 0;
              } else {
                return newScrollTop;
              }
            });
          }, 20);
        }
    
        return () => clearInterval(intervalId);
      }, [autoScrollEnabled]);
    
      useEffect(() => {
        const scrollableElement = document.querySelector('.scroll-content');
        if (scrollableElement) {
          scrollableElement.scrollTop = scrollTop;
        }
      }, [scrollTop]);
    
      const handleToggleAutoScroll = () => {
        setAutoScrollEnabled(prevAutoScrollEnabled => !prevAutoScrollEnabled);
      };
    
    return (
    <>
    <div className="no-button">
        <div className="menu-btn-sec">
            {data}
        </div>
        <div className="data-content">
            <div className="scroll-content" ref={scrollRef} style={{ overflowY: 'scroll'}}>
            {dataContent}
            </div>
        </div>
    </div>
        <button onClick={handleToggleAutoScroll} className="btn-sec scroll-change">
        {autoScrollEnabled ? 'Desativar Scroll Automático' : 'Ativar Scroll Automático'}
        </button>
    </>
    )
}


