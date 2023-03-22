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
        <h1>a</h1>
        </>,
        contextualizacao: <>
        <h1 className="data-content-title">Contextualização</h1>
        <p className="data-content-text">
            Projetos e valores de cidadania são dois elementos fundamentais para a promoção de uma sociedade mais justa e equilibrada. A cidadania é um conceito amplo que abrange os direitos e deveres que um indivíduo tem em relação à sociedade e ao Estado em que vive. Já os projetos são planos de ação para alcançar determinados objetivos, que podem estar relacionados a diversas áreas da vida em sociedade.
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
                    <button class="btn-sec">Exemplos e Projetos</button>
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


