import './Menu.css';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ category, onSelect }) => {

    const items = useRef(
        [
            'Film',
            'Photo',
            'Client',
            'Note',
            'Contact',
        ]
    );

    return (
        <div className='Menu'>
            <h1>
                <Link to={'/'} className='Menu-item' onClick={() => onSelect('item')}>
                    APE.
                </Link>
            </h1>
            <h1>
                {'/ '}
                {items.current.map((item) => {
                    return (
                        <Link 
                            to={'/?' + item.toLowerCase()}
                            key={item}
                            className={category === item ? 'Menu-item-selected' : 'Menu-item'}
                            onClick={() => onSelect(item)}
                        >
                            {item + ' / '}
                        </Link>
                    )
                })}
            </h1>
        </div>
    )
}

export default Menu;