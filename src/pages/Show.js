import React from 'react';
import { useParams } from 'react-router-dom';
import data from "../data/data_film.json"
import YoutubeEmbed from "../components/YoutubeEmbed"

const Show = () => {
    const { uuid } = useParams();

    const movie = data.find(item => item.Uuid === uuid)    

    return (
        <div>
            <h1 class="block mt-5 mb-10 text-lg font-bold text-black">
                {movie.Title}
            </h1>
            <YoutubeEmbed embedId={movie.Trailer} />
        </div>
    );
}
export default Show;