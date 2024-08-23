import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JSZip from 'jszip';

export const PlayGame: React.FC = () => {
    const { name } = useParams<{ name: string }>();
    const [gameContent, setGameContent] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGame = async () => {
            try {
                const response = await fetch(`/games/${name}.zip`);
                if (!response.ok) throw new Error('게임 파일을 불러올 수 없습니다.');
                const blob = await response.blob();

                const zip = await JSZip.loadAsync(blob);
                const files: Record<string, string> = {};

                await Promise.all(
                    Object.keys(zip.files).map(async (filename) => {
                        const file = zip.files[filename];
                        if (!file.dir) {
                            const content = await file.async('text');
                            files[filename] = content;
                        }
                    })
                );

                // UTF-8 문자열을 Base64로 인코딩하기 위한 함수
                const utf8ToBase64 = (str: string) => {
                    return btoa(unescape(encodeURIComponent(str)));
                };

                // index.html 파일의 내용을 수정해서 JavaScript 파일의 경로를 메모리에서 로드할 수 있도록 수정
                let indexContent = files['index.html'];
                if (indexContent) {
                    indexContent = indexContent.replace(/src="(.+?)"/g, (match, p1) => {
                        const fileName = p1.split('/').pop(); // 파일 이름 추출
                        const fileUrl = `data:text/javascript;base64,${utf8ToBase64(files[fileName] || '')}`;
                        return `src="${fileUrl}"`;
                    });

                    setGameContent(indexContent);
                }
            } catch (error) {
                console.error('게임 로드에 실패했습니다:', error);
            } finally {
                setLoading(false);
            }
        };

        loadGame();
    }, [name]);

    if (loading) {
        return <div>게임을 불러오는 중입니다...</div>;
    }

    return (
        <div>
            {gameContent ? (
                <iframe
                    srcDoc={gameContent}
                    title={`Game ${name}`}
                    style={{ width: '100%', height: '100vh', border: 'none' }}
                />
            ) : (
                <div>게임을 불러올 수 없습니다.</div>
            )}
        </div>
    );
};
