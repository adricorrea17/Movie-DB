import { Swiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css';
import { getGenres } from "../MoviedbReposity";
import React, { useEffect, useState } from "react";
import ButtonGenre from "./ButtonGenre";
import { useLang } from "./Layout";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const lang = useLang()

  useEffect(() => {
    const asyncFn = async () => {
      const genresData = await getGenres();
      setGenres(genresData); 
    };
    asyncFn();
  },[lang]);

  return (
    <section className="mx-auto mt-5 container">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={'auto'}
        loop={true}
        className="rounded-xl"
      >
        {genres.map(genre => (
          <SwiperSlide className=" text-white text-center my-auto py-4 max-w-max" key={genre.id}>
            <ButtonGenre genre={genre} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
  
}
