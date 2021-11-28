import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    data: Item;
}

export const ListItem = ({ data }: Props) => {
    return (
        <C.Container>
            <label>{data.title}</label>
        </C.Container>
    );
}