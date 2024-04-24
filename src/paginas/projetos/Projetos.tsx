

import './Projetos.css'
import { Cardd } from '../../components/card/Cardd';
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
                url:"https://probemreact.vercel.app/",
                code:"https://github.com/generationsaud/probemreact.git"
            }
        },
        {
            id: 2,
            project:{
                imgUrl: "blogpessoal.png",
                name: "BlogPessoal",
                descreption: " “blog pessoal” é um projeto que eu criei para treinar minhass habilidades em frontend e backend. Para o frontend, usei Reactjs e para o backend, usei Nestjs. Além disso, eu usei SQL para o banco de dados. O site permite que os usuários façam postagens, editem postagens, excluam postagens, criem usuários, façam login e delete logins também.",
                url:"https://blogpessoal-front-kappa.vercel.app/",
                code:"https://github.com/davidbalzarinipereira/Blogpessoal-front.git"
            }
        },
        {
            id: 3,
            project:{
                imgUrl: "ignite.png",
                name: "Projeto Ignite",
                descreption: "no projeto ignite aprendi a utilizar melhor Vitejs que é mais rapido mais flexivel que o Create-React-App, tambem aprendi a usar css modules e entendi melhor a iteração, a aplicação é uma espécie de feed com comentários",
                url:"https://main--meek-macaron-b8ba13.netlify.app/",
                code:"https://github.com/davidbalzarini/ignite"
            }
        },
    ] : projetos = [
        {
            id: 1,
            project:{
                imgUrl: "probemimg.png",
                name: "Probem",
                descreption: "This project uses ReactJS, Nest and MySQL technologies. The objective is to connect people in precarious situations who need healthcare materials, such as wheelchairs and crutches, with those who can donate these items. With ReactJS, we provide a user-friendly and responsive interface. The Nest framework allows us to create a scalable and modular backend. We use the MySQL database to securely store relevant information.",
                url:"https://probemreact.vercel.app/",
                code:"https://github.com/generationsaud/probemreact.git"
            }
        },
        {
            id: 2,
            project:{
                imgUrl: "blogpessoal.png",
                name: languageTexts.en.projects.project2.title,
                descreption: languageTexts.en.projects.project2.resumo,
                url:"https://blogpessoal-front-kappa.vercel.app/",
                code:"https://github.com/davidbalzarinipereira/Blogpessoal-front.git"
            }
        },
        {
            id: 3,
            project:{
                imgUrl: "ignite.png",
                name: languageTexts.en.projects.project3.title,
                descreption: languageTexts.en.projects.project3.resumo,
                url:"https://main--meek-macaron-b8ba13.netlify.app/",
                code:"https://github.com/davidbalzarini/ignite"
            }
        },
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
                            <Cardd
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