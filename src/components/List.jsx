import React, { useContext } from 'react';
import '../style/List.css';
import Context from './Context';

export const List = ({ elem }) => {
    const value = useContext(Context);

    const hendlerClick = (id) => {
        value.addCard(id);
    };

    const { id, name } = elem;
    return (
        <button
            type='button'
            className='list-box'
            onClick={(elem) => hendlerClick(id)}
        >
            {name}
        </button>
    );
};
