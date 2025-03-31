

import './Projetos.css'
import { CardComponent } from '../../components/card/CardComponent';
import { useContext } from 'react';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import { LanguageContext, languageTexts } from '../../components/Idioma/idioma';




    // {
    //     id: 4,
    //     project:{
    //         imgUrl: "https://pbs.twimg.com/profile_images/1436750352129331206/5qGptDj-_400x400.jpg",
    //         name: "David Balzarini",
    //         descreption: "Web Developer"
    //     }
    // },
    
  
function Projetos(){

    const { isDarkMode } = useContext(ThemeContext);
    const {language} = useContext(LanguageContext);

    let projetos = []


    language === "pt" ?
    projetos = [
        {
            id: 1,
            project:{
                imgUrl: "probemimg.png",
                name: "Probem",
                descreption: "Esse projeto utiliza as tecnologias ReactJS, Nest e MySQL. O objetivo é conectar pessoas em situações precárias que precisam de materiais de saúde, como cadeiras de rodas e muletas, com aqueles que podem doar esses itens. Com o ReactJS, oferecemos uma interface amigável e responsiva. O framework Nest nos permite criar um backend escalável e modular. Utilizamos o banco de dados MySQL para armazenar com segurança as informações relevantes.",
                view: true,
                url:"https://probemreact.vercel.app/",
                code:"https://github.com/generationsaud/probemreact.git"
            }
        },
        {
            id: 2,
            project:{
                imgUrl: "maxlimp.png",
                name: "Maxlimp",
                view: false,
                descreption: " “Maxlimp” é um ecommerce de produtos de limpeza completo, que permite o cliente iniciar o pedido pela aplicação e finalizar o pedido pelo whatsapp, já o Administrador ele pode acompanhar todo o processo de pedidos, vendas e tickets médios em um dashboard visivel apenas para o Adm, além disso pode alterar o status de pedidos, adicionar, atualizar e remover pedidos também. Tecnicamente é um projeto fullstack, no back temos uma api feita em Django com o CRUD completo e utilização token JWT para autenticação do usuario. Já o front é feito em React, escolhido por causa da sua abordagem baseada em componentes. Para estilização foi utilizado a biblioteca tailwindcss e alguns componentes da biblioteca material ui para facilitar a responsividade",
                url:"https://blogpessoal-front-kappa.vercel.app/",
                code:"https://github.com/GioLimat/MAXLIMP/tree/main"
            }
        },
        {
            id: 3,
            project:{
                imgUrl: "growthhub.png",
                view: true,
                name: languageTexts.pt.projects.project4.title,
                descreption: languageTexts.pt.projects.project4.resumo,
                url:"https://growthub.netlify.app/",
                code:"https://github.com/davidbalzarini/GrowthHub"
            }
        },
        // {
        //     id: 4,
        //     project:{
        //         imgUrl: "ignite.png",
        //         name: "Projeto Ignite",
        //         descreption: "no projeto ignite aprendi a utilizar melhor Vitejs que é mais rapido mais flexivel que o Create-React-App, tambem aprendi a usar css modules e entendi melhor a iteração, a aplicação é uma espécie de feed com comentários",
        //         url:"https://main--meek-macaron-b8ba13.netlify.app/",
        //         code:"https://github.com/davidbalzarini/ignite"
        //     }
        // },
        
    ] : projetos = [
        {
            id: 1,
            project:{
                imgUrl: "probemimg.png",
                name: "Probem",
                view: true,
                descreption: "This project uses ReactJS, Nest and MySQL technologies. The objective is to connect people in precarious situations who need healthcare materials, such as wheelchairs and crutches, with those who can donate these items. With ReactJS, we provide a user-friendly and responsive interface. The Nest framework allows us to create a scalable and modular backend. We use the MySQL database to securely store relevant information.",
                url:"https://probemreact.vercel.app/",
                code:"https://github.com/generationsaud/probemreact.git"
            }
        },
        {
            id: 2,
            project:{
                imgUrl: "maxlimp.png",
                name: languageTexts.en.projects.project2.title,
                descreption: languageTexts.en.projects.project2.resumo,
                view: false,
                url:"https://blogpessoal-front-kappa.vercel.app/",
                code:"https://github.com/GioLimat/MAXLIMP/tree/main"
            }
        },
        {
            id: 3,
            project:{
                imgUrl: "growthhub.png",
                view: true,
                name: languageTexts.en.projects.project4.title,
                descreption: languageTexts.en.projects.project4.resumo,
                url:"https://growthub.netlify.app/",
                code:"https://github.com/davidbalzarini/GrowthHub"
            }
        },
        // {
        //     id: 4,
        //     project:{
        //         imgUrl: "ignite.png",
        //         name: languageTexts.en.projects.project3.title,
        //         descreption: languageTexts.en.projects.project3.resumo,
        //         url:"https://main--meek-macaron-b8ba13.netlify.app/",
        //         code:"https://github.com/davidbalzarini/ignite"
        //     }
        // },
        
    ]



    return (
        <div className={isDarkMode ? 'escuro' : 'claro'}>
            <div id='projetos' className="aa">
                <div>
                    <h1 className='hidden'><span className='ponto'>:</span></h1>
                    <h1>{language == "pt" ? languageTexts.pt.projects.titulo : languageTexts.en.projects.titulo}<span className='ponto'>:</span></h1>
                </div>
                <div className='containergrid'>
                    {projetos.map(projeto => {
                        return(
                            <CardComponent
                            project={projeto.project}
                            />
                        )
                    })}
                    
                    
                </div>
                
            </div>
        </div>
    )
}
export default Projetos;