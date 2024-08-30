import './CardCertificado.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CardCertificado(){

    const data = [
        {id: 1, image: "certificadogeneration.png"},
        {id: 2, image: "versionamentodecodigo.png"},
        {id: 3, image: "contribuiçãoprojeto.png"},
        {id: 4, image: "angular-Radix.png"},
        {id: 5, image: "react-Radix.png"},
        {id: 6, image: "devOps-Radix.png"},
        {id: 7, image: "python.png"},
    ]


    return(
        <Swiper
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