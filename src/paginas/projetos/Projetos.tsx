import './Projetos.css'
import { useContext } from 'react';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import { LanguageContext } from '../../components/Idioma/idioma';
import { languageTexts } from '../../components/Idioma/languageTexts';
import { CarouselSize } from '@/components/Courousel';

function Projetos() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
 
  let projetos = [];

  language === "pt"
    ? projetos = [
      
      {
        id: 1,
        project: {
          imgUrl: "NaEsquina.png",
          name: languageTexts.pt.projects.project1.title,
          descreption: languageTexts.pt.projects.project1.resumo,
          view: true,
          url: "",
          code: "",
          videoUrl: "/naesquinaVideo.mp4",
          tags: ["ReactJS", "SpringBoot", "Postgree", "TypeScript", "Java", "Kotlin"]
        }
      },
      {
        id: 2,
        project: {
          imgUrl: "probemimg.png",
          name: "Probem",
          descreption: "Esse projeto utiliza as tecnologias ReactJS, Nest e MySQL. O objetivo é conectar pessoas em situações precárias que precisam de materiais de saúde, como cadeiras de rodas e muletas, com aqueles que podem doar esses itens. Com o ReactJS, oferecemos uma interface amigável e responsiva. O framework Nest nos permite criar um backend escalável e modular. Utilizamos o banco de dados MySQL para armazenar com segurança as informações relevantes.",
          view: true,
          url: "https://probemreact.vercel.app/",
          code: "https://github.com/generationsaud/probemreact.git",
        }
      },
      {
        id: 3,
        project: {
          imgUrl: "maxlimp.png",
          name: "Maxlimp",
          view: false,
          descreption: " “Maxlimp” é um ecommerce de produtos de limpeza completo, que permite o cliente iniciar o pedido pela aplicação e finalizar o pedido pelo whatsapp, já o Administrador ele pode acompanhar todo o processo de pedidos, vendas e tickets médios em um dashboard visivel apenas para o Adm, além disso pode alterar o status de pedidos, adicionar, atualizar e remover pedidos também. Tecnicamente é um projeto fullstack, no back temos uma api feita em Django com o CRUD completo e utilização token JWT para autenticação do usuario. Já o front é feito em React, escolhido por causa da sua abordagem baseada em componentes. Para estilização foi utilizado a biblioteca tailwindcss e alguns componentes da biblioteca material ui para facilitar a responsividade",
          url: "https://blogpessoal-front-kappa.vercel.app/",
          code: "https://github.com/GioLimat/MAXLIMP/tree/main"
        }
      },
      {
        id: 4,
        project: {
          imgUrl: "growthhub.png",
          view: true,
          name: languageTexts.pt.projects.project5.title,
          descreption: languageTexts.pt.projects.project5.resumo,
          url: "https://growthub.netlify.app/",
          code: "https://github.com/davidbalzarini/GrowthHub"
        }
      },
    ]
    : projetos = [
      {
        id: 1,
        project: {
          imgUrl: "NaEsquina.png",
          name: languageTexts.en.projects.project1.title,
          view: true,
          descreption: languageTexts.en.projects.project1.resumo,
          url: "",
          code: "",
          videoUrl: "/naesquinaVideo.mp4",
          tags: ["ReactJS", "SpringBoot", "Postgree", "TypeScript", "Java", "Kotlin"]
        }
      },
      {
        id: 2,
        project: {
          imgUrl: "probemimg.png",
          name: "Probem",
          view: true,
          descreption: "This project uses ReactJS, Nest and MySQL technologies. The objective is to connect people in precarious situations who need healthcare materials, such as wheelchairs and crutches, with those who can donate these items. With ReactJS, we provide a user-friendly and responsive interface. The Nest framework allows us to create a scalable and modular backend. We use the MySQL database to securely store relevant information.",
          url: "https://probemreact.vercel.app/",
          code: "https://github.com/generationsaud/probemreact.git"
        }
      },
      {
        id: 3,
        project: {
          imgUrl: "maxlimp.png",
          name: languageTexts.en.projects.project3.title,
          descreption: languageTexts.en.projects.project3.resumo,
          view: false,
          url: "https://blogpessoal-front-kappa.vercel.app/",
          code: "https://github.com/GioLimat/MAXLIMP/tree/main"
        }
      },
      {
        id: 4,
        project: {
          imgUrl: "growthhub.png",
          view: true,
          name: languageTexts.en.projects.project5.title,
          descreption: languageTexts.en.projects.project5.resumo,
          url: "https://growthub.netlify.app/",
          code: "https://github.com/davidbalzarini/GrowthHub"
        }
      },
      // {
      //   id: 5,
      //   project: {
      //     imgUrl: "growthhub.png",
      //     view: true,
      //     name: languageTexts.en.projects.project4.title,
      //     descreption: languageTexts.en.projects.project4.resumo,
      //     url: "https://growthub.netlify.app/",
      //     code: "https://github.com/davidbalzarini/GrowthHub"
      //   }
      // },
    ];

  return (
    <div className={`${isDarkMode ? 'escuro' : 'claro'} w-full flex flex-col items-center px-2 sm:px-4 py-6`}>
      <h2 className="text-2xl md:text-4xl font-bold my-6 text-center break-words w-full max-w-3xl">
        {languageTexts[language].projects.titulo}
        <span className="ponto">:</span>
      </h2>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <CarouselSize projetos={projetos} />
        </div>
      </div>
    </div>
  );
}

export default Projetos;