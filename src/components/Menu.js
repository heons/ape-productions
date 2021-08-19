import './Menu.css';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { getArtistListInCategory } from '../resource'

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


    const artistByCategory = getArtistListInCategory(category);

    const ArtistList = () => {
        if (category) {
            return <div>
                {
                    artistByCategory.map((artist) => {
                        return (    
                            <div key={artist.title}>
                                <h1>
                                    <Link
                                        className={'Menu-sub-item'}
                                        to={`/${artist.id}?idx=0`}
                                    >
                                        {artist.title}
                                        
                                    </Link>
                                </h1>
                            </div>
                        )
                    })
                }
            </div>
        } else {
            return <div></div>
        }
    }


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
                            to={category === item ? `/` : `/?category=${item}`}
                            key={item}
                            className={category === item ? 'Menu-item-selected' : 'Menu-item'}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1) + ' / '}
                        </Link>
                    )
                })}
            </h1>
            <ArtistList />
        </div>
    )
}

export default Menu;