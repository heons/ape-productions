import './Menu.css';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ category }) => {

    const items = useRef(
        [
            'film',
            'photo',
            'client',
            'note',
            'contact',
        ]
    );

    return (
        <div className='Menu'>
            <h1>
                <Link to={'/'} className='Menu-item'>
                    APE.
                </Link>
            </h1>
            <h1>
                {'/ '}
                {items.current.map((item) => {
                    return (
                        <Link 
                            to={`/?category=${item}`}
                            key={item}
                            className={category === item ? 'Menu-item-selected' : 'Menu-item'}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1) + ' / '}
                        </Link>
                    )
                })}
            </h1>
        </div>
    )
}

export default Menu;