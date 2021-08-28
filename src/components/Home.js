import React from 'react';
import { useState, useRef, useCallback, Suspense } from 'react';
// import SampleVideoContainer from './SampleVideoContainer';
import ClientPage from './ClientPage';
import NotePage from './NotePage';
import ContactPage from './ContactPage';
import useWindowDimensions from '../hooks/useWindowDimensions'
import useMousePosition from '../hooks/useMousePosition';
import { getInitSampleArtistsInfo } from '../resources/films';

import {
    isBrowser,
    isMobile
} from "react-device-detect";


const PhotoPageM = React.lazy(() => import('./PhotoPageM'));
const PhotoPage = React.lazy(() => import('./PhotoPage'));
const FilmPageM = React.lazy(() => import('./FilmPageM'));
const FilmPage = React.lazy(() => import('./FilmPage'));


const Home = ({ category }) => {
    // console.log(category);
    const { height, width } = useWindowDimensions();
    const { mousePosition } = useMousePosition();
    // const [artists, setArtists] = useState(getInitSampleArtistsInfo);
  
    const artists = useRef(getInitSampleArtistsInfo());
    const targetPos1 = useRef({x: 100, y: 100});
    const targetPos2 = useRef({x: 0, y: 0});

    // console.log(mousePosition);
  
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

    const offsetRatio = -100;
    const diifRatioGroup = 200;
    const ACT_RESOLUTION = 10;

    if(mousePosition.x && Math.round(mousePosition.x) % ACT_RESOLUTION === 0) {
        targetPos1.current = {
            x: -(mousePosition.x - width/2) + width/offsetRatio,
            y: -(mousePosition.y - height/2) + height/offsetRatio
        };
    }
    if(mousePosition.x && Math.round(mousePosition.x + 5) % ACT_RESOLUTION === 0) {
        targetPos2.current = {
            x: -(mousePosition.x - width/2) + width/diifRatioGroup + width/offsetRatio,
            y: -(mousePosition.y - height/2) + height/diifRatioGroup + height/offsetRatio
        };
    }

    const stylesTitle = {
        position: 'absolute',
        color: 'white',
        top: `${height - 80}px`,
        left: '10px',
    };

    // const isCategoryFilmDisplay = category !== 'photo';


    const [ title, setTitle ] = useState('');
    // TODO: Change name.
    const onMouseOver = useCallback(newTitle => setTitle(newTitle), [setTitle]);
    
    // const tmpFunc = async () => {
    //     let canvas = document.getElementById("canvas_test");
    //     var video = document.getElementById('video1');
    //     if (canvas && video) {
    //         let cx = canvas.getContext("2d");
    //         let grd = cx.createRadialGradient(100, 
    //                         100, 5, 100, 100, 100);
    //         grd.addColorStop(0, "red");
    //         grd.addColorStop(1, "green");
    //         cx.fillStyle = grd;
    //         cx.fillRect(0, 0, 200, 200);

    //         canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);  

    //         // c.srcObject = captureStream;
    //         // cx.drawImage(c, 0, 0, window.width, window.height);
    //     };
    // }
    
    // tmpFunc();

    // const artistGroup1 = artists.current.filter(artist => artist.group === 'group1')
    // const artistGroup2 = artists.current.filter(artist => artist.group === 'group2')

    
    

    const zIndex = {
        film: (category !== 'photo' || category !== 'note') ? 3 : 1,
        photo: category === 'photo' ? 3 : 1,
        client: category === 'client' ? 3 : 1,
        note: category === 'note' ? 3 : 1,
        contact: category === 'contact' ? 3 : 1,
    }


    return (
        <div>
            {/* <canvas id="canvas_test" width = {width} height = {height}
            style = {{position: 'absolute', left:'0px', right:'0px', "border": "1px solid black"}}>
                {}
            </canvas> */}
            {/* <h1>
                {hasMovedCursor
                ? `Your cursor is at ${mousePosition.x}, ${mousePosition.y}.`
                : "Move your mouse around."}
            </h1> */}


            {/* {isCategoryFilmDisplay && 
                <SampleVideoContainer
                    artists = {artistGroup1}
                    screenSize={{height, width}}
                    targetPos={targetPos1.current}
                    onMouseOver={onMouseOver}
                />
            }

            {isCategoryFilmDisplay && 
                <SampleVideoContainer
                    artists = {artistGroup2}
                    screenSize={{height, width}}
                    targetPos={targetPos2.current}
                    onMouseOver={onMouseOver}
                />
            } */}
            
            {
                isBrowser &&
                <Suspense fallback={<div>Loading...</div>}>
                    <FilmPage
                        screenSize={{height, width}}
                        targetPos={[targetPos1.current, targetPos2.current]}
                        zIndex={zIndex.film}
                        onMouseOver={onMouseOver}
                    ></FilmPage>
                </Suspense>
            }
            {
                isMobile && 
                <Suspense fallback={<div>Loading...</div>}>
                    <FilmPageM zIndex={zIndex.film}></FilmPageM>
                </Suspense>
            }

            {
                isBrowser &&
                <Suspense fallback={<div>Loading...</div>}>
                    <PhotoPage
                    screenSize={{height, width}}
                    targetPos={[targetPos1.current, targetPos2.current]}
                    zIndex={zIndex.photo}
                    ></PhotoPage>
                </Suspense>
            }
            {
                isMobile && 
                <Suspense fallback={<div>Loading...</div>}>
                    <PhotoPageM zIndex={zIndex.photo}></PhotoPageM>
                </Suspense>
            }

            {category === 'client' && 
                <ClientPage zIndex={zIndex.client} />
            }

            {category === 'note' && 
                <NotePage zIndex={zIndex.note} />
            }

            {category === 'contact' &&     
                <ContactPage zIndex={zIndex.contact} />
            }

            <h1 style={stylesTitle}>
                {title}
            </h1>
        </div>
    );
}

export default Home;