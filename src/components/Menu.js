import './Menu.css';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { getArtistListInCategory } from '../resource'
import { photoWorkList } from '../resource'


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
        if (category === 'film') {
            return <div>
                {
                    artistByCategory.map((artist) => {
                        return (    
                            <div key={artist.title}>
                                <h3>
                                    <Link
                                        className={'Menu-sub-item'}
                                        to={`${process.env.PUBLIC_URL}/${artist.id}`}
                                    >
                                        {artist.title}  
                                    </Link>
                                </h3>
                            </div>
                        )
                    })
                }
            </div>
        } else {
            return <div></div>
        }
    }

    const PhotoList = () => {
        if (category === 'photo') {
            return <div>
                {
                    photoWorkList.map((photo, i) => {
                        return (    
                            <div key={photo.title}>
                                <h3>
                                    <Link
                                        className={'Menu-sub-item'}
                                        to={`${process.env.PUBLIC_URL}/photo/${i}`}
                                    >
                                        {photo.title}
                                    </Link>
                                </h3>
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
                <Link to={`${process.env.PUBLIC_URL}/`} className='Menu-item'>
                    APE.
                </Link>
            </h1>
            <div style={{display: 'flex'}}>
                {items.current.map((item) => {
                    return (
                        <div style={{display: 'flex'}}>
                            <h1>
                                <Link 
                                    to={category === item ? `${process.env.PUBLIC_URL}/` : `${process.env.PUBLIC_URL}/?category=${item}`}
                                    key={item}
                                    className={category === item ? 'Menu-item-selected' : 'Menu-item'}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            </h1>
                            <h1>&nbsp;/&nbsp;</h1>
                        </div>
                    )
                })}
            </div>
            <ArtistList />
            <PhotoList />
        </div>
    )
}

export default Menu;