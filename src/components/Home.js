import React from 'react';
import { useState, useRef } from 'react';
import SampleVideoFrame from './SampleVideoFrame';
import useWindowDimensions from '../hooks/useWindowDimensions'
import useMousePosition from '../hooks/useMousePosition';

const getInitArtists = () => {
    return [
        {
            name: 'name1',
            workUrls: [],
            sampleVideoSrc: 'video/mov_bbb.mp4',
            initPos: {
                x: 100,
                y: 100
            },
            seedPos: {
                x: 0,
                y: 0
            },
            group: 'group1'
        },
        {
            name: 'name2',
            workUrls: [],
            sampleVideoSrc: 'video/mov_bbb.mp4',
            initPos: {
                x: 0,
                y: 0
            },
            seedPos: {
                x: 0,
                y: 0
            },
            group: 'group2'
        }
    ];
}

const Home = () => {
    const { height, width } = useWindowDimensions();
    const { mousePosition } = useMousePosition();
    // const [artists, setArtists] = useState(getInitArtists);
  
    const artists = useRef(getInitArtists());
    const targetPos1 = useRef({x: 0, y: 0});
    const targetPos2 = useRef({x: 0, y: 0});
  
    const hasMovedCursor = typeof mousePosition.x === "number" && typeof mousePosition.y === "number";
  
    artists.current = artists.current.map((artist) => {
        return {
            ...artist,
            workUrls: [...artist.workUrls],
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
    
    return (
        <div>
            <h1>
                {hasMovedCursor
                ? `Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`
                : "Move your mouse around."}
            </h1>
            {artists.current.map((artist) => (
                <SampleVideoFrame
                    key={artist.name}
                    src={artist.sampleVideoSrc}
                    screenSize={{height, width}}
                    initPos={artist.seedPos}
                    targetPos={artist.group === 'group1' ? targetPos1.current : targetPos2.current}
                />
            ))}
        </div>
    );
}

export default Home;