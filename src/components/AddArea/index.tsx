import { useState, FormEvent } from 'react';
import * as C from './styles';

export const AddArea = () => {
    const [inputText, setInputText] = useState('');

    const handleAddTask = async (e: FormEvent) => {
        e.preventDefault();

        const API_URL = 'http://localhost:4000/todo/'

        const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: inputText,
        })
        });
        const json = await res.json();

        if(json.error !== '') {
        alert(json.error);
        }

        console.log(json);
    }

    return (
        <C.Container>
            <form onSubmit={handleAddTask}>
                <div className="image">➕</div>
                <input
                    type="text"
                    placeholder="Add task"
                    value={inputText}
                    onChange={e => setInputText(e.target.value)}
                    autoFocus
                />
                <input
                    type="submit"
                    value="Send"
                />
            </form>
        </C.Container>
    );
}