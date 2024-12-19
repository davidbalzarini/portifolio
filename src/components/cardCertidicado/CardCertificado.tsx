import './CardCertificado.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CardCertificado(){

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


    return(
        <Swiper
        modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
        pagination
        navigation
        >
            {data.map((item) => (
                <SwiperSlide key={item.id} >
                    <img
                    src={item.image}
                    className='slideItem'
                    
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )

}

export default CardCertificado