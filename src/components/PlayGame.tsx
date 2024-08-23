import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JSZip from 'jszip';

export const PlayGame = () => {
    const { name } = useParams<{ name: string }>();
    return (
        <iframe
            src={`/games/${name}/index.html`}
            title="Game 01"
            style={{ width: '100%', height: '100vh', border: 'none' }}
        />
    );
};
