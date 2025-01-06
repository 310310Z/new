import { useState } from 'react';

const CreatePage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState<File | null>(null);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= 50) {
            setTitle(e.target.value);
        }
    };

    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        if (window.confirm('一度保存したら編集できません。本当に保存していいですか？')) {
            // Handle form submission logic here
            console.log({ title, content, image });
        }
        console.log({ title, content, image });
    };
    

        

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">タイトル (50文字まで):</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={handleTitleChange}
                    maxLength={50}
                />
            </div>
            <div>
                <label htmlFor="content">本文:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={handleContentChange}
                />
            </div>
            <div>
                <label htmlFor="image">画像挿入:</label>
                <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <button type="submit">保存</button>
        </form>
    );
};

export default CreatePage;