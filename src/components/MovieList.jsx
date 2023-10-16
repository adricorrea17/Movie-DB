import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css';
import { getMovies } from "../MoviedbReposity";
import Movie from "./Movie";

export default function MovieList({ genreName, genreId }) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const asycFn = async () => {
      const movies = await getMovies(genreId);

      setMovies(movies);
    }
    asycFn()
  }, []) // error: no le pasamos las dependencias que queriamos que cambien y con un array 
         //vacio solo se ejecuta ese codigo la primera vez que se renderiza el componente
         //si no ponemos nada pasa la peticion infinita pero no entiendo porque nos paso a nosotros si pusimos un array vacio

  return (
    <section className=" container mx-auto py-12 px-12">
      <h1 className="text-4xl text-white font-bold mb-6">{genreName}</h1>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 50,
          }
        }}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {movies.map((movie) => (
          <SwiperSlide><Movie key={movie.id} movie={movie} /></SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


