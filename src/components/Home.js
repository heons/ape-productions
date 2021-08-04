import React from 'react';
import { useState, useRef, useCallback } from 'react';
import SampleVideoFrame from './SampleVideoFrame';
import useWindowDimensions from '../hooks/useWindowDimensions'
import useMousePosition from '../hooks/useMousePosition';
import getInitArtists from '../resource';


const Home = () => {
    const { height, width } = useWindowDimensions();
    const { mousePosition } = useMousePosition();
    // const [artists, setArtists] = useState(getInitArtists);
  
    const artists = useRef(getInitArtists());
    const targetPos1 = useRef({x: 0, y: 0});
    const targetPos2 = useRef({x: 0, y: 0});
  
    // const hasMovedCursor = typeof mousePosition.x === "number" && typeof mousePosition.y === "number";
  
    artists.current = artists.current.map((artist) => {
        return {
            ...artist,
            subItems: [artist.subItems.map((subItem) => { return {...subItem}})],
            initPos: {
                ...artist.initPos
            },
            seedPos: {
                x: artist.initPos.x * width / 1024,
                y: artist.initPos.y * height / 768
            }
        }
    });

    targetPos1.current = {
        x: -(mousePosition.x - width/2),
        y: -(mousePosition.y - height/2)
    };
  
    targetPos2.current = {
        x: -(mousePosition.x - width/2) + width/50,
        y: -(mousePosition.y - height/2) + height/50
    };

    const stylesTitle = {
        position: 'absolute',
        color: 'white',
        top: `${height - 80}px`,
        left: '10px',
    };

    const [ title, setTitle ] = useState('');
    const onMouseOver = useCallback(newTitle => setTitle(newTitle), [setTitle]);
    
    return (
        <div>
            {/* <h1>
                {hasMovedCursor
                ? `Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`
                : "Move your mouse around."}
            </h1> */}
            {artists.current.map((artist) => (
                <SampleVideoFrame
                    key={artist.title}
                    artist = {artist}
                    src={artist.sampleVideoSrc}
                    screenSize={{height, width}}
                    initPos={artist.seedPos}
                    targetPos={artist.group === 'group1' ? targetPos1.current : targetPos2.current}
                    onMouseOver={onMouseOver}
                />
            ))}
            <h1 style={stylesTitle}>
                {title}
            </h1>
        </div>
    );
}

export default Home;