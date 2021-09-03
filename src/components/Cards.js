import React from 'react';
import { useState, useEffect } from "react";
import cardsData from 'api/cards.json';

export default function Cards() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)
    }, [])

    return (
        <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-4 px-4 md:px-0">
                {cards.length && cards.map(card => (
                    <div className="bg-white p-14 rounded-lg shadow-lg flex flex-col items-center text-center ">
                        <img className="w-[150px] h-[150px] mb-6 " src={card.image} alt=""/>
                        <h6 className="font-semibold text-xl text-primary-brand-color">{card.title}</h6>
                        <p className="mt-2 text-sm text-gray-500">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


