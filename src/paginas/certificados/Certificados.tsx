import CardCertificado from '../../components/cardCertidicado/CardCertificado';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import './Certificados.css'
import { useState, useContext } from 'react';


export function Certificados(){

    const [displayText, setDisplayText] = useState('*passe o mouse por cima de alguma habilidade*');
    const { isDarkMode } = useContext(ThemeContext);

    const handleMouseOverJs = () => {
        setDisplayText('JavaScript é uma linguagem de programação de alto nível amplamente utilizada para criar interatividade e dinamismo em páginas web. É executada nos navegadores dos usuários e permite a criação de aplicações front-end e back-end.');
    };

    const handleMouseOverTs = () => {
        setDisplayText('O typeScript é uma linguagem de programação que adiciona recursos de tipagem estática ao JavaScript. Ela oferece um desenvolvimento mais seguro e produtivo, permitindo a detecção de erros de código em tempo de compilação. O TypeScript é compilado para JavaScript e é amplamente usado em projetos complexos.')
    }

    const handleMouseOverNode = () => {
        setDisplayText('Node é um ambiente de tempo de execução JavaScript que permite a execução de código JavaScript no lado do servidor. Ele é construído com o mecanismo V8 do Google Chrome e fornece um ambiente de desenvolvimento escalável e eficiente para a criação de aplicativos web e APIs.')
    }

    const handleMouseOverReact = () => {
        setDisplayText('React é uma biblioteca JavaScript popular para a criação de interfaces de usuário (UI). O React.js permite a construção de componentes reutilizáveis e oferece uma abordagem declarativa para a criação de interfaces interativas e responsivas. É amplamente utilizado para criar aplicativos web de página única (Single-Page Applications).')
    }

    const handleMouseOverNest = () => {
        setDisplayText('Nest é um framework para Node.js que fornece uma estrutura modular e escalável para a construção de aplicativos back-end robustos. Ele utiliza a arquitetura de injeção de dependência e o padrão de design orientado a objetos para facilitar o desenvolvimento e a manutenção de aplicativos.')
    }

    const handleMouseOverHTML = () => {
        setDisplayText('HTML é a linguagem de marcação padrão para a criação de páginas web. Ela define a estrutura e o conteúdo da página, permitindo a marcação de elementos como títulos, parágrafos, imagens, links e muito mais. O HTML é interpretado pelos navegadores para renderizar o conteúdo web.')
    }

    const handleMouseOverCSS = () => {
        setDisplayText('CSS é uma linguagem de estilo utilizada para definir a aparência e o layout dos elementos em uma página web. Ela permite a definição de estilos como cores, fontes, tamanhos, posicionamento e animações, tornando possível personalizar a aparência dos elementos HTML.')
    }

    const handleMouseOverReactNative = () => {
        setDisplayText('React Native é um framework para o desenvolvimento de aplicativos móveis multiplataforma usando JavaScript e React. Ele permite criar aplicativos nativos para iOS e Android com uma única base de código, aproveitando os componentes reutilizáveis do React.js.')
    }

    const handleMouseOut = () => {
        setDisplayText('*passe o mouse por cima de alguma habilidade*');
    };


    


    return(
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div id='certificados'>
                <h1>Certificados<span className='ponto'>:</span></h1>
            </div>
            <div>
                <CardCertificado/>
            </div>
        </div>
    )
}
