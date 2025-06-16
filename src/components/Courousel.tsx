import * as React from "react";
import { CardComponent } from "./card/CardComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Projeto {
  project: {
    imgUrl: string;
    name: string;
    descreption: string;
    url: string;
    code: string;
    view: boolean;
    videoUrl?: string;
    tags?: string[];
  };
  id: number;
}

function useIsSmallScreen() {
  const [isSmall, setIsSmall] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth < 640);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmall;
}

export function CarouselSize({ projetos }: { projetos: Projeto[] }) {
  const [hoveredId, setHoveredId] = React.useState<number | null>(null);
  const [modalVideo, setModalVideo] = React.useState<string | null>(null);
  const isSmall = useIsSmallScreen();

  return (
    <>
      <Carousel opts={{ align: "center" }} className="xs:w-[100%] lg:w-[95vw] max-w-screen-xl mx-auto overflow-visible">
        <CarouselContent className="overflow-visible">
          {projetos.map((projeto) => {
            const isHovered = hoveredId === projeto.id;
            const isOtherHovered = hoveredId !== null && hoveredId !== projeto.id;

            return (
              <CarouselItem
                key={projeto.id}
                onMouseEnter={() => setHoveredId(projeto.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  relative
                  flex
                  justify-center
                  xs:items-stretch
                  px-2
                  basis-[80vw]
                  xs:basis-1/1
                  sm:basis-[80vw]
                  md:basis-1/1
                  lg:basis-4/11
                  transition-all
                  duration-700
                  m-2
                  ${isHovered ? "lg:scale-102 z-10" : ""}
                  ${isOtherHovered ? "lg:blur-sm lg:opacity-10 lg:pointer-events-none" : ""}
                `}
              >
                <div className="p-2 w-full flex justify-center relative">
                  <CardComponent 
                    project={projeto.project}
                    isHovered={isHovered}
                    onImageClick={() => {
                      if (projeto.project.videoUrl) setModalVideo(projeto.project.videoUrl);
                    }}  
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {!isSmall && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>


      {modalVideo && (
        <div onClick={() => setModalVideo(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div onClick={e => e.stopPropagation()} className="relative bg-black rounded-lg shadow-lg p-4 max-w-xl w-full">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setModalVideo(null)}
            >
              &times;
            </button>
            <video
              src={modalVideo}
              autoPlay
              muted
              loop
              controls
              className="w-full h-80 object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
