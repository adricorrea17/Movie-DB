import React, { useEffect, useState } from "react";
import { GetTrailerMovie, getMovie } from "../MoviedbReposity";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { RiTwitterXLine } from 'react-icons/ri'
import { Fade } from "react-awesome-reveal";
import 'atropos/css'
import ModalMovie from "../components/ModalMovie";
import Loading from "../components/Loading";
import ButtonGenre from "../components/ButtonGenre";
import MovieSwiper from "../components/MovieSwiper";
import { useLang } from "../components/Layout";
import { _ } from "../lang";


export default function MovieDetails() {
    const [data, setData] = useState({});
    const [trailer, setTrailer] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const [isNotLoading, setisNotLoading] = useState(true);
    const { movieId } = useParams();
    const lang = useLang()

    useEffect(() => {
        window.scrollTo(0, 0);
        setisNotLoading(true);

        const asyncFn = async () => {

            const movie = await getMovie(movieId);
            const trailerMovie = await GetTrailerMovie(movieId)
            setData(movie);
            setTrailer(trailerMovie);

            setisNotLoading(false);
        };
        asyncFn();
    }, [movieId,lang]);

    if (isNotLoading) {
        return <Loading />;
    }

    const currentURL = window.location.href;

    const twitterText = _("Mira esta película") + `: ${data.title}.`;

    const whatsappText = _("Mira esta película") + `: ${data.title}.`;

    const shareOnFacebook = () => {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`,
            _("Compartir en") + " Facebook",
            "width=600, height=400"
        );
    };

    const shareOnTwitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?url=${currentURL}&text=${twitterText}`,
            _("Compartir en") + " Twitter",
            "width=600, height=400"
        );
    };

    const shareOnWhatsApp = () => {
        window.open(
            `https://api.whatsapp.com/send?text=${whatsappText} ${currentURL}`,
            _("Compartir en") + " WhatsApp",
            "width=600, height=400"
        );
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <Fade>
            <section className="max-w-[1280px] px-6 mx-auto items-center flex flex-wrap md:flex-nowrap gap-12 py-12 text-white">
                <picture className="w-4/5 sm:w-2/4 md:w-1/4 mx-auto" onClick={openModal}>
                    <img className="w-full rounded-xl hover:cursor-pointer" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                </picture>
                <div className="flex flex-col gap-6 w-3/4">
                    <h1 className="sm: text-3xl md:text-4xl font-bold">{data.title}</h1>
                    <p className="text-xl">{data.overview}</p>
                    <div className="flex flex-wrap space-x-3">
                        {data.genres.map(genre => (
                            <ButtonGenre genre={genre} key={genre.id} />
                        ))}
                    </div>

                    {data.homepage && (
                        <a id="pagina" href={data.homepage}>
                            <label className="hover:text-secondary hover:cursor-pointer">{data.homepage}</label>
                        </a>
                    )}

                    <button className="px-4 py-2 bg-dark2 rounded-xl border border-dark hover:text-accent text-primary text-center w-4/12" onClick={() => navigate(-1)}>{_('Volver')}</button>

                    <div className="flex space-x-7 text-3xl">
                        <button className="hover:text-secondary" onClick={shareOnFacebook}><BsFacebook /></button>
                        <button className="hover:text-secondary" onClick={shareOnTwitter}><RiTwitterXLine /></button>
                        <button className="hover:text-secondary" onClick={shareOnWhatsApp}><BsWhatsapp /></button>
                    </div>
                </div>

            </section>
            <section className="container mx-auto text-white">
                <h1 className="text-4xl font-bold  px-4 -mb-6">{ _('Peliculas relacionadas') }</h1>
                {data.genres.lenght !== 0 && <MovieSwiper genreId={data.genres[0].id} />}
            </section>
            {isModalOpen && <ModalMovie open={isModalOpen} onClose={closeModal} trailer={trailer} />}
        </Fade>
    );
}
