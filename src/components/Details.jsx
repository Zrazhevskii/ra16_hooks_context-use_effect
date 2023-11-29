import React, { useState, useContext, useEffect } from 'react';
import '../style/Details.css';
import Context from './Context';

export const Details = () => {
    const value = useContext(Context);

    const [card, setCard] = useState(value.card);

    useEffect(() => {
        setCard(value.card);
    }, [value.card]);

    return (
        card !== null && (
            <div className='details-wrapper'>
                <img
                    src={card.avatar}
                    alt='какая-то картинка'
                    className='img'
                />
                <h4>{card.name}</h4>
                <div className='title'>Город - {card.details.city}</div>
                <div className='title'>Компания - {card.details.company}</div>
                <div className='title'>Должность - {card.details.position}</div>
            </div>
        )
    );
};
