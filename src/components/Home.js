import React from 'react';
import { useState, useRef, useCallback } from 'react';
import SampleVideoFrame from './SampleVideoFrame';
import useWindowDimensions from '../hooks/useWindowDimensions'
import useMousePosition from '../hooks/useMousePosition';
import { getInitSampleArtistsInfo, clientCompanyList, clientArtistList } from '../resource';
import TextList from './TextList'


const Home = ({category}) => {
    // console.log(category);
    const { height, width } = useWindowDimensions();
    const { mousePosition } = useMousePosition();
    // const [artists, setArtists] = useState(getInitSampleArtistsInfo);
  
    const artists = useRef(getInitSampleArtistsInfo());
    const targetPos1 = useRef({x: 0, y: 0});
    const targetPos2 = useRef({x: 0, y: 0});
  
    // const hasMovedCursor = typeof mousePosition.x === "number" && typeof mousePosition.y === "number";
  
    artists.current = artists.current.map((artist) => {
        return {
            ...artist,
            initPos: {
                ...artist.initPos
            },
            seedPos: {
                x: artist.initPos.x * width / 1024 - width/3,
                y: artist.initPos.y * height / 768 - height/3
            }
        }
    });

    targetPos1.current = {
        x: -(mousePosition.x - width/2),
        y: -(mousePosition.y - height/2)
    };
  
    targetPos2.current = {
        x: -(mousePosition.x - width/2) + width/200,
        y: -(mousePosition.y - height/2) + height/200
    };

    const stylesTitle = {
        position: 'absolute',
        color: 'white',
        top: `${height - 80}px`,
        left: '10px',
    };

    const isCategoryFilm = category ===undefined || category === 'film';

    const [ title, setTitle ] = useState('');
    // TODO: Change name.
    const onMouseOver = useCallback(newTitle => setTitle(newTitle), [setTitle]);
    
    return (
        <div>
            {/* <h1>
                {hasMovedCursor
                ? `Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`
                : "Move your mouse around."}
            </h1> */}
            {isCategoryFilm && artists.current.map((artist) => (
                <SampleVideoFrame
                    key={artist.title}
                    artist = {artist}
                    screenSize={{height, width}}
                    targetPos={artist.group === 'group1' ? targetPos1.current : targetPos2.current}
                    onMouseOver={onMouseOver}
                />
            ))}
            {category === 'client' && 
                <div
                    style={{position: 'absolute', top: `60px`, left: `10px`, color: 'white'}}
                >
                    <h1>Company</h1>
                    <TextList textList={clientCompanyList} width='300px' height='300px'/>
                </div>
            }
            
            {category === 'client' && 
                <div
                    style={{position: 'absolute', top: `${height-400}px`, left:`${width-410}px`, color: 'white'}}
                >
                    <h1>Artist</h1>
                    <TextList textList={clientArtistList} width='400px' height='300px'/>
                </div>
            }

            {category === 'contact' && 
                <div
                style={{position: 'absolute', top: `80px`, left: `30px`, color: 'white', 'text-align': 'left'}}
                >
                    <h1>APE.</h1>
                    <h2>서울특별시 마포구 양화진길 6, 6층</h2>
                    <h2>+82-10-8487-2110</h2>
                    <h2>+82-10-4642-8321</h2>
                    <h2>apeproductionskr@gmail.com</h2>
                </div>
            }

            <h1 style={stylesTitle}>
                {title}
            </h1>
        </div>
    );
}

export default Home;