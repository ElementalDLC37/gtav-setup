import "./style.css"
import { useState, useEffect, useRef } from 'react';

export function Apresentation(loadingApresentation) {
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState("Bruno");
    const [horario, setHorario] = useState(new Date().toLocaleTimeString());
    const [items, setItems] = useState({
        user: "Bruninho",
        img: "./bruninho.jpeg",
        money: "$4736872736,56"
    });


    useEffect(() => {
        switch (content) {
            case "Bruno":
                setItems({
                    user: "brunao cabra safadokkkkk",
                    img: "./bruninho.jpeg",
                    money: "$47368727927483745835834823648242336,56"
                })
                break;
            case "Rui":
                setItems({
                    user: "Rui Barbosa",
                    img: "data:image/jpeg;base64,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",
                    money: "$0,50"
                })
                break;
            case "Renan":
                setItems({
                    user: "renanzao",
                    img: "https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg",
                    money: "$643483,00"
                })
                break;
            case "Willian":
                setItems({
                    user: "uiliam",
                    img: "https://media.tenor.com/bxETY3uE8qAAAAAd/floppa.gif",
                    money: "$50000,30"
                })
                break;
            case "Kaue":
            setItems({
                user: "Kim Jong-Un",
                img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kim_Jong-un_April_2019_%28cropped%29.jpg",
                money: "$50457475675675675675675675675675675675000,30"
            })
            break;
            case "Jordan":
            setItems({
                user: "Jordania",
                img: "https://res.cloudinary.com/teepublic/image/private/s--Q3I4HI1v--/c_crop,x_10,y_10/c_fit,w_800/c_crop,g_north_west,h_920,w_920,x_-60,y_-85/co_rgb:ffffff,e_colorize,u_Misc:One%20Pixel%20Gray/c_scale,g_north_west,h_920,w_920/fl_layer_apply,g_north_west,x_-60,y_-85/r_460/co_ffffff,e_outline:41/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1640381998/production/designs/26605457_0.jpg",
                money: "$5675675000,30"
            })
            break;
        }
    }, [content])

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
                        <h2>{items.user}</h2>
                        <h2>Quinta-feira {horario}</h2>
                        <h2>{items.money}</h2>
                    </div>
                    <img src={items.img} alt="" />
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


