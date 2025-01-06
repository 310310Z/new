import { useEffect, useState } from 'react';

interface DiaryEntry {
    id: number;
    content: string;
    date: string;
}

const Diaries = () => {
    const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

    useEffect(() => {
        // Fetch the saved diary entries from local storage or an API
        const savedDiaries = localStorage.getItem('diaries');
        if (savedDiaries) {
            setDiaries(JSON.parse(savedDiaries));
        }
    }, []);

    return (
        <div>
            <h1>Diaries</h1>
            <ul>
                {diaries.map((diary) => (
                    <li key={diary.id}>
                        <p>{diary.content}</p>
                        <small>{new Date(diary.date).toLocaleDateString()}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Diaries;