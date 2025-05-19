import { useNavigate } from "react-router-dom";

export const Footer =()=> {
        const navigate = useNavigate();
    
    return (
        
        <footer className="flex min-h-70 mt-40 bg-[rgb(43,64,143)]" id="contacts">

        <div className='flex mx-auto w-2/3  mt-20 justify-center gap-20 font-bold text-white' style={{ fontFamily: 'Akrobat' }}>
            <>
            <button
                onClick={() => navigate ("/")}>
                    <img src="logo2.svg" alt="LoGO" className="h-10"/>
            </button>
            <div className="flex flex-col w-60"> 
                <h1 className="text-2xl">контакты</h1>
                <p> 8(812)570-59-89</p>
                <a className="underline" href="https://vk.com/herzenbookshop"
                target="_blank" // открывает ссылку в новой вкладке
                rel="noopener noreferrer" //безопасности для ссылок 
                   > vk.com/herzenbookshop
                </a>                <a className="underline" href="https://herzen.spb.ru/news-events/news/?ELEMENT_ID=36186"
                target="_blank"
                rel="noopener noreferrer" 
                   >herzen.spb
                </a>
            </div>

            <div className="flex flex-col w-60"> 
                <h1 className="font-bold text-2xl">адрес</h1>
                <p> Казанская улица, 1/25, Санкт-Петербург</p>

                <a className="underline" href="https://yandex.ru/maps/org/herzenknigi/241933995431/?ll=30.323464%2C59.934904&z=14.15"
                target="_blank"
                rel="noopener noreferrer" 
                   > яндекс карты
                </a>
                <a className="underline" href ="https://2gis.ru/spb/firm/70000001037379169?m=30.308498%2C59.934248%2F16"
                target="_blank"
                rel="noopener noreferrer" 
                   > 2гис
                </a>
            </div>

            <div className="flex flex-col w-60"> 
                <h1 className=" text-2xl" >график</h1>
                <p>Ежедневно с 10 до 21:00</p>
               
            </div>
            </>
            </div>

        </footer>
        
    );
};
