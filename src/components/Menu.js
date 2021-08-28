import './Menu.css';
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

// Resources
import { getArtistListInCategory } from '../resources/films'
import { photoWorkList } from '../resources/photos'

// Hooks
import useWindowDimensions from '../hooks/useWindowDimensions'


const Menu = ({ category }) => {

    const { height } = useWindowDimensions();

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
            return <div style={{overflowY: 'scroll', height: height < 400 ? `${height/3*2}px` : null }}>
                {
                    artistByCategory.map((artist) => {
                        return (    
                            <div key={'film' + artist.title}>
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
                            <div key={'photo' + photo.title}>
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
            <h1 style={{  paddingBottom: `1.0em` }}>
                <Link to={`${process.env.PUBLIC_URL}/`} className='Menu-item'>
                    APE.
                </Link>
            </h1>
            <div style={{display: 'flex'}}>
                {items.current.map((item, i) => {
                    return (
                        <div style={{display: 'flex'}} key={'submenu' + i}>
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