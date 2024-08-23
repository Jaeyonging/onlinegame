import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JSZip from 'jszip';

export const PlayGame: React.FC = () => {
    const { name } = useParams<{ name: string }>();

    return (
        <iframe
            src={`/games/${name}/index.html`}
            title="cooking"
            style={{ width: '100%', height: '100vh', border: 'none' }}
        />
    );
};
