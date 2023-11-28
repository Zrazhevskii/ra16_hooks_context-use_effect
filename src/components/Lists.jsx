import React, { useEffect, useState } from 'react';
import { getCards } from '../api';
import '../style/Lists.css';
import { List } from './List';

export const Lists = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getCards().then((data) => {
            setCards(data);
        });
    }, []);

    return (
        <div className='lists-wrapper'>
            {
                cards.map((elem) => {
                    return <List elem={elem} key={elem.id}/>
                })
            }
            
        </div>
    )
};
