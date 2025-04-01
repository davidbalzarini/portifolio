import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const CardCertificado = () => {
    const data = [
        {id: 1, image: "certificadogeneration.png"},
        {id: 2, image: "python backend.png"},
        {id: 3, image: "Ciencia de dados santander.png"},
        {id: 4, image: "Java avançado radix.png"},
        {id: 5, image: "React Native radix.png"},
        {id: 6, image: "fundamentos machine learning.png"},
        {id: 7, image: "versionamentodecodigo.png"},
        {id: 8, image: "angular-Radix.png"},
        {id: 9, image: "react-Radix.png"},
        {id: 10, image: "devOps-Radix.png"},
    ]
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20} 
      slidesPerView={1} 
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false,
      }}
      loop={true} 
      pagination={{ clickable: true }} 
      navigation
      style={{ width: '80vw', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignContent: 'center' }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <img
            src={item.image}
            alt=''
            className="slideItem"
            style={{
              width: '80vw', 
              height: 'auto', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardCertificado;











