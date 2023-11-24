import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css';
import { getMovies } from "../MoviedbReposity";
import Movie from "./Movie";
import { Fade } from "react-awesome-reveal";
import { useLang } from "./Layout";

export default function MovieSwiper({ genreName, genreId }) {
  const [movies, setMovies] = useState([])
  const lang = useLang()

  useEffect(() => {
    const asycFn = async () => {
      const movies = await getMovies(genreId);

      setMovies(movies);
    }
    asycFn()
  }, [lang])

  return (
    <Fade>
      <section className="mx-auto py-5 container px-3">
        <h1 className="text-4xl text-white font-bold mb-6">{genreName}</h1>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1300: {
              slidesPerView: 6,
              spaceBetween: 30,
            }
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}><Movie movie={movie} /></SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Fade>
  );
}


