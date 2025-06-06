import './Projetos.css'
import { useContext } from 'react';
import { ThemeContext } from '../../components/estaticos/ThemeToogle/Theme';
import { LanguageContext } from '../../components/Idioma/idioma';
import { languageTexts } from '../../components/Idioma/languageTexts';
import { CarouselSize } from '@/components/Courousel';

function Projetos() {
  const { isDarkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
 
    const projetos = [
      {
        id: 1,
        project: {
          imgUrl: "NaEsquina.png",
          name: languageTexts[language].projects.naesquina.title,
          view: true,
          descreption: languageTexts[language].projects.naesquina.resumo,
          url: "",
          code: "",
          videoUrl: "/naesquinaVideo.mp4",
          tags: ["ReactJS", "Shadcn", "Tailwind css", "SpringBoot", "Postgree", "TypeScript", "Java", "Kotlin"]
        }
      },
      {
        id: 2,
        project: {
          imgUrl: "maxlimp.png",
          name: languageTexts[language].projects.maxlimp.title,
          descreption: languageTexts[language].projects.maxlimp.resumo,
          view: false,
          url: "",
          code: "https://github.com/davidbalzarini/maxlimp",
          tags: ["React", "Tailwind css", "Django", "MySQL"]
        }
      },
      {
        id: 3,
        project: {
          imgUrl: "probemimg.png",
          name: languageTexts[language].projects.probem.title,
          view: true,
          descreption: languageTexts[language].projects.probem.resumo, //"This project uses ReactJS, Nest and MySQL technologies. The objective is to connect people in precarious situations who need healthcare materials, such as wheelchairs and crutches, with those who can donate these items. With ReactJS, we provide a user-friendly and responsive interface. The Nest framework allows us to create a scalable and modular backend. We use the MySQL database to securely store relevant information.",
          url: "",
          code: "https://github.com/generationsaud/probemreact.git",
          tags: ["ReactJS", "NestJs", "MySQL", "TypeScript", "Material UI"]
        }
      },

      {
        id: 4,
        project: {
          imgUrl: "growthhub.png",
          view: true,
          name: languageTexts[language].projects.growthhub.title,
          descreption: languageTexts[language].projects.growthhub.resumo,
          url: "https://growthub.netlify.app/",
          code: "https://github.com/davidbalzarini/GrowthHub",
          tags: ["ReactJs", "styled components"]
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