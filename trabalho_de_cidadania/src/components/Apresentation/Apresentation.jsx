import "./style.css"
import { useState, useEffect } from 'react';

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
    const [dataContent, setDataContent] = useState(<></>);

    const bruno = {
        apresentacao: <>
        <h1 className="data-content-title">Saudações!</h1>
        <p className="data-content-text">
            Nosso trabalho de cidadania e civismo tem como objetivo promover a conscientização e a participação ativa dos indivíduos na construção de uma sociedade mais justa e solidária. Por meio de ações e projetos que incentivam o respeito aos direitos e deveres do cidadão, buscamos contribuir para a formação de uma cultura de responsabilidade e compromisso social. Nossa iniciativa busca inspirar a transformação positiva na comunidade, fortalecendo a identidade nacional e promovendo valores como a ética, a cidadania e o respeito mútuo.
        </p>
        <p className="data-content-text">
            É bicho fei.
        </p>
        </>,
        contextualizacao: <>
        <h1 className="data-content-title">Contextualização</h1>
        <p className="data-content-text">
            Projetos e valores de cidadania são dois elementos fundamentais para a promoção de uma sociedade mais justa e equilibrada. A cidadania é um conceito amplo que abrange os direitos e deveres que um indivíduo tem em relação à sociedade e ao Estado em que vive. Já os projetos são planos de ação para alcançar determinados objetivos, que podem estar relacionados a diversas áreas da vida em sociedade.
        </p>
        <p className="data-content-text">
            Projetos e valores de cidadania estão intimamente conectados. Os projetos são uma forma concreta de aplicar os valores que uma sociedade valoriza, como a igualdade, a solidariedade, a responsabilidade social e a justiça. Ao mesmo tempo, os valores de cidadania servem de base para a concepção e a implementação de projetos que visam o bem comum.        
        </p>
        </>,
    }

    const rui = {
        exemplos: <>
        <h1 className="data-content-title">Exemplos</h1>
        <p className="data-content-text">
            Existem inúmeros exemplos de projetos de cidadania que buscam promover o bem-estar da sociedade e combater desigualdades sociais. Muitos desses projetos são realizados por voluntários, ONGs, instituições de caridade e outros grupos da sociedade civil. Neste texto, vamos explorar alguns exemplos de projetos que envolvem ações voluntárias, campanhas de arrecadação, iniciativas de combate ao preconceito e projetos de educação.
        </p>
        </>,
        acoesVoluntarias: <>
        <h1 className="data-content-title">Ações voluntárias</h1>
        <p className="data-content-text">
        As ações voluntárias são uma forma de contribuir para a sociedade sem receber remuneração. É um trabalho realizado por pessoas que dedicam parte do seu tempo para ajudar outras pessoas ou causas sociais. As ações voluntárias podem ser realizadas em diferentes áreas, como saúde, educação, meio ambiente, assistência social, entre outras.        
        </p>
        <p className="data-content-text">
        As ações voluntárias são importantes porque ajudam a promover a solidariedade e a empatia, além de proporcionar benefícios tanto para quem recebe quanto para quem realiza as atividades. Para quem recebe, as ações voluntárias representam uma oportunidade de receber ajuda e apoio em momentos difíceis. Para quem realiza as atividades, as ações voluntárias permitem desenvolver habilidades pessoais e profissionais, além de promover um senso de responsabilidade e engajamento com a sociedade.        
        </p>
        </>,
        campanhasDeArrecadacao: <>
        <h1 className="data-content-title">Campanhas de arrecadação</h1>
        <p className="data-content-text">
            As campanhas de arrecadação são outra forma importante de contribuir para a sociedade. O projeto "Criança Esperança" é um exemplo de campanha que tem como objetivo arrecadar fundos para projetos sociais voltados para crianças e adolescentes em situação de vulnerabilidade social. A iniciativa é uma parceria entre a Rede Globo e a UNESCO, e já beneficiou milhões de crianças em todo o Brasil. 
        </p>
        </>,
        combateAoPreconceito: <>
        <h1 className="data-content-title">Combate ao Preconceito</h1>
        <p className="data-content-text">
        O preconceito é um problema que afeta muitas pessoas em todo o mundo. Infelizmente, muitas vezes ele é baseado em estereótipos e ideias preconcebidas que são perpetuadas pela falta de conhecimento e pela falta de contato com pessoas diferentes. Como resultado, muitas pessoas sofrem discriminação em suas vidas cotidianas, seja por causa de sua raça, gênero, orientação sexual, religião ou outras características.        
        </p>
        </>,
        projetosEducacionais: <>
        <h1 className="data-content-title">Projetos Educacionais</h1>
        <p className="data-content-text">
            Os projetos de educação são fundamentais para formar cidadãos conscientes e críticos. O "Projeto Âncora" é um exemplo de projeto que tem como objetivo promover a educação integral de crianças e jovens em situação de vulnerabilidade social. O projeto oferece uma educação personalizada, com atividades culturais, esportivas e artísticas, além de apoio psicológico e pedagógico.        
        </p>
        </>,
    }

    useEffect(() => {
        switch (content) {
            case "Bruno":
                setData(<>
                    <button class="btn-sec" onClick={() => { setDataContent(bruno.apresentacao) }}>Apresentação</button>
                    <button class="btn-sec" onClick={() => { setDataContent(bruno.contextualizacao) }}>Contextualização</button>
                </>)
                
                break
            case "Rui":
                setData(<>
                    <button class="btn-sec" onClick={() => { setDataContent(rui.exemplos) }}>Exemplos e Projetos</button>
                    <button class="btn-sec" onClick={() => { setDataContent(rui.acoesVoluntarias) }}>Ações Voluntárias</button>
                    <button class="btn-sec" onClick={() => { setDataContent(rui.campanhasDeArrecadacao) }}>Campanhas de Arrecadação</button>
                    <button class="btn-sec" onClick={() => { setDataContent(rui.combateAoPreconceito) }}>Combate ao Preconceito</button>
                    <button class="btn-sec" onClick={() => { setDataContent(rui.projetosEducacionais) }}>Projetos Educacionais</button>
                </>)
                break
            case "Renan":
                setData(<>
                    <button class="btn-sec">Explanação</button>
                </>)
                break
            case "Willian":
                setData(<>
                    <button class="btn-sec">Participação</button>
                </>)
                break
            case "Kaue":
                setData(<>
                    <button class="btn-sec">Cidadania e Direitos</button>
                </>)
                break 
            case "Jordan":
                setData(<>
                    <button class="btn-sec">Conclusão</button>
                </>)
                break  
        }
    }, [content])
    
    return (
    <>
        <div className="menu-btn-sec">
            {data}
        </div>
        <div className="data-content">
            {dataContent}
        </div>
    </>
    )
}


