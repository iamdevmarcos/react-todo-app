import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

export const AddArea = () => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            alert("Progress okay!");
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input
                type="text"
                placeholder="Add task"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                autoFocus
            />
        </C.Container>
    );
}