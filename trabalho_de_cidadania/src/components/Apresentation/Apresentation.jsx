import "./style.css"
import { useState, useEffect } from 'react';

export function Apresentation() {
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState("Bruno");

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, [isVisible]);

  return (
    <div className="apresentation">
        <div className="menu-interface">
            <div className="header">
                <h1>Projetos e Valores</h1>
                <div className="user">
                    
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
  )
}

function MenuButtonSec({content}) {
    const [data, setData] = useState(<></>);

    useEffect(() => {
        switch (content) {
            case "Bruno":
                setData(<>
                    <button class="btn-sec">Apresentação</button>
                    <button class="btn-sec">Contextualização</button>
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
        <div className="menu-btn-sec">
            {data}
        </div>
    )
}


