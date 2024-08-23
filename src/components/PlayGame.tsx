import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export const PlayGame = () => {
    const { name } = useParams<{ name: string }>();
    const location = useLocation();
    const queryParams = location.search;

    return (
        <iframe
            src={`/games/${name}/index.html${queryParams}`}
            title="Game 01"
            className='w-[100vw] h-[100vh]'
        />
    );
};
