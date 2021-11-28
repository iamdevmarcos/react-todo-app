import { ChangeEvent, useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { FirstLetterUp } from '../../helpers/FirstLetterUp';

type Props = {
    data: Item;
}

export const ListItem = ({ data }: Props) => {
    const [isChecked, setIsChecked] = useState(data.done);

    const handleDone = (e: ChangeEvent<HTMLInputElement>) => {
        (e.target.checked === true)
            ? setIsChecked(1)
            : setIsChecked(0);
    }

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={(isChecked === 1)?true:false}
                onChange={handleDone}
            />
            <label>{FirstLetterUp(data.title)}</label>
        </C.Container>
    );
}